/* eslint-disable react-native/no-inline-styles */
/* eslint-disable unused-imports/no-unused-vars */
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from './styles';

const BG_IMAGE = require('@/assets/images/Core/Fundo.png');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

import { Env } from '@env';

import { useGetCharactersQuery } from '@/common/generated/graphql';
import Loader from '@/components/loader';
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

const AboutScreen: React.FC<Props> = ({ datas, navigatePage }: Props) => {
  const { data, loading } = useGetCharactersQuery();

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <KeyboardAvoidingView enabled>
            <Loader visible={loading} />
            {/* HEADER */}
            <View style={styles.header} />
            <View style={{ alignItems: 'center' }}>
              {APPT ? (
                <Image
                  source={require('@/assets/images/OziTV/Logo1.png')}
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'contain',
                    margin: 10,
                  }}
                />
              ) : null}
              {APPL ? (
                <Image
                  source={require('@/assets/images/Lazos/Logo1.png')}
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'contain',
                    margin: 10,
                  }}
                />
              ) : null}
            </View>
            {/* HEADER */}
            {/* LOGIN */}
            <View style={styles.mainBody}>
              <ScrollView keyboardShouldPersistTaps="handled">
                <View style={styles.SectionFrame}>
                  <Text style={styles.versionText}>{Env.VERSION}</Text>
                  <Text style={styles.versionText}>{Env.KERNEL}</Text>
                  <Text style={styles.versionText}>{Env.APPCOMPANY}</Text>

                  {APPT ? (
                    <Text style={styles.versionText}>{Env.SITE}</Text>
                  ) : null}
                  {APPL ? (
                    <Text style={styles.versionText}>{Env.SITE}</Text>
                  ) : null}
                </View>
              </ScrollView>
            </View>
            {/* LOGIN */}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </>
  );
};

export default AboutScreen;
