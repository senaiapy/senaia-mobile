/* eslint-disable max-lines-per-function */
import type { ConfigContext, ExpoConfig } from '@expo/config';

import { ClientEnv, Env } from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  slug: 'senaia',
  version: Env.VERSION.toString(),
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#F75469',
  },
  runtimeVersion: '1',
  updates: {
    enabled: true,
    fallbackToCacheTimeout: 30000,
    url: 'https://senaia.online/api/manifest',
    codeSigningCertificate: './code-signing/certificate.pem',
    codeSigningMetadata: {
      keyid: 'main',
      alg: 'rsa-v1_5-sha256',
    },
    // url: 'https://u.expo.dev/ffbccbaf-973f-4ceb-ab90-8c3fc1c5a78a', // expo
    /*
    url: 'https://senaia.online/api/manifest',
    enabled: true,
    codeSigningCertificate: './code-signing/certificate.pem',
    codeSigningMetadata: {
      keyid: 'main',
      alg: 'rsa-v1_5-sha256',
    },
    */
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    package: Env.PACKAGE,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    ['@bacons/link-assets', ['./assets/fonts/Inter.ttf']],
    'expo-localization',
    [
      'expo-build-properties',
      {
        android: {
          kotlinVersion: '1.7.22', // this is for softinput package
        },
      },
    ],
    [
      'app-icon-badge',
      {
        enabled: true,
        badges: [
          {
            text: Env.APP_ENV,
            type: 'banner',
            color: 'white',
          },
          {
            text: Env.VERSION.toString(),
            type: 'ribbon',
            color: 'white',
          },
        ],
      },
    ],
  ],
  extra: {
    ...ClientEnv,
    eas: {
      projectId: 'ffbccbaf-973f-4ceb-ab90-8c3fc1c5a78a',
    },
  },
});
