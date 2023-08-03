/* eslint-disable unused-imports/no-unused-vars */
/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 23:13:37
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 13:00:05
 * @ Description:
 */
import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { memo, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import Finance from '@/assets/svg/market.svg';
import Rocket from '@/assets/svg/rocket.svg';
import Privacy from '@/assets/svg/sec.svg';

import { styles } from './styles';

const OnBoardingScreen = () => {
  const pw = useRef(null);
  const [position, setPosition] = useState(0);
  const navigation = useNavigation();

  const nextPage = () => {
    const nextPosition = position + 1;
    if (nextPosition >= 3) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'StartScreen' }],
        })
      );
      return;
    }
    //@ts-ignore
    pw.current?.setPage(nextPosition);
  };

  return (
    <View style={styles.container}>
      <View key="1" style={styles.pagerView}>
        <Privacy width={280} height={350} />
        <Text style={styles.desc}>'onboarding.text1'</Text>
      </View>
      <View key="2" style={styles.pagerView}>
        <Rocket width={280} height={350} />
        <Text style={styles.desc}>'onboarding.text2'</Text>
      </View>
      <View key="3" style={styles.pagerView}>
        <Finance width={230} height={350} />
        <Text style={styles.desc}>'onboarding.text3'</Text>
      </View>
      <View style={styles.footer}>
        <Pressable onPress={nextPage} style={styles.button}>
          <Text style={styles.text}>'onboarding.next'</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default memo(OnBoardingScreen);
