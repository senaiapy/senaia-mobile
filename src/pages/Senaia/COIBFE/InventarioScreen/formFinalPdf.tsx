/* eslint-disable unicorn/filename-case */
/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable unused-imports/no-unused-vars */

/* eslint-disable react-native/no-inline-styles */

//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import { Env } from '@env';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Asset } from 'expo-asset';
import { manipulateAsync } from 'expo-image-manipulator';
import { printAsync, printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import React, { memo, useEffect, useState } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import RNExitApp from 'react-native-exit-app';
import { ScrollView } from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';
import SignatureScreen from 'react-native-signature-canvas';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Loader from '@/components/loader';
import Pickers from '@/components/Pickers.component';

import {
  ActionContainer,
  Board,
  styles,
  Title,
  TitleBlue,
  TitleRed,
  TouchButton,
  ViewCenter,
  ViewRow,
  ViewRow2,
  ViewSpace,
} from './styles';
const BG_IMAGE = require('@/assets/images/Core/Fundo.png');

// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import { translate } from '@/core';
// import {Coibfes} from './types';
let onlyOne = false;
let finalidad = '';
let destino = '';
let transporte = '';

// ############### internationalization #######################
type CoibfeProps = {
  coibfes: {
    coibfeid: string;
    coibfekey: string;
    coibfetoken: string;
    coibfecodigov: string;
    coibfedestino: string;
    coibfefinalidad: string;
    coibfetransporte: string;
    coibfeaninovillos: string;
    coibfeanitoros: string;
    coibfeanivacas: string;
    coibfeanivaquillas: string;
    coibfeaniotros: string;
    coibfeanitotal: string;
    coibfeanihilton: string;
    coibfetecnico_vpa_id: string;
    coibfetecniconame: string;
    coibfefrigorificoname: string;
    coibfefrigorifico_id: string;
    coibfeproductorname: string;
    coibfeproductor_id: string;
    coibfeproductorsitrap: string;
    coibfepropriedadname: string;
    coibfepropriedad_id: string;
    coibfepropriedadsigor: string;
    coibfepropriedadsitrap: string;
    coibfepropriedaddepartamento: string;
    coibfepropriedaddistrito: string;
    coibfepropriedad_productor_id: string;
    coibfeprecinto1: string;
    coibfeprecinto2: string;
    coibfeprecinto3: string;
    coibfepos_id: string;
    coibfeposlatitud: string;
    coibfeposlongitud: string;
    coibfeposapikeymobile: string;
    coibfeobs: string;
    coibfedocnroprop: string;
    coibfedocdigprop: string;
    coibfedocorigabrev: string;
    coibfedoctipoabrev: string;
    coibfeerrocode: string;
    coibfeerromessage: string;
    coibfeanimales: string;
    coibfe_issinc: string;
  };
  buttonSheetExpand: boolean;
  userLocked: boolean;
  userStatus: boolean;
  setButtonSheetExpand: (value: boolean) => void;
};

const data = {
  name: 'Divyesh Barad',
  email: 'divyesh@gmail.com',
  address: 'Rajkot',
};

// #################################################
// #################################################
const FormFinalPdf = ({
  coibfes,
  userLocked,
  userStatus,
  buttonSheetExpand,
  setButtonSheetExpand,
}: CoibfeProps) => {
  Orientation.lockToPortrait();

  // const { data, loading } = useGetCharactersQuery();

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const html = `
  <html>
      <body>
          <h2>@/assets/logos/logosenacsa.png</h2>
          <h5>Coibfe: ${coibfes.coibfeid}</h5>
          <h5>Verificacion:${coibfes.coibfecodigov}</h5>
          <h6>VPA:         ${coibfes.coibfetecniconame}</h6>
          <h6>Latitud:     ${coibfes.coibfeposlatitud}</h6>
          <h6>Longitud:    ${coibfes.coibfeposlongitud}</h6>
          <h6>Propriedad:  ${coibfes.coibfepropriedadname}</h6>
          <h6>Sigor:  ${coibfes.coibfepropriedadsigor}</h6>
          <h6>SITRAP: ${coibfes.coibfepropriedadsitrap}</h6>
          <h6>Departamento:${coibfes.coibfepropriedaddepartamento}</h6>
          <h6>Districto:   ${coibfes.coibfepropriedaddistrito}</h6>
          <h6>Productor:   ${coibfes.coibfeproductorname}</h6>
          <h6>Prod.Numero: ${coibfes.coibfeproductor_id}</h6>
          <h6>Prod.Sitrap: ${coibfes.coibfeproductorsitrap}</h6>
          <h6>Frigorifico: ${coibfes.coibfefrigorificoname}</h6>
          <h6>Novillos:    ${coibfes.coibfeaninovillos}</h6>
          <h6>Toros:       ${coibfes.coibfeanitoros}</h6>
          <h6>Vacas:       ${coibfes.coibfeanivacas}</h6>
          <h6>Vaquillas:   ${coibfes.coibfeanivaquillas}</h6>
          <h6>Otros:       ${coibfes.coibfeaniotros}</h6>
          <h6>Total:       ${coibfes.coibfeanitotal}</h6>
          <h6>Hilton:      ${coibfes.coibfeanihilton}</h6>
          <h6>Finalidad:   ${coibfes.coibfefinalidad}</h6>
          <h6>Destino:     ${coibfes.coibfedestino}</h6>
          <h6>Transporte:  ${coibfes.coibfetransporte}</h6>
          <h6>Precinto1:   ${coibfes.coibfeprecinto1}</h6>
          <h6>Precinto2:   ${coibfes.coibfeprecinto2}</h6>
          <h6>Precinto3:   ${coibfes.coibfeprecinto3}</h6>
          <h6>Observacion: ${coibfes.coibfeobs}</h6>

          <h4>FIRMA: EL DOCTOR</h4>
          <h4>QRCODE: </h4>
      </body>
  </html>
`;

  function navigateToBack() {
    navigation.goBack();
  }

  function navigateToPage(/*film: FilmDTO*/) {
    navigation.navigate('Home' /*, { film }*/);
    // navigation.goBack();
  }
  // ---------------------------------------
  function Messages(mensagems: string) {
    Linking.canOpenURL('whatsapp://send?text=oi').then((supported) => {
      if (supported) {
        return Linking.openURL(
          'whatsapp://send?phone=' + Env.WHATSPHONE + '&text=' + mensagems
        );
      } else {
        return Linking.openURL(
          'https://api.whatsapp.com/send?phone=' +
            Env.WHATSPHONE +
            '&text=' +
            mensagems
        );
      }
    });
  }

  // ---------------------------------------
  // ---------------------------------------
  //----------------------------------------------
  const [isLoadingS, setLoadingS] = useState(false);
  const [signature, setSignature] = useState('');
  // ----------------------------------------------
  useEffect(() => {
    if (!onlyOne) {
      onlyOne = true;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      userStatus = true;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      userLocked = false;
    }
    finalidads();
    destinos();
    transportes();
  }, [coibfes, userLocked, userStatus]);
  // ----------------------------------------------

  const finalidads = () => {
    if (coibfes.coibfefinalidad === 'F') {
      finalidad = 'FAENA';
    } else {
      finalidad = 'OTRO';
    }
    return <>{coibfes.coibfefinalidad === 'F' ? 'FAENA' : 'OTRO'}</>;
  };

  const destinos = () => {
    coibfes.coibfedestino === 'UE'
      ? (destino = 'Union Europea')
      : (destino = 'Chile');
    return <>{coibfes.coibfedestino === 'UE' ? 'Union Europea' : 'Chile'}</>;
  };

  const transportes = () => {
    coibfes.coibfetransporte === 'T'
      ? (transporte = 'Terrestre')
      : 'F'
      ? (transporte = 'Fluvial')
      : (transporte = 'OTRO');
    return (
      <>
        {coibfes.coibfetransporte === 'T'
          ? 'Terrestre'
          : 'F'
          ? 'Fluvial'
          : 'OTRO'}
      </>
    );
  };
  // ----------------------------------------------
  const generateSignature = async () => {
    //await
  };
  // ----------------------------------------------

  const generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false,
    });
    await shareAsync(file.uri);
  };
  // ----------------------------------------------

  async function generateHTML() {
    const asset = Asset.fromModule(
      require('@/assets/logos/LOGO_SENACSA_GOBIERNO_2018.png')
    );
    const image = await manipulateAsync(asset.localUri ?? asset.uri, [], {
      base64: true,
    });
    return `
      <html>
        <img
          src="data:image/jpeg;base64,${image.base64}"
          style="width: 90vw;" />
      </html>
    `;
  }
  // ----------------------------------------------

  async function print() {
    const html = await generateHTML();
    await printAsync({ html });
  }
  // ----------------------------------------------

  return (
    <>
      {/* HEADER */}
      {/*                                                                   */}
      <View style={styles.avatarView}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(Env.SITE);
          }}
        >
          <Image
            source={require('@/assets/logos/logosenaia.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <View style={styles.avatarSenacsas}>
          <Image
            source={require('@/assets/logos/logosenacsa.png')}
            style={styles.avatarSenacsa}
          />
        </View>
      </View>
      {/*                                                                   */}

      {/* HEADER */}
      <ScrollView>
        <Loader visible={isLoadingS} />
        <Board>
          <ViewRow>
            <Title size={14}>{translate('coibfe.coibfe')}</Title>
            <TitleBlue size={14}>{coibfes.coibfeid}</TitleBlue>
          </ViewRow>
          <ViewRow>
            <Title size={14}>{translate('coibfe.vpa')}</Title>
            <TitleBlue size={14}>{coibfes.coibfetecniconame}</TitleBlue>
          </ViewRow>
          <ViewRow>
            <Title size={14}>{translate('coibfe.codigov')}</Title>
            <TitleBlue size={14}>{coibfes.coibfecodigov}</TitleBlue>
          </ViewRow>
          {!userStatus ? (
            <>
              <TitleRed size={14}>
                {translate('message.userNotActive')}
              </TitleRed>
              <TitleBlue size={14}>{translate('message.callHelp')}</TitleBlue>
            </>
          ) : null}
          {userLocked ? (
            <>
              <TitleRed size={14}>
                {translate('message.userNotUnlocked')}
              </TitleRed>
              <TitleBlue size={14}>{translate('message.callHelp')}</TitleBlue>
            </>
          ) : null}
          <ViewRow2>
            {/**/}
            {userLocked ? (
              <TouchableOpacity
                onPress={() => {
                  Messages('Informar su VPA y Problema');
                }}
              >
                <View style={styles.iconHelp}>
                  <Ionicons
                    style={{ marginRight: 10, marginTop: 20 }}
                    name="chatbox"
                    color="#25d366"
                    size={30}
                  />
                  <Text style={styles.text}>{translate('general.Help')}</Text>
                </View>
              </TouchableOpacity>
            ) : null}
            {/**/}
            {!userStatus ? (
              <TouchableOpacity
                onPress={() => {
                  Messages('Informar su VPA y Problema');
                }}
              >
                <View style={styles.iconHelp}>
                  <Ionicons
                    style={{ marginRight: 10, marginTop: 20 }}
                    name="chatbox"
                    color="#25d366"
                    size={30}
                  />
                  <Text style={styles.text}>{translate('general.Help')}</Text>
                </View>
              </TouchableOpacity>
            ) : null}
          </ViewRow2>

          {/*                                                                   */}
          <ViewCenter>
            <Title size={12}>{translate('coibfe.gps')}</Title>
            <TitleBlue size={14}>{coibfes.coibfeposlatitud}</TitleBlue>
            <TitleBlue size={14}>{coibfes.coibfeposlongitud}</TitleBlue>
          </ViewCenter>
          <TouchButton
            onPress={() => {
              setButtonSheetExpand(true);
            }}
          >
            <Title size={12}>{translate('coibfe.propriedad')}</Title>
            <ActionContainer>
              <TitleBlue size={12}>{coibfes.coibfepropriedadname}</TitleBlue>
            </ActionContainer>
            <ViewCenter>
              <TitleBlue size={12}>
                SIGOR={}
                {coibfes.coibfepropriedadsigor}
              </TitleBlue>
              <TitleBlue size={12}>
                SITRAP={}
                {coibfes.coibfepropriedadsitrap}
              </TitleBlue>
            </ViewCenter>
          </TouchButton>

          <ViewRow>
            <Title size={12}>{translate('coibfe.depto')}</Title>
            <TitleBlue size={12}>
              {coibfes.coibfepropriedaddepartamento}
            </TitleBlue>
          </ViewRow>
          <ViewRow>
            <Title size={12}>{translate('coibfe.distrito')}</Title>
            <TitleBlue size={12}>{coibfes.coibfepropriedaddistrito}</TitleBlue>
          </ViewRow>
          <ViewSpace />

          <TouchButton
            onPress={() => {
              setButtonSheetExpand(true);
            }}
          >
            <Title size={12}>{translate('coibfe.productor')}</Title>
            <ActionContainer>
              <TitleBlue size={12}>{coibfes.coibfeproductorname}</TitleBlue>
            </ActionContainer>
            <ViewCenter>
              <TitleBlue size={12}>
                DOC={}
                {coibfes.coibfeproductor_id}
              </TitleBlue>
              <TitleBlue size={12}>
                SITRAP={}
                {coibfes.coibfeproductorsitrap}
              </TitleBlue>
            </ViewCenter>
          </TouchButton>

          <ViewSpace />

          <TouchButton
            onPress={() => {
              setButtonSheetExpand(true);
            }}
          >
            <Title size={12}>{translate('coibfe.frigorifico')}</Title>
            <ActionContainer>
              <TitleBlue size={12}>{coibfes.coibfefrigorificoname}</TitleBlue>
            </ActionContainer>
          </TouchButton>

          <ViewSpace />

          <Title size={12}>{translate('coibfe.animales_novillos')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{coibfes.coibfeaninovillos}</TitleBlue>
          </ActionContainer>
          <Title size={12}>{translate('coibfe.animales_toros')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{coibfes.coibfeanitoros}</TitleBlue>
          </ActionContainer>
          <Title size={12}>{translate('coibfe.animales_vacas')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{coibfes.coibfeanivacas}</TitleBlue>
          </ActionContainer>
          <Title size={12}>{translate('coibfe.animales_vaquillas')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{coibfes.coibfeanivaquillas}</TitleBlue>
          </ActionContainer>
          <Title size={12}>{translate('coibfe.animales_otros')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{coibfes.coibfeaniotros}</TitleBlue>
          </ActionContainer>
          <Title size={12}>{translate('coibfe.animales_hilton')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{coibfes.coibfeanihilton}</TitleBlue>
          </ActionContainer>
          <ViewRow>
            <Title size={12}>{translate('coibfe.totalani')}:</Title>
            <TitleBlue size={12}>{coibfes.coibfeanitotal}</TitleBlue>
          </ViewRow>
          <ViewSpace />

          <Title size={12}>{translate('coibfe.finalidad')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{finalidads()}</TitleBlue>
          </ActionContainer>
          <ViewSpace />

          <Title size={12}>{translate('coibfe.destino')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{destinos()}</TitleBlue>
          </ActionContainer>
          <ViewSpace />

          <Title size={12}>{translate('coibfe.transporte')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{transportes()}</TitleBlue>
          </ActionContainer>
          <ViewSpace />

          <Title size={12}>{translate('coibfe.precinto1')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{coibfes.coibfeprecinto1}</TitleBlue>
          </ActionContainer>
          <Title size={12}>{translate('coibfe.precinto2')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{coibfes.coibfeprecinto2}</TitleBlue>
          </ActionContainer>
          <Title size={12}>{translate('coibfe.precinto3')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{coibfes.coibfeprecinto3}</TitleBlue>
          </ActionContainer>
          <ViewSpace />

          <Title size={12}>{translate('coibfe.Observacion')}</Title>
          <ActionContainer>
            <TitleBlue size={12}>{coibfes.coibfeobs}</TitleBlue>
          </ActionContainer>
          <ViewSpace />

          <Title size={12}>{translate('coibfe.Caravanas')}</Title>
          <Pickers data="Caravanas" />
          <ViewSpace />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'blue' }]}
              onPress={() => {
                generateSignature();
              }}
            >
              <Text style={styles.text}>{translate('general.Signature')}</Text>
            </TouchableOpacity>
          </View>
          <ViewSpace />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'green' }]}
              onPress={() => {
                generatePdf();
              }}
            >
              <Text style={styles.text}>{translate('general.PrintPdf')}</Text>
            </TouchableOpacity>
          </View>
          <ViewSpace />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'red' }]}
              onPress={() => {
                RNExitApp.exitApp();
              }}
            >
              <Text style={styles.text}>{translate('general.GoOut')}</Text>
            </TouchableOpacity>
          </View>
          <ViewSpace />
          <View style={styles.preview}>
            {signature && (
              <Image style={styles.previewImage} source={{ uri: signature }} />
            )}
          </View>
          <SignatureScreen
            onOK={setSignature}
            onEmpty={() => console.log('onEmpty')}
            onClear={() => setSignature('')}
            autoClear={true}
            imageType={'image/png'}
          />
        </Board>
      </ScrollView>
    </>
  );
};
export default memo(FormFinalPdf);
