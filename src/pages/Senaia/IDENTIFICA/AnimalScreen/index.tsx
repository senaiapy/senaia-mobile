/* eslint-disable simple-import-sort/imports */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable max-params */
/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import { Env } from '@env';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  KeyboardAvoidingView,
  Linking,
  Platform,
  Text,
  TextInput,
  Vibration,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlashMessage from 'react-native-flash-message';
import { showMessage } from 'react-native-flash-message';
import { ScrollView } from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';

import { ButtonBack } from '@/components/ButtonBack';
import { ButtonNext } from '@/components/ButtonNext';
// ############### internationalization #######################
import Pickers from '@/components/Pickers.component';
import type { RadioButtonProps } from '@/components/RadioButtonsGroup';
import { Switch } from '@/components/Switch';
// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import { translate } from '@/core';

import AnimalServices from './services';
import type { IAnimal } from './types';

//import ProductorList from '../Components/ProductorList';
import {
  ActionContainer2,
  ActionContainer3,
  Container,
  DetailButton,
  FormError,
  FormView,
  InputUser2,
  Loadings,
  Logo,
  LogoView,
  MainTitle,
  styles,
  Title,
  ViewRowS,
  ViewSpace,
} from './styles';
import Loader from '@/components/loader';

// ###############################   RADIOBUTTON  ##########################

const radioButtonsVacunaData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Faena',
    value: 'F',
    selected: true,
  },
  {
    id: '2',
    label: 'Otro',
    value: 'O',
  },
];

// ###############################   RADIOBUTTON  ##########################

// ###############################   VARIABLES  ################################

let onlyOne = false;

// ###############################
// ###############################
// ###############################
// ###############################
// ###############################

