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
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { memo, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Orientation from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/Ionicons';

import Loader from '@/components/loader';

// ############### internationalization #######################
import EntradaServices from './services';
//  import { Character, useGetCharactersQuery } from '@/common/generated/graphql';
//  import CharacterCard from '@/common/components/CharacterCard';
// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import styles from './styles';
import type { IEntrada } from './types';

const EntradaScreen: React.FC = () => {
  Orientation.lockToPortrait();

  // const { data, loading } = useGetCharactersQuery();

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  function navigateToBack() {
    navigation.goBack();
  }

  function navigateToPage(/*film: FilmDTO*/) {
    navigation.navigate('HomeLazos' /*, { film }*/);
    // navigation.goBack();
  }

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
  //----------------------------------------------
  const [isLoadingS, setIsLoadingS] = useState(false);

  const [entradass, setEntradass] = useState<Partial<IEntrada>>({
    dbversion: '',
    entradaId: '',
    entrada_UniqueId: '',
    entrada_company: '',
    entrada_guia: '',
    entrada_lote: '',
    entrada_caravana: '',
    entrada_numero_anterior: '',
    entrada_sigla_anterior: '',
    entrada_corral_origem: '',
    entrada_dispositivo_anterior: '',
    entrada_color_anterior: '',
    entrada_numero_actual: '',
    entrada_sigla_actual: '',
    entrada_dispositivo_actual: '',
    entrada_color_actual: '',
    entrada_angus: '',
    entrada_peso_actual: '',
    entrada_categoria: '',
    entrada_fecha_entrada: '',
    entrada_fecha_aplicaccion: '',
    entrada_corral_actual: '',
    entrada_modalidade: '',
    entrada_propietario_origem: '',
    entrada_ms_cab_dia: '',
    entrada_costo_compra: '',
    entrada_costo_diario: '',
    entrada_costo_curativo: '',
    entrada_costo_protocolo: '',
  });
  // ###############################   API  ########################
  async function sendApi() {
    if (!isLoadingS) {
      setIsLoadingS(true);
      // CREATE
      const returno = await EntradaServices.EntradaCrudCreate(entradass);
      // FIND ALL
      // const returno1 = await EntradaServices.EntradaCrudFind();
      // FIND ONE
      //const returno2 = await EntradaServices.EntradaCrudFindOne("id");

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

  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardContainer}
        >
          {/* HEADER */}
          <View style={styles.header} />
          <View style={styles.containerRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Control', '')}
              style={styles.menuButton}
            >
              <Icon name="arrow-back" size={40} color="#061ff9" />
            </TouchableOpacity>
            <Image
              source={require('@/assets/images/Senaia/Logo1.png')}
              style={{
                width: '70%',
                height: 100,
                resizeMode: 'contain',
                margin: 5,
                marginTop: 10,
                marginBottom: 10,
              }}
            />
          </View>

          {/* HEADER */}
          {/* LOGIN */}
          <ScrollView keyboardShouldPersistTaps="handled">
            <Loader visible={isLoadingS} />
            <View style={styles.SectionFrame}>
              <View>
                <Text style={styles.title}>Entrada</Text>
                {/* frame */}
                {/* ---------- */}
                <View style={{ borderWidth: 2, margin: 5 }} />
                {/* ---------- */}

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleGuia}
                        value={entradass.entrada_guia || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_guia: text,
                          });
                        }}
                        placeholder={'Número de Guía'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleLote}
                        value={entradass.entrada_lote || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_lote: text,
                          });
                        }}
                        placeholder={'Lote'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleGuia}
                        value={entradass.entrada_UniqueId || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_UniqueId: text,
                          });
                        }}
                        placeholder={'Caravana'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Tipo De */}
                {/* ---------- */}
                <View style={{ borderWidth: 2, margin: 5 }} />
                {/* ---------- */}

                <View style={styles.SectionFrame2}>
                  <Text>Datos Anteriores:</Text>
                  {/* Sigla */}
                  <View style={styles.SectionFrame3}>
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyle2}
                          value={entradass.entrada_numero_anterior || ''}
                          onChangeText={async (text: any) => {
                            setEntradass({
                              ...entradass,
                              entrada_numero_anterior: text,
                            });
                          }}
                          placeholder={'Número Anterior'} //dummy@abc.com
                          placeholderTextColor="rgba(52, 52, 52, 0.6)"
                          autoCapitalize="none"
                          keyboardType="numeric"
                          returnKeyType="next"
                          onSubmitEditing={() => {}}
                          blurOnSubmit={false}
                        />
                      </View>
                      <View style={styles.IconNumero}>
                        <TouchableOpacity>
                          <Icon name="chevron-down" size={30} color="grey" />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity>
                        <Icon name="add-circle" size={35} color="grey" />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.SectionFrame3}>
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyle2}
                          value={entradass.entrada_sigla_anterior || ''}
                          onChangeText={async (text: any) => {
                            setEntradass({
                              ...entradass,
                              entrada_sigla_anterior: text,
                            });
                          }}
                          placeholder={'Sigla Anterior'} //dummy@abc.com
                          placeholderTextColor="rgba(52, 52, 52, 0.6)"
                          autoCapitalize="none"
                          returnKeyType="next"
                          onSubmitEditing={() => {}}
                          blurOnSubmit={false}
                        />
                      </View>
                      <View style={styles.IconSigla}>
                        <TouchableOpacity>
                          <Icon name="chevron-down" size={30} color="grey" />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity>
                        <Icon name="add-circle" size={35} color="grey" />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.SectionFrame3}>
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleOrigen}
                          value={entradass.entrada_corral_origem || ''}
                          onChangeText={async (text: any) => {
                            setEntradass({
                              ...entradass,
                              entrada_corral_origem: text,
                            });
                          }}
                          placeholder={'Corral de Origen'} //dummy@abc.com
                          placeholderTextColor="rgba(52, 52, 52, 0.6)"
                          autoCapitalize="none"
                          returnKeyType="next"
                          onSubmitEditing={() => {}}
                          blurOnSubmit={false}
                        />
                      </View>
                      <View style={styles.IconNumero}>
                        <TouchableOpacity>
                          <Icon name="chevron-down" size={30} color="grey" />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity>
                        <Icon name="add-circle" size={35} color="grey" />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.SectionFrame3}>
                    <View style={styles.SectionStyle}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyle2}
                          value={entradass.entrada_dispositivo_anterior || ''}
                          onChangeText={async (text: any) => {
                            setEntradass({
                              ...entradass,
                              entrada_dispositivo_anterior: text,
                            });
                          }}
                          placeholder={'Dispositivo'} //dummy@abc.com
                          placeholderTextColor="rgba(52, 52, 52, 0.6)"
                          autoCapitalize="none"
                          returnKeyType="next"
                          onSubmitEditing={() => {}}
                          blurOnSubmit={false}
                        />
                      </View>
                      <View style={styles.IconTipoDe}>
                        <TouchableOpacity>
                          <Icon name="chevron-down" size={30} color="grey" />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity>
                        <Icon name="add-circle" size={35} color="grey" />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* Color */}
                  <View style={styles.SectionFrame3}>
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleColo1}
                          value={entradass.entrada_color_anterior || ''}
                          onChangeText={async (text: any) => {
                            setEntradass({
                              ...entradass,
                              entrada_color_anterior: text,
                            });
                          }}
                          placeholder={'Color'} //dummy@abc.com
                          placeholderTextColor="rgba(52, 52, 52, 0.6)"
                          autoCapitalize="none"
                          returnKeyType="next"
                          onSubmitEditing={() => {}}
                          blurOnSubmit={false}
                        />
                      </View>
                      <View style={styles.IconColor}>
                        <TouchableOpacity>
                          <TouchableOpacity>
                            <Icon name="chevron-down" size={30} color="grey" />
                          </TouchableOpacity>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity>
                        <Icon name="add-circle" size={35} color="grey" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* Numero Anterior */}
                </View>
                {/* ---------- */}
                <View style={{ borderWidth: 2, margin: 5 }} />
                {/* ---------- */}

                {/* fim login */}
                <Text>Datos Actuales:</Text>
                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleActual}
                        value={entradass.entrada_numero_actual || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_numero_actual: text,
                          });
                        }}
                        placeholder={'Número Actual'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleSigla}
                        value={entradass.entrada_sigla_actual || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_sigla_actual: text,
                          });
                        }}
                        placeholder={'Sigla'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleTipoDe}
                        value={entradass.entrada_dispositivo_actual || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_dispositivo_actual: text,
                          });
                        }}
                        placeholder={'Dispositivo'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleColor}
                        value={entradass.entrada_color_actual || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_color_actual: text,
                          });
                        }}
                        placeholder={'Color'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleAngus}
                        value={entradass.entrada_angus || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_angus: text,
                          });
                        }}
                        placeholder={'Angus'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStylePeso}
                        value={entradass.entrada_peso_actual || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_peso_actual: text,
                          });
                        }}
                        placeholder={'Peso Actual'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleCategoria}
                        value={entradass.entrada_categoria || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_categoria: text,
                          });
                        }}
                        placeholder={'Categoria'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* ---------- */}
                <View style={{ borderWidth: 2, margin: 5 }} />
                {/* ---------- */}

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleFecha2}
                        value={entradass.entrada_fecha_entrada || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_fecha_entrada: text,
                          });
                        }}
                        placeholder={'Fecha de Entrada'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleFecha}
                        value={entradass.entrada_fecha_aplicaccion || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_fecha_aplicaccion: text,
                          });
                        }}
                        placeholder={'Fecha Aplicación'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleCorral}
                        value={entradass.entrada_corral_actual || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_corral_actual: text,
                          });
                        }}
                        placeholder={'Corral'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleModalidad}
                        value={entradass.entrada_modalidade || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_modalidade: text,
                          });
                        }}
                        placeholder={'Modalidad'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleOrigen2}
                        value={entradass.entrada_propietario_origem || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_propietario_origem: text,
                          });
                        }}
                        placeholder={'Propietário Origen'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* ---------- */}
                <View style={{ borderWidth: 2, margin: 5 }} />
                {/* ---------- */}
                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleConsumo}
                        value={entradass.entrada_ms_cab_dia || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_ms_cab_dia: text,
                          });
                        }}
                        placeholder={'Cons./Ma/Cab/Dia'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleValorCompra}
                        value={entradass.entrada_costo_compra || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_costo_compra: text,
                          });
                        }}
                        placeholder={'Costo de Compra'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleCosto}
                        value={entradass.entrada_costo_diario || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_costo_diario: text,
                          });
                        }}
                        placeholder={'Costo Diario'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleCosto2}
                        value={entradass.entrada_costo_curativo || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_costo_curativo: text,
                          });
                        }}
                        placeholder={'Costo Curativo'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleProtocolo}
                        value={entradass.entrada_costo_protocolo || ''}
                        onChangeText={async (text: any) => {
                          setEntradass({
                            ...entradass,
                            entrada_costo_protocolo: text,
                          });
                        }}
                        placeholder={'Costo Protocolo'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        blurOnSubmit={false}
                      />
                    </View>
                    <View style={styles.IconNumero}>
                      <TouchableOpacity>
                        <Icon name="chevron-down" size={30} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={35} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* ---------- */}
                <View style={{ borderWidth: 2, margin: 5 }} />
                {/* ---------- */}

                <View />
              </View>
              {/* MOLDURA */}

              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {
                  sendApi();
                }}
              >
                <Text style={styles.buttonTextStyle}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* LOGIN */}
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default memo(EntradaScreen);
