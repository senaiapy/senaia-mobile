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
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import moment from 'moment';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Linking,
  PermissionsAndroid,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { showMessage } from 'react-native-flash-message';
import { ScrollView } from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';

import { ButtonBack } from '@/components/ButtonBack';
import { ButtonNext } from '@/components/ButtonNext';
import Loader from '@/components/loader';
// ############### internationalization #######################
import Pickers from '@/components/Pickers.component';
import type { RadioButtonProps } from '@/components/RadioButtonsGroup';
import { Switch } from '@/components/Switch';
import { useAuth } from '@/core';
// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import { translate } from '@/core';
import {
  createCoibfeCoibfesApi,
  updateUserCoibfeIdApi,
} from '@/services/coibfeSync/apis';
import Storage from '@/services/crudStorage';
// ###############################   WDB  ################################
import crudWDB from '@/services/crudWDB';
import Functions from '@/utils/Functions';
import protek from '@/utils/Protek';

// ###############################   CONST  ################################
import VacunaServices from './services';
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
import type { IVacuna } from './types';

const schema = yup.object().shape({
  email: yup
    .string()
    .required(translate('login.EmailError'))
    .email(translate('login.EmailValida')),
  password: yup
    .string()
    .required(translate('login.PasswordError'))
    .min(4, translate('login.PasswordValida'))
    .max(4, translate('login.PasswordValida')),
});

// ###############################   CONST  ################################

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

const radioButtonsDestinoData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Union Europea',
    value: 'UE',
    selected: true,
  },
  /*
  {
    id: '2',
    label: 'Chile',
    value: 'CHILE',
  },
  {
    id: '3',
    label: 'Otro',
    value: 'OTRO',
  },
  */
];

const radioButtonsTransporteData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Terrestre',
    value: 'T',
    selected: true,
  },
  {
    id: '2',
    label: 'Fluvial',
    value: 'F',
  },
  {
    id: '3',
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

const VacunaScreen: React.FC = () => {
  Orientation.lockToPortrait();

  // const { data, loading } = useGetCharactersQuery();

  // ###############################   HOOKS  ################################

  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const textInputPropriedadRef = useRef<TextInput>(null);
  const textInputProductorRef = useRef<TextInput>(null);
  const textInputFrigorificoRef = useRef<TextInput>(null);

  // ###############################   HOOKS  ################################

  //----------------------------------------------
  const [isLoadingS, setIsLoadingS] = useState(false);
  const [isFormErrorS, setIsFormErrorS] = useState(false);
  const [buttonSheetExpand, setButtonSheetExpand] = useState(false);
  const [positionForm, setPositionForm] = useState(0);

  const [openLector, setOpenLector] = useState<boolean>(false);
  const [openSensor, setOpenSensor] = useState<boolean>(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggle = () => setIsEnabled((previousState) => !previousState);
  // ###############################   VARIABLES  ################################

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
  function pad(n: any, width: any): any {
    let z: any;
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  /*
pad(10, 4);      // 0010
pad(9, 4);       // 0009
pad(123, 4);     // 0123
pad(10, 4, '-'); // --10
*/
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
    // setVacunass({ ...vacunass, vacunaid: String(values) });
    // await storageUpdate('@LOCALVACUNA', 'coibfeVacuna', String(values));
    Vibration.vibrate();
  }

  // ###############################   RADIOBUTTON  ########################

  const [vacunass, setVacunass] = useState<Partial<IVacuna>>({
    dbversion: '',
    vacunaId: '',
    vacunaUniqueId: '',
    vacuna_company: '',
    vacuna_lote: '',
    vacuna_codigo: '',
    vacuna_nome: '',
    vacuna_edad: '',
    vacuna_caravana: '',
  });
  // ###############################   API  ########################
  async function sendApi() {
    if (!isLoadingS) {
      setIsLoadingS(true);
      // CREATE
      const returno = await VacunaServices.VacunaCrudCreate(vacunass);
      // FIND ALL
      // const returno1 = await VacunaServices.VacunaCrudFind();
      // FIND ONE
      //const returno2 = await VacunaServices.VacunaCrudFindOne("id");

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

  // ###############################   EFFECT--FUNCTION  ######################

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

  // ----------------------------------------------

  // ----------------------------------------------

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
                {'    '}Vacunación{'    '}
              </MainTitle>
              <ActionContainer3>
                <Title size={18}>Lector Caravana</Title>
                <Switch initialState={false} onChange={setOpenLector} />
              </ActionContainer3>
              <ActionContainer2>
                <InputUser2
                  value={vacunass.vacunaUniqueId || ''}
                  onChangeText={async (text: any) => {
                    setVacunass({
                      ...vacunass,
                      vacunaUniqueId: text,
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
              <Title size={18}>Lote da Vacuna</Title>
              <ActionContainer2>
                <InputUser2
                  value={vacunass.vacuna_lote || ''}
                  onChangeText={async (text: any) => {
                    setVacunass({
                      ...vacunass,
                      vacuna_lote: text,
                    });
                  }}
                  placeholder={'Digite el lote'} //dummy@abc.com
                  placeholderTextColor="rgba(52, 52, 52, 0.6)"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => {}}
                  blurOnSubmit={false}
                />
              </ActionContainer2>
              <Title size={18}>Vacuna Aplicada</Title>
              <View style={styles.pickerView}>
                <View style={styles.pickerWrapper}>
                  <Picker
                    selectedValue={vacunass.vacuna_nome || ''}
                    onValueChange={async (value, index) => {
                      setVacunass({
                        ...vacunass,
                        vacuna_nome: value,
                      });
                    }}
                    mode="dropdown" // Android only
                    style={styles.picker}
                  >
                    <Picker.Item label={'Vacuna'} value="Unknown" />
                    <Picker.Item label="F.Aftosa" value="f_aftosa" />
                    <Picker.Item label="Brucelosis" value="brucelosis" />
                    <Picker.Item
                      label="Viral Reproductiva"
                      value="viral_reproductiva"
                    />
                    <Picker.Item label="DVB" value="dvb" />
                    <Picker.Item label="Rabia" value="rabia" />
                    <Picker.Item
                      label="Carbunclo Sintomatico"
                      value="carbunclo_sintomatico"
                    />
                    <Picker.Item
                      label="Carbunclo Bacteridiano"
                      value="carbunclo_bacteridiano"
                    />
                    <Picker.Item label="Sextuple" value="sextuple" />
                    <Picker.Item label="IBR" value="ibr" />
                    <Picker.Item label="Tuberculina" value="tuberculina" />
                    <Picker.Item label="Otros" value="otros" />
                  </Picker>
                </View>
              </View>
              <Title size={18}>Edad en Meses</Title>
              <ActionContainer2>
                <InputUser2
                  value={vacunass.vacuna_edad || ''}
                  onChangeText={async (text: any) => {
                    setVacunass({
                      ...vacunass,
                      vacuna_edad: text,
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
                          placeholder={translate('screens.buscavacuna')}
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
export default memo(VacunaScreen);
