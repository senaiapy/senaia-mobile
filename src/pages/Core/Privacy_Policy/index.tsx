/* eslint-disable max-lines-per-function */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Privacy_Policy = ({}) => {
  const privacyText =
    'PRIVACY POLICY - SAMPLE\nLast updated November 30, 2020\n\n\nThank you for choosing to be' +
    ' part of our community at OZICOIN (“Company”, “we”, “us”' +
    ', or “our”). We are committed to protecting your personal information and your r' +
    'ight to privacy. If you have any questions or concerns about our policy, or our ' +
    'practices with regards to your personal information, please contact us at info' +
    '@OZICOIN.com.\n\n\nWhen you visit our mobile application, and use our ser' +
    'vices, you trust us with your personal information. We take your privacy very se' +
    'riously. In this privacy policy, we seek to explain to you in the clearest way p' +
    'ossible what information we collect, how we use it and what rights you have in r' +
    'elation to it. We hope you take some time to read through it carefully, as it is' +
    ' important. If there are any terms in this privacy policy that you do not agree ' +
    'with, please discontinue use of our Apps and our services.\n\nThis privacy polic' +
    'y applies to all information collected through our mobile application, (“Apps”),' +
    ' and/or any related services, sales, marketing or events (we refer to them colle' +
    'ctively in this privacy policy as the “Services”).\n\nPlease read this privacy p' +
    'olicy carefully as it will help you make informed decisions about sharing your p' +
    'ersonal information with us.';

  const [textS] = useState(privacyText);

  return (
    <ScrollView>
      <View
        key="background"
        style={{
          paddingBottom: 30,
          height: 257,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      />

      <TouchableOpacity onPress={() => {}}>
        {/* <Text></Text> */}
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 27,
          color: '#000',
          alignItems: 'center',
        }}
      >
        Privacy Policy
      </Text>
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
            paddingBottom: 50,
            paddingTop: 60,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderRadius: 23,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#7AA741',
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
              }}
            >
              READ FULL PRIVACY POLICY
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Privacy_Policy;
