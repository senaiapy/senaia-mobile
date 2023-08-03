/* eslint-disable react-native/no-inline-styles */

//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import { Env } from '@env';
import React, { memo } from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';

import BG_IMAGE from '@/assets/images/Core/Fundo.png';

// ############### internationalization #######################
//  import { Character, useGetCharactersQuery } from '@/common/generated/graphql';
//  import CharacterCard from '@/common/components/CharacterCard';
// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import styles from './styles';

type Props = {
  navigatePage: any;
};

const AboutScreen: React.FC<Props> = () => {
  Orientation.lockToPortrait();

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <KeyboardAvoidingView enabled>
            {/* HEADER */}
            <View style={styles.header} />
            <View style={{ alignItems: 'center', backgroundColor: 'black' }}>
              <Image
                source={require('@/assets/images/Senaia/Logo1.png')}
                style={{
                  width: '80%',
                  height: 100,
                  resizeMode: 'contain',
                  backgroundColor: 'black',
                }}
              />
            </View>
            {/* HEADER */}
            {/* LOGIN */}
            <View style={styles.mainBody}>
              <ScrollView keyboardShouldPersistTaps="handled">
                <View style={styles.SectionFrame}>
                  <Text style={styles.versionText}>{Env.VERSION}</Text>
                  <Text style={styles.versionText}>{Env.KERNEL}</Text>
                  <Text style={styles.versionText}>{Env.APPCOMPANY}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(Env.SITE);
                    }}
                  >
                    <Text style={styles.versionText}>{Env.SITE}</Text>
                  </TouchableOpacity>
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

export default memo(AboutScreen);
