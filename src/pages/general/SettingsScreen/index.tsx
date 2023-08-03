/* eslint-disable react-native/no-inline-styles */
/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

const BG_IMAGE = require('@/assets/images/OziTV/FundoCriptoTV.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

import { Env } from '@env';

import { useGetCharactersQuery } from '@/common/generated/graphql';
import { hasData } from '@/services/storage-crud';
import type { Item } from '@/type/Item';

let APPL = false;
let APPT = false;

if (Env.APPINIT === 'Lazos') {
  APPL = true;
}

if (Env.APPINIT === 'TVbox') {
  APPT = true;
}

export type Props = {
  datas: Item;
  navigatePage: any;
};

const SettingsScreen: React.FC<Props> = ({ datas, navigatePage }: Props) => {
  const { data, loading } = useGetCharactersQuery();

  const [haveData, setHaveData] = useState<boolean | undefined>(false);
  const [haveConfig, setHaveConfig] = useState<boolean | undefined>(false);

  async function HasData(datos: any, keys: string) {
    const haveDatas = await hasData(datos, keys);
    setHaveData(haveDatas);
  }

  async function Configs() {
    if (haveConfig) {
      setHaveConfig(false);
    } else {
      setHaveConfig(true);
    }
  }
  // -----------
  async function Accounts() {}
  // -----------
  async function Helps() {}
  // -----------
  async function Logouts() {
    console.log('LOGOUT');
  }
  // -----------
  // -----------
  async function saveConfig(texto: any) {
    if (Env.DEBUG === 'true') {
      console.log('Config', texto);
    }
  }
  // -----------

  return (
    <>
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          {/* LOGIN */}
          <View style={styles.mainBody}>
            <View>
              <View style={{ alignItems: 'center' }}>
                {APPT ? (
                  <Image
                    source={require('@/assets/images/OziTV/Logo1.png')}
                    style={{
                      width: '80%',
                      height: 200,
                      resizeMode: 'contain',
                      margin: 10,
                    }}
                  />
                ) : null}
                {APPL ? (
                  <Image
                    source={require('@/assets/images/Lazos/Logo1.png')}
                    style={{
                      width: '80%',
                      height: 200,
                      resizeMode: 'contain',
                      margin: 10,
                    }}
                  />
                ) : null}
              </View>
              <View style={styles.grupoDeBotoes}>
                <View style={styles.botaoConfig}>
                  <TouchableOpacity
                    style={styles.botaoEnviar}
                    activeOpacity={0.5}
                    onPress={() => {
                      Configs();
                    }}
                  >
                    <Text style={styles.buttonTextStyle}>Configurações</Text>
                  </TouchableOpacity>
                  {haveConfig ? (
                    <View style={styles.SectionStyleText}>
                      <TextInput
                        style={styles.inputStyleUsuario}
                        onChangeText={() => {}}
                        placeholder={'Lista e Configurar'} //dummy@abc.com
                        placeholderTextColor="rgba(52, 52, 52, 0.6)"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={(text) => {
                          saveConfig(text);
                        }}
                        blurOnSubmit={false}
                      />
                    </View>
                  ) : null}
                </View>

                <TouchableOpacity
                  style={styles.botaoEnviar}
                  activeOpacity={0.5}
                  onPress={() => {
                    Logouts();
                  }}
                >
                  <Text style={styles.buttonTextStyle}>Sair / Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.botaoEnviar}
                  activeOpacity={0.5}
                  onPress={() => {
                    Accounts();
                  }}
                >
                  <Text style={styles.buttonTextStyle}>Conta</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.botaoEnviar}
                  activeOpacity={0.5}
                  onPress={() => {
                    Helps();
                  }}
                >
                  <Text style={styles.buttonTextStyle}>Ajuda e Feddback</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* LOGIN */}
          <View style={{ height: 100, padding: 20 }} />
        </ScrollView>
      </View>
    </>
  );
};

export default SettingsScreen;
