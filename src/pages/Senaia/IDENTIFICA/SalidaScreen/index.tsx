/* eslint-disable max-params */
/* eslint-disable max-lines-per-function */
/* eslint-disable react-native/no-inline-styles */
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
import Icon from 'react-native-vector-icons/Ionicons';

import Loader from '@/components/loader';
import NHCSafeAreaView from '@/components/NHCSafeAreaView';

import SalidaServices from './services';
import styles from './styles';
import type { ISalida } from './types';

// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}

// ############### internationalization #######################

const SalidaScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

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
  const [isLoadingS, setIsLoadingS] = useState(false);

  const [salidass, setSalidass] = useState<Partial<ISalida>>({
    dbversion: '',
    salidaId: '',
    salida_UniqueId: '',
    salida_company: '',
    salida_guia: '',
    salida_caravana: '',
    entrada_fecha_entrada: '',
    entrada_modalidade: '',
    salida_ms_cab_dia: '',
    salida_costo_compra: '',
    salida_costo_diaria: '',
    salida_costo_curativo: '',
    salida_costo_protocolo: '',
    salida_corral: '',
    salida_peso_entrada: '',
    salida_categoria: '',
    salida_angus: '',
    salida_propietario_origem: '',
    salida_peso_salida: '',
    salida_dias_confinamento: '',
    salida_lote: '',
    salida_fecha_salida: '',
    salida_peso_proyectado: '',
    salida_cms_pv: '',
    salida_cms_total: '',
    salida_gmd: '',
    salida_destino: '',
    salida_controlador: '',
    salida_tipo_salida: '',
    salida_cantidad: '',
    salida_nombre_identificaccion: '',
    salida_custo_total: '',
  });
  // ###############################   API  ########################
  async function sendApi() {
    if (!isLoadingS) {
      setIsLoadingS(true);
      // CREATE
      const returno = await SalidaServices.SalidaCrudCreate(salidass);
      // FIND ALL
      // const returno1 = await SalidaServices.SalidaCrudFind();
      // FIND ONE
      //const returno2 = await SalidaServices.SalidaCrudFindOne("id");

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
    <NHCSafeAreaView>
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
                <Text style={styles.title}>Salida</Text>
                {/* frame */}
                {/* ---------- */}
                <View style={{ borderWidth: 2, margin: 5 }} />
                {/* ---------- */}
                {/* Tipo De */}
                <View style={styles.SectionFrame2}>
                  {/* Color */}
                  <View style={styles.SectionFrame4}>
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleNGuia}
                          value={salidass.salida_guia || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_guia: text,
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
                      <View style={styles.IconColor}>
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
                          value={salidass.salida_UniqueId || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_UniqueId: text,
                            });
                          }}
                          placeholder={'Numero de Caravana'} //dummy@abc.com
                          placeholderTextColor="rgba(52, 52, 52, 0.6)"
                          autoCapitalize="none"
                          keyboardType="numeric"
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
                </View>
                {/* ---------- */}
                <View style={{ borderWidth: 2, margin: 5 }} />
                {/* ---------- */}
                <Text>Datos Anteriores:</Text>
                {/* fim login */}
                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleFechaEntrada}
                        value={salidass.entrada_fecha_entrada || ''}
                        onChangeText={async (text: any) => {
                          setSalidass({
                            ...salidass,
                            entrada_fecha_entrada: text,
                          });
                        }}
                        placeholder={'Fecha de entrada'} //dummy@abc.com
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
                        style={styles.inputStyleModalidadEntrada}
                        value={salidass.entrada_modalidade || ''}
                        onChangeText={async (text: any) => {
                          setSalidass({
                            ...salidass,
                            entrada_modalidade: text,
                          });
                        }}
                        placeholder={'Modalidad Entrada'} //dummy@abc.com
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
                        style={styles.inputStyleConsumo}
                        value={salidass.salida_ms_cab_dia || ''}
                        onChangeText={async (text: any) => {
                          setSalidass({
                            ...salidass,
                            salida_ms_cab_dia: text,
                          });
                        }}
                        placeholder={'Cons.MS/CAB/DÍA'} //dummy@abc.com
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
                        value={salidass.salida_costo_compra || ''}
                        onChangeText={async (text: any) => {
                          setSalidass({
                            ...salidass,
                            salida_costo_compra: text,
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
                        value={salidass.salida_costo_diaria || ''}
                        onChangeText={async (text: any) => {
                          setSalidass({
                            ...salidass,
                            salida_costo_diaria: text,
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
                        value={salidass.salida_costo_curativo || ''}
                        onChangeText={async (text: any) => {
                          setSalidass({
                            ...salidass,
                            salida_costo_curativo: text,
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
                        value={salidass.salida_costo_protocolo || ''}
                        onChangeText={async (text: any) => {
                          setSalidass({
                            ...salidass,
                            salida_costo_protocolo: text,
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

                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleCorral}
                        value={salidass.salida_corral || ''}
                        onChangeText={async (text: any) => {
                          setSalidass({
                            ...salidass,
                            salida_corral: text,
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
                        style={styles.inputStylePeso}
                        value={salidass.salida_peso_entrada || ''}
                        onChangeText={async (text: any) => {
                          setSalidass({
                            ...salidass,
                            salida_peso_entrada: text,
                          });
                        }}
                        placeholder={'Peso de Entrada'} //dummy@abc.com
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
                        value={salidass.salida_categoria || ''}
                        onChangeText={async (text: any) => {
                          setSalidass({
                            ...salidass,
                            salida_categoria: text,
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

                {/* Numero Anterior */}
                <View style={styles.SectionFrame4}>
                  <View style={styles.SectionStyle3}>
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleAngus1}
                        value={salidass.salida_angus || ''}
                        onChangeText={async (text: any) => {
                          setSalidass({
                            ...salidass,
                            salida_angus: text,
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
                        style={styles.inputStyleOrigen2}
                        value={salidass.salida_propietario_origem || ''}
                        onChangeText={async (text: any) => {
                          setSalidass({
                            ...salidass,
                            salida_propietario_origem: text,
                          });
                        }}
                        placeholder={'Propietario Origen'} //dummy@abc.com
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
                <Text>Datos Salida:</Text>
                {/* fim login */}
                <View style={styles.SectionFrame2}>
                  <View style={styles.SectionFrame4}>
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStylePesoSalida}
                          value={salidass.salida_peso_salida || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_peso_salida: text,
                            });
                          }}
                          placeholder={'Peso de Salida'} //dummy@abc.com
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleDiasDe}
                          value={salidass.salida_dias_confinamento || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_dias_confinamento: text,
                            });
                          }}
                          placeholder={'Dias Confinamiento'} //dummy@abc.com
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleLote}
                          value={salidass.salida_lote || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_lote: text,
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleFecha2}
                          value={salidass.salida_fecha_salida || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_fecha_salida: text,
                            });
                          }}
                          placeholder={'Fecha de Salida'} //dummy@abc.com
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStylePeso}
                          value={salidass.salida_peso_proyectado || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_peso_proyectado: text,
                            });
                          }}
                          placeholder={'Peso Proyectado'} //dummy@abc.com
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleCMS}
                          value={salidass.salida_cms_pv || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_cms_pv: text,
                            });
                          }}
                          placeholder={'CMS % PV'} //dummy@abc.com
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleValorCMS3}
                          value={salidass.salida_cms_total || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_cms_total: text,
                            });
                          }}
                          placeholder={'CMS Total'} //dummy@abc.com
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleGMD}
                          value={salidass.salida_gmd || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_gmd: text,
                            });
                          }}
                          placeholder={'GMD'} //dummy@abc.com
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleDestino}
                          value={salidass.salida_destino || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_destino: text,
                            });
                          }}
                          placeholder={'Destino'} //dummy@abc.com
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleControlador}
                          value={salidass.salida_controlador || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_controlador: text,
                            });
                          }}
                          placeholder={'Controlador'} //dummy@abc.com
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleTipoSalida}
                          value={salidass.salida_tipo_salida || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_tipo_salida: text,
                            });
                          }}
                          placeholder={'Tipo de Salida'} //dummy@abc.com
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleCantidad}
                          value={salidass.salida_cantidad || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_cantidad: text,
                            });
                          }}
                          placeholder={'Cantidad'} //dummy@abc.com
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleCantidad}
                          value={salidass.salida_nombre_identificaccion || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_nombre_identificaccion: text,
                            });
                          }}
                          placeholder={'Nombre'} //dummy@abc.com
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
                    <View style={styles.SectionStyle2}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleCantidad}
                          value={salidass.salida_custo_total || ''}
                          onChangeText={async (text: any) => {
                            setSalidass({
                              ...salidass,
                              salida_custo_total: text,
                            });
                          }}
                          placeholder={'Costo TOTAL'} //dummy@abc.com
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
                </View>
                <View />
              </View>
              {/* ---------- */}
              <View style={{ borderWidth: 2, margin: 5 }} />
              {/* ---------- */}
              {/* MOLDURA */}
              <View>
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
            </View>
          </ScrollView>
          {/* LOGIN */}
        </KeyboardAvoidingView>
      </View>
    </NHCSafeAreaView>
  );
};
export default memo(SalidaScreen);