const AnimalScreen: React.FC = () => {
  Orientation.lockToPortrait();

  // const { data, loading } = useGetCharactersQuery();

  // ###############################   HOOKS  ################################

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const textInputPropriedadRef = useRef<TextInput>(null);

  // ###############################   HOOKS  ################################

  //----------------------------------------------
  const [isLoadingS, setIsLoadingS] = useState(false);
  const [isFormErrorS, setIsFormErrorS] = useState(false);
  const [buttonSheetExpand, setButtonSheetExpand] = useState(false);
  const [positionForm, setPositionForm] = useState(0);

  const [openLector, setOpenLector] = useState<boolean>(false);
  const [openSensor, setOpenSensor] = useState<boolean>(false);

  const [isEnabled, setIsEnabled] = useState(false);
  // ###############################   VARIABLES  ################################

  const [animalss, setAnimalss] = useState<Partial<IAnimal>>({
    dbversion: '',
    animalId: '',
    animalUniqueId: '',
    animal_company: '',
    animalNroTag: '',
    animalDataNascimento: '',
    animalDataQuarentena: '',
    animalIdRaca: '',
    animalSexo: '',
    animalIdClassificacao: '',
    animalUltimoPeso: '',
    animalDataUltimapesagem: '',
    animalListaNegra: '',
    animal_raza: '',
    animal_color: '',
    animal_edad: '',
    animalProductor_ID: '',
    animalPropriedad_ID: '',
    animalMarcaFuego: '',
  });
  // ###############################   FUNCTIONS  ################################

  //-----------------------------------------------
  // ----------------------------------------------
  function navigateToBack() {
    navigation.goBack();
  }

  function navigateToPage(/*film: FilmDTO*/) {
    navigation.navigate('HomeLazos' /*, { film }*/);
    // navigation.goBack();
  }
  // ----------------------------------------------

  //-------------------------------------------------
  // ----------------------------------------------
  // ----------------------------------------------

  // ###############################   RADIOBUTTON  ##############################

  const [radioButtonsVacuna, setRadioButtonsVacuna] = useState<
    RadioButtonProps[]
  >(radioButtonsVacunaData);

  async function onPressRadioButtonVacuna(
    radioButtonsVacunaArray: RadioButtonProps[]
  ) {
    setRadioButtonsVacuna(radioButtonsVacunaArray);
    // const result = filterObject(radioButtonsVacunaArray, 'selected', false);
    let values = null;
    if (
      Array.isArray(radioButtonsVacunaArray) &&
      radioButtonsVacunaArray.length
    ) {
      radioButtonsVacunaArray.forEach((element) => {
        if (element.selected === true) {
          values = element.value;
        }
      });
    }
    //console.log(values);
    setAnimalss({ ...animalss, animalNroTag: String(values) });
    Vibration.vibrate();
  }
  // ###############################   RADIOBUTTON  ########################

  // ###############################   API  ########################
  async function sendApi() {
    if (!isLoadingS) {
      setIsLoadingS(true);
      // CREATE
      const returno = await AnimalServices.AnimalCrudCreate(animalss);
      // FIND ALL
      // const returno1 = await AnimalServices.AnimalCrudFind();
      // FIND ONE
      //const returno2 = await AnimalServices.AnimalCrudFindOne("id");

      if (Env.DEBUG === 'true') {
        console.log('API_RETURN', returno);
      }
      if (returno?.created_at) {
        showSimpleMessage('Datos Enviados', 'SENAIA', 'success', {
          hideStatusBar: true,
        });
      } else {
        showSimpleMessage('Error', 'SENAIA', 'danger', {
          hideStatusBar: true,
        });
      }
    }
    Vibration.vibrate();
    setIsLoadingS(false);
  }
  // ###############################   MESSAGE  ############################
  function Messages() {
    Linking.canOpenURL('whatsapp://send?text=oi').then((supported) => {
      if (supported) {
        return Linking.openURL(
          'whatsapp://send?phone=' + Env.WHATSPHONE + '&text=Hola'
        );
      } else {
        return Linking.openURL(
          'https://api.whatsapp.com/send?phone=' + Env.WHATSPHONE + '&text=Hola'
        );
      }
    });
  }
  // -------------------------------------------
  function onMessage(
    messages: string,
    descriptions: string = '',
    typess: any = 'success'
  ) {
    showMessage({
      message: messages,
      description: descriptions,
      type: typess, // danger // success
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
  // ----------------------------------------------

  function onMessageClick() {
    // console.log('CLICK');
  }
  // ----------------------------------------------

  function showSimpleMessage(
    messagem: string,
    description: string,
    typess: any,
    props = {}
  ) {
    const message = {
      message: messagem,
      description: description,
      type: typess,
      ...props,
    };
    // @ts-ignore
    showMessage(message);
  }
  // ----------------------------------------------

  function messageWithPosition(
    messages: string,
    descriptions: string,
    hasDescription = true,
    extra = {}
  ) {
    let message = {
      message: messages,
      type: 'info',
      ...extra,
    };
    if (hasDescription) {
      // @ts-ignore
      message = { ...message, description: descriptions };
    } else {
      // @ts-ignore
      message = { ...message, floating: true };
    }
    // @ts-ignore
    showMessage(message);
  }
  // ###############################   MESSAGE  ################################

  // ######################## INIT #########################################
  //-------------------------------------------------

  // --------------------------------------------------------------------------
  const init = useCallback(async () => {
    if (!onlyOne) {
      onlyOne = true;
      showSimpleMessage('Sea Bien Venido', 'SENAIA', 'success', {
        hideStatusBar: true,
      });
      setTimeout(() => {
        // bottomSheetRef.current?.expand();
        //console.log('aki');
      }, 5000);
      setButtonSheetExpand(true);
      // console.log('POSION', formPosition);
    }
  }, []);
  // ----------------------------------------------
  // ######################## EFFECT #########################################

  const effects = useCallback(() => {
    // HELLO MESSAGE
    // FORMS CONTROL
    if (buttonSheetExpand) {
      // bottomSheetRef.current?.expand();
    }
    init();
  }, [buttonSheetExpand, init]);
  // ----------------------------------------------

  useEffect(() => {
    effects();
  }, [effects]);

  // ###############################   -EFFECT--FUNCTION  ################################

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}
      >
        <Container>
          {/* HEADER */}
          <LogoView>
            <View style={styles.containerRow}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Control', '')}
                style={styles.menuButton}
              >
                <Icon name="arrow-back" size={40} color="#061ff9" />
              </TouchableOpacity>
              <Logo source={require('@/assets/images/Senaia/Logo1.png')} />
            </View>
            {/* HEADER */}
            <ScrollView>
              <Loader visible={isLoadingS} />
              <MainTitle size={20}>
                {'      '}Animal{'      '}
              </MainTitle>
              <ActionContainer3>
                <Title size={18}>Lector Caravana</Title>
                <Switch initialState={false} onChange={setOpenLector} />
              </ActionContainer3>
              <ActionContainer2>
                <InputUser2
                  value={animalss.animalUniqueId || ''}
                  onChangeText={async (text: any) => {
                    setAnimalss({
                      ...animalss,
                      animalUniqueId: text,
                    });
                  }}
                  placeholder={'Digite Caravana'} //dummy@abc.com
                  placeholderTextColor="rgba(52, 52, 52, 0.6)"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => {}}
                  blurOnSubmit={false}
                />
              </ActionContainer2>
              <Title size={18}>Marca Fuego</Title>
              <ActionContainer2>
                <InputUser2
                  value={animalss.animalMarcaFuego || ''}
                  onChangeText={async (text: any) => {
                    setAnimalss({
                      ...animalss,
                      animalMarcaFuego: text,
                    });
                  }}
                  placeholder={'Digite Marca Fuego'} //dummy@abc.com
                  placeholderTextColor="rgba(52, 52, 52, 0.6)"
                  autoCapitalize="none"
                  keyboardType="default"
                  returnKeyType="next"
                  onSubmitEditing={() => {}}
                  blurOnSubmit={false}
                />
              </ActionContainer2>
              <Title size={18}>Edad en Meses</Title>
              <ActionContainer2>
                <InputUser2
                  value={animalss.animal_edad || ''}
                  onChangeText={async (text: any) => {
                    setAnimalss({
                      ...animalss,
                      animal_edad: text,
                    });
                  }}
                  placeholder={'Digitar la edad'} //dummy@abc.com
                  placeholderTextColor="rgba(52, 52, 52, 0.6)"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => {}}
                  blurOnSubmit={false}
                />
              </ActionContainer2>
              <Title size={18}>Peso</Title>
              <ActionContainer2>
                <InputUser2
                  value={animalss.animalUltimoPeso || ''}
                  onChangeText={async (text: any) => {
                    setAnimalss({
                      ...animalss,
                      animalUltimoPeso: text,
                    });
                  }}
                  placeholder={'Digitar el Peso'} //dummy@abc.com
                  placeholderTextColor="rgba(52, 52, 52, 0.6)"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => {}}
                  blurOnSubmit={false}
                />
              </ActionContainer2>
              <Title size={18}>Raza</Title>
              <View style={styles.pickerView}>
                <View style={styles.pickerWrapper}>
                  <Picker
                    selectedValue={animalss.animalIdRaca || ''}
                    onValueChange={async (value, index) => {
                      setAnimalss({
                        ...animalss,
                        animalIdRaca: value,
                      });
                    }}
                    mode="dropdown" // Android only
                    style={styles.picker}
                  >
                    <Picker.Item label={'Raza'} value="Unknown" />
                    <Picker.Item label="Brangus" value="brangus" />
                    <Picker.Item label="Bradford" value="bradford" />
                    <Picker.Item label="Brahman" value="brahman" />
                    <Picker.Item label="Nelor" value="nelor" />
                    <Picker.Item label="Senepol" value="senepol" />
                    <Picker.Item label="Gelvich" value="gelvich" />
                    <Picker.Item
                      label="Santa Gertrudis"
                      value="santa_gertrudis"
                    />
                    <Picker.Item label="Simmental" value="simmental" />
                    <Picker.Item label="Charolais" value="charolais" />
                    <Picker.Item label="Limousin" value="limousin" />
                    <Picker.Item label="Criollo" value="criollo" />
                    <Picker.Item label="Otros" value="otros" />
                  </Picker>
                </View>
              </View>
              <Title size={18}>Color</Title>
              <View style={styles.pickerView}>
                <View style={styles.pickerWrapper}>
                  <Picker
                    selectedValue={animalss.animal_color || ''}
                    onValueChange={async (value, index) => {
                      setAnimalss({
                        ...animalss,
                        animal_color: value,
                      });
                    }}
                    mode="dropdown" // Android only
                    style={styles.picker}
                  >
                    <Picker.Item label={'Color'} value="Unknown" />
                    <Picker.Item label="Blanco" value="blanco" />
                    <Picker.Item label="Negro" value="negro" />
                    <Picker.Item label="Chovy" value="chovy" />
                    <Picker.Item label="Barcino" value="barcino" />
                    <Picker.Item label="Overo" value="overo" />
                    <Picker.Item label="Osco" value="osco" />
                    <Picker.Item label="Pampa" value="pampa" />
                    <Picker.Item label="Amarillo" value="amarillo" />
                    <Picker.Item label="Otros" value="otros" />
                  </Picker>
                </View>
              </View>
              <Title size={18}>Sexo Animal</Title>
              <View style={styles.pickerView}>
                <View style={styles.pickerWrapper}>
                  <Picker
                    selectedValue={animalss.animalSexo || ''}
                    onValueChange={async (value, index) => {
                      setAnimalss({
                        ...animalss,
                        animalSexo: value,
                      });
                    }}
                    mode="dropdown" // Android only
                    style={styles.picker}
                  >
                    <Picker.Item label={'Sexo'} value="Unknown" />
                    <Picker.Item label="Macho" value="macho" />
                    <Picker.Item label="Hembra" value="hembra" />
                    <Picker.Item label="Otros" value="otros" />
                  </Picker>
                </View>
              </View>
              <Title size={18}>Clasificación</Title>
              <View style={styles.pickerView}>
                <View style={styles.pickerWrapper}>
                  <Picker
                    selectedValue={animalss.animalIdClassificacao || ''}
                    onValueChange={async (value, index) => {
                      setAnimalss({
                        ...animalss,
                        animalIdClassificacao: value,
                      });
                    }}
                    mode="dropdown" // Android only
                    style={styles.picker}
                  >
                    <Picker.Item label={'Classe'} value="Unknown" />
                    <Picker.Item label="Ternero" value="ternero" />
                    <Picker.Item
                      label="Desmamante Macho"
                      value="desmamante_macho"
                    />
                    <Picker.Item
                      label="Desmamante Hembra"
                      value="desmamante_hembra"
                    />
                    <Picker.Item label="Toreton" value="toreton" />
                    <Picker.Item label="Vaquilla" value="vaquilla" />
                    <Picker.Item label="Vaca" value="vaca" />
                    <Picker.Item label="Toro" value="toro" />
                    <Picker.Item label="Novillo" value="novillo" />
                    <Picker.Item label="Vaca Preñada" value="vaca_preñada" />
                    <Picker.Item label="Vaca con Cria" value="vaca_con_cria" />
                    <Picker.Item label="Vaca Seca" value="vaca_seca" />
                    <Picker.Item label="Vaca CUT" value="vaca_cut" />
                    <Picker.Item label="Vaca Donadora" value="vaca_donadora" />
                    <Picker.Item
                      label="Vaca Receptora"
                      value="vaca_receptora"
                    />
                    <Picker.Item label="Otros" value="otros" />
                  </Picker>
                </View>
              </View>
              <DetailButton
                onPress={() => {
                  sendApi();
                }}
              >
                <Text> Enviar</Text>
              </DetailButton>
            </ScrollView>
          </LogoView>
        </Container>
        <BottomSheet
          style={{ flexGrow: 1, justifyContent: 'center' }}
          ref={bottomSheetRef}
          index={0}
          snapPoints={['8%', '35%']}
        >
          <BottomSheetView>
            <FormView>
              {/* switch */}
              {(() => {
                switch (positionForm) {
                  case 0:
                    return (
                      <>
                        <ViewRowS>
                          <ButtonBack
                            title={translate('coibfe.anterior')}
                            onPress={() => {}}
                          />
                          <ButtonNext
                            title={translate('coibfe.proxima')}
                            onPress={() => {}}
                          />
                        </ViewRowS>
                        <TextInput
                          ref={textInputPropriedadRef}
                          placeholder={'Busca Animal'}
                          value={''}
                          style={styles.search}
                          onChangeText={(text) => {}}
                        />
                        {isFormErrorS ? (
                          <FormError>{translate('coibfe.formerror')}</FormError>
                        ) : null}
                      </>
                    );
                  default:
                    return (
                      <ViewRowS>
                        <ButtonBack
                          title={translate('coibfe.anterior')}
                          onPress={() => {}}
                        />
                        <ButtonNext
                          title={translate('coibfe.proxima')}
                          onPress={() => {}}
                        />
                      </ViewRowS>
                    );
                }
              })()}
            </FormView>

            {/* switch */}
          </BottomSheetView>

          <ViewSpace />
        </BottomSheet>
        <FlashMessage />
      </KeyboardAvoidingView>
    </>
  );
};
export default memo(AnimalScreen);
