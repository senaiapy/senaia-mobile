// @ts-nocheck
/* eslint-disable unused-imports/no-unused-vars */
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { memo } from 'react';
import { Button, Text } from 'react-native';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Profile } from './extra/data';
import { ProfileSocial } from './extra/profile-social.component';
import { RateBar } from './extra/rate-bar.component';
const BG_IMAGE = require('./images/wallpaper_6.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

// import {
//   Character,
//   useGetCharactersQuery,
// } from '@/common/generated/graphql';

//  import CharacterCard from '@/common/components/CharacterCard';

// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}

// ############### internationalization #######################
const profile: Profile = Profile.jenniferGreen();

const ProfileScreen = (props: any) => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  // const { data, loading } = useGetCharactersQuery();

  const [rating, setRating] = React.useState<number>(profile.experience);

  const onFollowButtonPress = (): void => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.profileContainer}>
        <View style={styles.profileDetailsContainer}>
          <Text>{profile.fullName}</Text>
          <Text>{profile.location}</Text>
          <RateBar
            style={styles.rateBar}
            hint="Calificación"
            value={rating}
            onValueChange={setRating}
          />
        </View>
      </View>
      <View style={styles.profileSocialsContainer}>
        <ProfileSocial hint="VPA ID" value={`${profile.followers}`} />
        <ProfileSocial hint="EMBARQUES" value={`${profile.following}`} />
        <ProfileSocial hint="PROXIMO COIBFE" value={`${profile.posts}`} />
      </View>
      <Button
        onPress={() => {
          onFollowButtonPress();
        }}
      >
        Cargar Photo
      </Button>
      <Text style={styles.profileDescription}>{profile.description}</Text>
      <View style={styles.profileParametersSection} />
    </>
  );
};

export default memo(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profileAvatar: {
    marginHorizontal: 8,
  },
  profileDetailsContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  rateBar: {
    marginTop: 24,
  },
  followButton: {
    marginTop: 24,
  },
  profileSocialsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 24,
  },
  profileSectionsDivider: {
    width: 1,
    height: 200,
    marginHorizontal: 8,
  },
  profileDescription: {
    marginTop: 24,
    marginBottom: 8,
  },
  profileParametersSection: {
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 8,
  },
  profileParameter: {
    flex: 1,
    marginHorizontal: 8,
  },
});
