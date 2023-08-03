/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import React, { useEffect, useState } from 'react';
import {
  Image,
  PermissionsAndroid,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { showMessage } from 'react-native-flash-message';
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import { DemoButton } from '@/components/Gallery';
import { translate } from '@/core';
import nftService from '@/services/NftService';
import NetworkUtils from '@/utils/Networkutils';

import { styles } from './styles';

/* toggle includeExtra */
const includeExtra = true;

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: 'PHOTO',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  /*
  {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'Take Video',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'video',
      includeExtra,
    },
  },
  {
    title: 'Select Video',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'video',
      includeExtra,
    },
  },
  {
    title: 'Select Image or Video\n(mixed)',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'mixed',
      includeExtra,
    },
  },
  */
];

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const Scanner: React.FC = () => {
  const [nftName, setNftName] = useState('');
  const [nftValue, setNftValue] = useState('');
  const [nftPrice, setNftPrice] = useState('');
  const [visibleButton, setVisibleButton] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipo, setTipo] = useState('');
  const [senha, setSenha] = useState('');
  //-----------------------
  const [nft_created_date, setNft_created_date] = useState('');
  const [nft_sales, setNft_sales] = useState('');
  const [nft_total_supply, setNft_total_supply] = useState('');
  const [nft_screen, setNft_screen] = useState('');
  const [nft_symbol, setNft_symbol] = useState('');
  const [nft_search, setNft_search] = useState('');
  const [nft_charge, setNft_charge] = useState('');
  const [nft_create, setNft_create] = useState('');
  const [nft_chain_public_key, setNft_chain_public_key] = useState('');
  const [nft_chain_private_key, setNft_chain_private_key] = useState('');
  const [nft_device_token_id, setNft_device_token_id] = useState('');
  const [nft_wallet_id, setNft_wallet_id] = useState('');

  const [nft_name, setNft_name] = useState('');
  const [nft_price, setNft_price] = useState('');
  const [nft_description, setNft_description] = useState('');
  const [nft_chain, setNft_chain] = useState('');
  const [nft_chain_market, setNft_chain_market] = useState('');
  const [nft_chain_url, setNft_chain_url] = useState('');
  const [errorRegister, setErrorRegister] = useState('');
  const [nft_nameError, setNft_nameError] = useState('');
  const [nft_priceError, setNft_priceError] = useState('');
  const [nft_descriptionError, setNft_descriptionError] = useState('');
  const [nft_chainError, setNft_chainError] = useState('');
  const [nft_chain_marketError, setNft_chain_marketError] = useState('');
  const [nft_chain_urlError, setNft_chain_urlError] = useState('');

  //-----------------------
  const [response, setResponse] = React.useState<any>(null);
  //-----------------------

  const onButtonPress = React.useCallback((type: any, options: any) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);
  //-----------------------

  function onMessage(
    messages: string,
    descriptions: string = '',
    types: any = 'success'
  ) {
    showMessage({
      message: messages,
      description: descriptions,
      type: types, // danger // success
      //backgroundColor: 'purple', // background color
      // color: '#606060', // text color
      duration: 4000,
      icon: 'success', // danger
      onPress: () => {
        onMessageClick();
        /* THIS FUNC/CB WILL BE CALLED AFTER MESSAGE PRESS */
      },
    });
  }
  //-----------------------

  function onMessageClick() {
    console.log('CLICK');
  }
  //-----------------------

  const showDialog = (titulos: string, mensagems: string, tipos: string) => {
    setVisibleDialog(true);
    setTitulo(titulos);
    setMensagem(mensagems);
    setTipo(tipos);
  };
  //-----------------------

  const hideDialog = (status: any) => {
    setVisibleDialog(status);
  };
  //-----------------------

  const validar = () => {
    let error = false;
    setNft_nameError('');
    setNft_priceError('');
    setNft_descriptionError('');
    setNft_chainError('');
    setNft_chain_marketError('');
    setNft_chain_urlError('');
    if (nft_name === '') {
      setNft_nameError(translate('errors.scanner'));
      error = true;
    }
    if (nft_price === '') {
      setNft_priceError(translate('errors.scanner'));
      error = true;
    }
    if (nft_description === '') {
      setNft_descriptionError(translate('errors.scanner'));
      error = true;
    }
    if (nft_chain === '') {
      setNft_chainError(translate('errors.scanner'));
      error = true;
    }
    if (nft_chain_market === '') {
      setNft_chain_marketError(translate('errors.scanner'));
      error = true;
    }
    if (nft_chain_url === '') {
      setNft_chain_urlError(translate('errors.scanner'));
      error = true;
    }
    return !error;
  };

  //-----------------------API FUNCTIONS ---------------------

  const salvar = () => {
    if (validar()) {
      setLoading(true);

      let data = {
        nft_description: nft_description,
        nft_created_date: nft_created_date,
        nft_sales: nft_sales,
        nft_total_supply: nft_total_supply,
        nft_screen: nft_screen,
        nft_symbol: nft_symbol,
        nft_name: nft_name,
        nft_search: nft_search,
        nft_charge: nft_charge,
        nft_create: nft_create,
        nft_price: nft_price,
        nft_chain: nft_chain,
        nft_chain_market: nft_chain_market,
        nft_chain_url: nft_chain_url,
        nft_chain_public_key: nft_chain_public_key,
        nft_chain_private_key: nft_chain_private_key,
        nft_device_token_id: nft_device_token_id,
        nft_wallet_id: nft_wallet_id,
      };
      console.log(data);

      nftService
        .cadastrar(data)
        .then((response) => {
          setVisibleButton(false);
          setLoading(false);
          const resposta = response.data.status ? 'Sucesso' : 'Erro';
          onMessage(resposta, response.data.mensagem, 'success');
          //Alert.alertranslate(resposta, response.data.mensagem)
        })
        .catch((error) => {
          setLoading(false);
          onMessage(
            translate('walletconnect.reject'),
            translate('message.error.remote_servers_not_available'),
            'danger'
          );
          console.log(error);
          //Alert.alertranslate("Erro", "Houve um erro inesperado")
        });
    }
  };
  //-----------------------

  async function testNetServer() {
    var returno = false;
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (!isConnected) {
      onMessage(translate('message.error.internet'), '', 'danger');
    } else {
      returno = true;
    }
    return returno;
  }
  //-----------------------

  function generateImagem() {}
  //-----------------------

  function generateCaricatura() {}
  //-----------------------

  function generateAutor() {}
  //-----------------------
  async function loadServidor() {}
  // ------------------------------------
  async function publishNFT() {
    // if (validar()) {
    //   salvar();
    // }
    onMessage(translate('errors.scanner'), ' !!!! ', 'danger');
  }
  // ------------------------------------

  useEffect(() => {
    testNetServer();
    requestCameraPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.searchContainer} />
        {/* register */}
        <View>
          {/*
        <DemoTitle>🌄 React Native Image Picker</DemoTitle>
*/}
          <View style={styles.searchContainer2}>
            <Image
              source={require('@/assets/icons/user.png')}
              style={{
                height: 280 / 6,
                width: 279 / 6,
                // marginLeft: 3,
              }}
            />
            <TextInput
              style={styles.search}
              // autoFocus
              autoCorrect={false}
              placeholderTextColor={'gray'}
              onChangeText={(text) => {
                setNft_search(text);
                setNft_chain_url(text);
              }}
              placeholder={'Busca'}
              value={nft_search}
            />
            <Image
              source={require('@/assets/icons/camera.png')}
              style={{
                height: 280 / 6,
                width: 279 / 6,
                // marginLeft: 3,
              }}
            />
            <Text style={styles.errorMessage}>{nft_chain_urlError}</Text>
          </View>
          <View style={styles.buttonContainer}>
            {actions.map(({ title, type, options }) => {
              return (
                <DemoButton
                  key={title}
                  onPress={() => onButtonPress(type, options)}
                >
                  {title}
                </DemoButton>
              );
            })}
          </View>
          {/*  <DemoResponse>{response}</DemoResponse> */}

          {response?.assets &&
            response?.assets.map(({ uri }: { uri: any }) => (
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={{ width: 200, height: 200 }}
                source={{ uri: uri }}
              />
            ))}
        </View>
        {/*------ Buttons Exchange---- */}
        {/*------ Buttons Exchange---- */}
        <View style={styles.searchContainer}>
          <Text style={styles.errorMessage}>{nft_chain_marketError}</Text>
        </View>
        {!isLoading && visibleButton && (
          <TouchableOpacity
            style={styles.itemCreate}
            onPress={() => {
              publishNFT();
            }}
          >
            <Icon name="star" size={23} color="white" />
            <Text style={styles.textDelete}> {'LECTOR CARAVANA'}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
      <FlashMessage position="top" />
    </View>
  );
};
