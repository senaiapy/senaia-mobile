/* eslint-disable max-lines-per-function */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { translate } from '@/core';
import { Colors } from '@/utils/colors';

const Terms_Conditions = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const privacyText = translate('terms_conditions.privacy_text');
  const pprivacyText = translate('terms_conditions.pprivacy_text');

  const [textS] = useState(privacyText);
  const [textP] = useState(pprivacyText);

  return (
    <ScrollView>
      <View
        key="background"
        style={{
          paddingBottom: 30,
          height: 20,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Image
          resizeMode={'contain'}
          source={{
            uri: 'https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/cb-icon.png',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
          {/* <Text>hkjhaskhakjhsakjs</Text> */}
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 10,
            color: Colors.foreground,
          }}
        >
          {translate('terms_conditions.terms_conditions')}
        </Text>
      </View>
      <View />
      <View>
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          <Text style={{ fontSize: 16, textAlign: 'center', color: '#8D8D8D' }}>
            {textS}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 50,
            paddingTop: 60,
          }}
        >
          <TouchableOpacity
            onPress={() => { }}
            style={{
              borderRadius: 23,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#b4b9ad',
              height: 46,
              width: 293,
              marginTop: 10,
              marginBottom: 50,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: '#e20f0f',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {translate('terms_conditions.read_full')}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 10,
              color: Colors.foreground,
            }}
          >
            {translate('privacy_policy.privacy_policy')}
          </Text>
        </View>
      </View>
      <View />
      <View>
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          <Text style={{ fontSize: 16, textAlign: 'center', color: '#8D8D8D' }}>
            {textP}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 50,
            paddingTop: 60,
          }}
        >
          <TouchableOpacity
            onPress={() => { }}
            style={{
              borderRadius: 23,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#b4b9ad',
              height: 46,
              width: 293,
              marginTop: 10,
              marginBottom: 50,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: '#e20f0f',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {translate('terms_conditions.pprivacy_text')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Terms_Conditions;
