#!/bin/bash

# para windows trocar conteudo da pasta android/local.properties para Franklin
#sdk.dir=C:\\Users\\frank\\AppData\\Local\\Android\\sdk 

#ou para Susana
#sdk.dir=C:\\Users\\Susana Cho\\AppData\\Local\\Android\\sdk

# ou remover comentario retirando caracter # do usuario desejado e colocando afrente de 
#sdk.dir=/home/fuinhagame2/Android/Sdk
#sdk.dir = /Users/pyfundation/Library/Android/sdk


#to rename app to lazos
npx react-native-rename "criptotv" -b org.pyfundation.criptotv

yarn add @apollo/client @react-native-community/masked-view @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/native @react-navigation/stack graphql graphql-tag react-dom react-native-easy-grid react-native-fs react-native-gesture-handler react-native-paper react-native-reanimated react-native-rename react-native-safe-area-context react-native-screens react-native-snap-carousel react-native-svg react-native-table-component react-native-vector-icons react-native-web @react-native-async-storage/async-storage  react-native-restart  

yarn add expo-constants expo-font expo-localization formik  intl react-native-bluetooth-escpos-printer react-native-chart-kit react-native-config react-native-crypto-js react-native-exception-handler react-native-geolocation-service react-native-get-location react-native-global-props react-native-imei react-native-get-sms-android react-native-maps react-native-maps-directions react-native-restart react-native-qrcode-svg react-native-modal crypto-js aes-everywhere react-native-sim-data react-native-sms react-native-speedometer react-native-speedometer-chart react-native-sqlite-storage react-native-svg socket.io-client yup react-native-bootsplash path react-native-bluetooth-classic react-native-rfid-equipments native-base buffer @expo-google-fonts/archivo @expo-google-fonts/inter react-native-responsive-fontsize expo-image-picker react-native-iphone-x-helper @ui-kitten/components

yarn add @react-native-google-signin/google-signin react-i18next react-native-fbsdk react-native-fs react-native-mail-compose react-native-nested-listview react-native-push-notification  validate.js tweetnacl uuid react-native-restart

yarn add -D @types/react-native-vector-icons babel-plugin-react-native-web @types/react-native-table-component @types/react-native-vector-icons @types/react @graphql-codegen/cli @graphql-codegen/fragment-matcher @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @testing-library/react-native expo-app-loading @types/axios eslint-plugin-react-hooks

yarn add -D @babel/plugin-proposal-class-properties @babel/plugin-transform-flow-strip-types @babel/runtime cross-env expo-cli @expo/metro-config @expo/webpack-config jest-expo  

yarn add react-i18next i18next 

####################  ?????????????????????????????
yarn add  react-native-nodemediaclient react-native-webrtc socket.io react-native-gifted-chat stream stream-browserify react-native-wifi-p2p 
react-native-tcp react-native-peerjs web3-react-native
####################  ?????????????????????????????

npx pod-install ios   

#place image /assets
cryptotv.png
npx react-native generate-bootsplash ./assets/cryptotv.png --background-color=000000

yarn add @apollo/client @react-native-community/masked-view @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/native @react-navigation/stack graphql graphql-tag react-dom react-native-easy-grid react-native-fs react-native-gesture-handler react-native-paper react-native-reanimated react-native-rename react-native-safe-area-context react-native-screens react-native-snap-carousel react-native-svg react-native-table-component react-native-vector-icons react-native-web react-native-bootsplash react-native-snap-carousel react-native-screens react-native-safe-area-context axios  @react-native-community/netinfo react-native-calendars react-native-unimodules react-native-fast-image  @nozbe/watermelondb expo expo-font expo-updates date-fns react-native-responsive-fontsize lottie-react-native native-abort-controller abort-controller react-native-stars react-native-webview

yarn add --dev @types/react-native-snap-carousel types/react-native-vector-icons babel-plugin-react-native-web @types/react-native-table-component @types/react-native-vector-icons @types/react @graphql-codegen/cli @graphql-codegen/fragment-matcher @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @testing-library/react-native babel-plugin-react-native-web @types/react-native-table-component @types/react-native-vector-icons @types/react @graphql-codegen/cli @graphql-codegen/fragment-matcher @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @types/react-native-vector-icons @types/react-native-snap-carousel @types/nodebabel-plugin-module-resolver @types/babel__core typescript @types/jest @types/react @types/react-native @types/react-test-renderer @types/styled-components @types/styled-components-react-native @types/react-native-calendars react-native-svg-transformer @babel/plugin-proposal-decorators


#api
5542d7faf4df0ab380d0bde036b34b06

# last movie
# https://api.themoviedb.org/3/movie/now_playing?# # api_key=5542d7faf4df0ab380d0bde036b34b06&language=pt-BR&page=1

# movie image url
# https://image.tmdb.org/t/p/original/kz7xJLowO4x0BpcB1IJb9uIXgrq.jpg


# para windows trocar conteudo da pasta android/local.properties para Franklin
sdk.dir=C:\\Users\\frank\\AppData\\Local\\Android\\sdk 

#ou para Susana
sdk.dir=C:\\Users\\Susana Cho\\AppData\\Local\\Android\\sdk

# ou remover comentario retirando caracter # do usuario desejado e colocando afrente de 
#sdk.dir=/home/fuinhagame2/Android/Sdk

find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
find . -name "dist" -type d -prune -exec rm -rf '{}' +

########################### CODEPUSH ######################################## 
www.appcenter.ms
# add new organization
# add android production reactnative
#add ios production reactnative

############## ANDROID
nano android/app/src/main/assets/appcenter-config.json
{
    "app_secret": "43639ffe-c239-402c-afe5-c8526e62919b"
}

############## ANDROID
# android/app/build.gradle file, add the codepush.gradle fi below apply from: "../../node_modules/react-native/react.gradle"
apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"

#MainApplication.java file to use CodePush via the following changes:
import com.microsoft.codepush.react.CodePush;

#below splash override in function private final ReactNativeHost 

       @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }

# in res values strings add 
    <string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
    <string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>
    <string moduleConfig="true" name="CodePushDeploymentKey">y5pjRrN6XmEVt67GKSr_7TNhPo5TWf1HsUGN_</string>

# appcenter dictribute codepush create standard development staging and click tool take stagindkey
#place key in CodePushDeploymentKey

# ADD APP.TSX 
import CodePush from 'react-native-code-push';

#PLACE BELOW APP

const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: 'a new update is available!',
  },
};

#PLACE IN LAST
export default CodePush(CodePushOptions)(App);


############## IOS
#IN AppDelegate.m
#import <CodePush/CodePush.h>
# REPLACE return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"]; TO
 return [[CodePush bundleURL];
#ADD Info.plist file and add a new entry named CodePushDeploymentKey
#AND PLACE STAGIN CODE AQbUib7xSnfJ_4V-74qYGX1UjPlZUgylNlbbm
<key>CodePushDeploymentKey</key>
 <string>AQbUib7xSnfJ_4V-74qYGX1UjPlZUgylNlbbm</string>

yarn add appcenter appcenter-analytics appcenter-crashes --save-exact
yarn add react-native-code-push
yarn global add appcenter-cli

create release key

#generate release
yarn bundle:android

appcenter login
appcenter CodePush release-react -a {user}/{app name} -d {environment}
appcenter CodePush release-react -a Fortune-Ikechi/MeatBallApp -d Production

#RELEASE
yarn bundle:android
appcenter codepush release-react -a symmacoin@gmail.com/senaia-py -d Staging

appcenter codepush release-react -a senaia/senaia-py -d Staging

appcenter login
appcenter profile list
appcenter logout
appcenter tokens list
appcenter tokens delete <machineName>
appcenter tokens create -d "Azure DevOps Integration"
appcenter login --token <accessToken>
appcenter apps create -d <appDisplayName> -o <operatingSystem>  -p <platform> 
appcenter codepush deployment add -a <ownerName>/<appName> Staging
appcenter codepush deployment add -a <ownerName>/<appName> Production
appcenter apps update -n <newName> -a <ownerName>/<appName>
appcenter apps delete -a <ownerName>/<appName>
appcenter apps list
appcenter codepush deployment add -a <ownerName>/<appName> <deploymentName>
appcenter codepush deployment remove -a <ownerName>/<appName> <deploymentName>
appcenter codepush deployment rename -a <ownerName>/<appName> <deploymentName> <newDeploymentName>
appcenter codepush deployment list -a <ownerName>/<appName>
appcenter codepush release -a <ownerName>/<appName> -c <updateContentsPath> -t <targetBinaryVersion> -d <deploymentName>

[-t|--target-binary-version <version>]
[-с|--update-contents-path <updateContentsPath>]
[-r|--rollout <rolloutPercentage>]
[--disable-duplicate-release-error]
[-k|--private-key-path <privateKeyPath>]
[-m|--mandatory]
[-x|--disabled]
[--description <description>]
[-d|--deployment-name <deploymentName>]
[-a|--app <ownerName>/<appName>]
[--disable-telemetry]
[-v|--version]

appcenter codepush release-react -a <ownerName>/<appName> -d <deploymentName> -t <targetBinaryVersion>
[-t|--target-binary-version <targetBinaryVersion>]
[-o|--output-dir]
[-s|--sourcemap-output]
[-c|--build-configuration-name <arg>]
[--plist-file-prefix]
[-p|--plist-file]
[-g|--gradle-file]
[-e|--entry-file]
[--development]
[-b|--bundle-name <bundleName>]
[-r|--rollout <rolloutPercentage>]
[--disable-duplicate-release-error]
[-k|--private-key-path <privateKeyPath>]
[-m|--mandatory]
[-x|--disabled]
[--description <description>]
[-d|--deployment-name <deploymentName>]
[-a|--app <ownerName>/<appName>]
[--disable-telemetry]
[-v|--version]

appcenter apps create -d MyApp-Android -o Android -p React-Native
appcenter codepush release-react -a <ownerName>/MyApp-iOS
appcenter codepush release-react -a <ownerName>/MyApp-Android
# Release a mandatory update with a changelog
appcenter codepush release-react -a <ownerName>/MyApp-iOS  -m --description "Modified the header color"

# Release an update for an app that uses a non-standard entry file name, and also capture
# the sourcemap file generated by react-native bundle
appcenter codepush release-react -a <ownerName>/MyApp-iOS --entry-file MyApp.js --sourcemap-output ../maps/MyApp.map

# Release a dev Android build to 1/4 of your end users
appcenter codepush release-react -a <ownerName>/MyApp-Android  --rollout 25% --development true

# Release an update that targets users running any 1.1.* binary, as opposed to
# limiting the update to exact version name in the build.gradle file
appcenter codepush release-react -a <ownerName>/MyApp-Android  --target-binary-version "~1.1.0"

#################################################################
pyfundation.com@gmail.com github
"appcenter:login": "appcenter login",
"bundle:android": "cd android && ./gradlew bundleRelease",
"appcenter:remove": "appcenter codepush deployment remove -a senaia/senaia-py Staging",
"appcenter:deploystage": "appcenter codepush deployment add -a senaia/senaia-py Staging",
"apcup:and": "appcenter codepush release-react -a senaia/senaia-py-1 -d Staging",
"build:android": "npx react-native run-android --variant=release",

yarn appcenter:login
yarn bundle:android
yarn appcenter:remove
yarn appcenter:deploystage
yarn apcup:and
yarn build:android

#sppvrntrt login github pyfundation.com
#android PRODUCTION REACT NATIVE
# android app src main assets appcenter-config.json

{
    "app_secret": "c6911f9c-e8d1-42e2-a7b7-83f9842f9104"
}

# resousec values string STAGING KEY

 <string name="CodePushPublicKey">-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtPSR9lkGzZ4FR0lxF+ZA
P6jJ8+Xi5L601BPN4QESoRVSrJM08roOCVrs4qoYqYJy3Of2cQWvNBEh8ti3FhHu
tiuLFpNdfzM4DjAw0Ti5hOTfTixqVBXTJPYpSjDh7K6tUvp9MV0l5q/Ps3se1vud
M1/X6g54lIX/QoEXTdMgR+SKXvlUIC13T7GkDHT6Z4RlwxkWkOmf2tGguRcEBL6j
ww7w/3g0kWILz7nNPtXyDhIB9WLH7MKSJWdVCZm+cAqabUfpCFo7sHiyHLnUxcVY
OTw3sz9ceaci7z2r8SZdsfjyjiDJrq69eWtvKVUpredy9HtyALtNuLjDITahdh8A
zwIDAQAB
-----END PUBLIC KEY-----</string>
    <string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
    <string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>
    <string moduleConfig="true" name="CodePushDeploymentKey">0BVAiucn3Gnrfl2zTAzOen98G5iJ_V6DSg5xq</string>


appcenter codepush release-react -a pyfundation/senaya-py -d Staging


appcenter codepush promote -a <ownerName>/<appName> -s Staging -d Production -r 20
appcenter codepush patch -a <ownerName>/<appName> Production -r 100
appcenter codepush deployment list -a <ownerName>/<appName> -k

yarn appcenter:login
yarn bundle:android
#yarn applist
#yarn appcremove
#yarn appcdepstage
yarn apcupands
yarn build:android

yarn add react-native-code-push
npm install --location=global appcenter-cli
yarn add global appcenter-cli
# obtain keychain
appcenter codepush deployment list --app pyfundation/senaia-py -k
appcenter codepush deployment list -a pyfundation/senaia-py --displayKeys

### IOD info.plist
<key>CodePushDeploymentKey</key>
	<string>AQbUib7xSnfJ_4V-74qYGX1UjPlZUgylNlbbm</string>
	<key>CodePushPublicKey</key>
	<string>-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANkWYydPuyOumR/sn2agNBVDnzyRpM16NAUpYPGxNgjSEp0etkDNgzzdzyvyl+OsAGBYF3jCxYOXozum+uV5hQECAwEAAQ==
-----END PUBLIC KEY-----</string>

##### androidManifest <string name="CodePushPublicKey">-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtPSR9lkGzZ4FR0lxF+ZA
P6jJ8+Xi5L601BPN4QESoRVSrJM08roOCVrs4qoYqYJy3Of2cQWvNBEh8ti3FhHu
tiuLFpNdfzM4DjAw0Ti5hOTfTixqVBXTJPYpSjDh7K6tUvp9MV0l5q/Ps3se1vud
M1/X6g54lIX/QoEXTdMgR+SKXvlUIC13T7GkDHT6Z4RlwxkWkOmf2tGguRcEBL6j
ww7w/3g0kWILz7nNPtXyDhIB9WLH7MKSJWdVCZm+cAqabUfpCFo7sHiyHLnUxcVY
OTw3sz9ceaci7z2r8SZdsfjyjiDJrq69eWtvKVUpredy9HtyALtNuLjDITahdh8A
zwIDAQAB
-----END PUBLIC KEY-----</string>
    <string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
    <string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>
    <string moduleConfig="true" name="CodePushDeploymentKey">0BVAiucn3Gnrfl2zTAzOen98G5iJ_V6DSg5xq</string>


# adnnroid app build.gradle fileandroid {
    ...
    buildTypes {
        debug {
            ...
            // Note: CodePush updates shouldn't be tested in Debug mode as they're overriden by the RN packager. However, because CodePush checks for updates in all modes, we must supply a key.
            resValue "string", "CodePushDeploymentKey", '""'
            ...
        }
        releaseStaging {
            ...
            resValue "string", "CodePushDeploymentKey", '"<INSERT_STAGING_KEY>"'
            // Note: It's a good idea to provide matchingFallbacks for the new buildType you create to prevent build issues
            // Add the following line if not already there
            matchingFallbacks = ['release']
            ...
        }
        release {
            ...
            resValue "string", "CodePushDeploymentKey", '"<INSERT_PRODUCTION_KEY>"'
            ...
        }
    }
    ...
}

appcenter codepush release-react -a <ownerName>/MyApp-iOS
appcenter codepush release-react -a <ownerName>/MyApp-Android

yarn appcenter:login
yarn bundle:android
#yarn applist
#yarn appcremove
#yarn appcdepstage
yarn build:android
yarn apcupands   ## appcenter codepush release-react -a pyfundation/senaya-py -d Staging

########################################## APPCENTER #########################################
########################################## APPCENTER #########################################

### LOGIN WITH GITHUB OZITV paraguay.engineers-gmail.com
### LOGOUT IN GITHUB AND APPCENTER AN LOGIN IN YOUR USER
#NDROID appcenter.ms
createorganization pyfoundation
create app senaia mobile android production 
create app senaia mobile ios production 

yarn add appcenter appcenter-analytics appcenter-crashes

#Create a new file with the filename appcenter-config.json in android/app/src/main/assets/
{
    "app_secret": "c0cffb9e-b5fe-429c-86f9-af8d94cf006d"
}

###########  iOS
#Create a new file with the name AppCenter-Config.plist with the following content. Don't forget to add this file to the Xcode project (right-click the app in Xcode and click Add files to <App Name>
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
    <key>AppSecret</key>
    <string>{Your app secret here}</string>
    </dict>
</plist>


#Modify the app's AppDelegate.m file Add these lines to import section above the #if DEBUG or #ifdef FB_SONARKIT_ENABLED declaration (if present):
#import <AppCenterReactNative.h>
#import <AppCenterReactNativeAnalytics.h>
#import <AppCenterReactNativeCrashes.h>

#Add these lines to the didFinishLaunchingWithOptions method

[AppCenterReactNative register];
[AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
[AppCenterReactNativeCrashes registerWithAutomaticProcessing];

###########  iOS

#res/values/strings.xml to include the following lines:
<string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
<string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>

#android/app/build.gradle
 buildTypes {
     }
        release {
            ...
            resValue "string", "CodePushDeploymentKey", '"<INSERT_PRODUCTION_KEY>"'
            ...
        }

# android/settings.gradle
include ':app', ':react-native-code-push'
project(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')

##android/app/build.gradle
apply from: "../../node_modules/react-native/react.gradle"
apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"

##MainApplication.java
// 1. Import the plugin class.
import com.microsoft.codepush.react.CodePush;

 // 2. Override the getJSBundleFile method in order to let
        // the CodePush runtime determine where to get the JS
        // bundle location from on each app start
        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }
    };

#add res strigs dep key
# got to appcenter distribute codepush create standard copy staging

<string moduleConfig="true" name="CodePushDeploymentKey">bG6x9yd1yrczuYBkn9jeqtWd3RKmIgX6kDExF</string>


yarn global add appcenter-cli

Pyfoundation-Group/senaia
appcenter login

appcenter apps set-current Pyfoundation-Group/senaia
appcenter codepush deployment list
appcenter apps get-current
appcenter profile list
appcenter tokens create -d "Azure DevOps Integration"
appcenter login --token 768e4da933dee4fef4da5b63f84789e2ec0772a9
yarn build:android
yarn bundle:android

appcenter apps create -d senaia-Android -o Android -p React-Native
appcenter apps create -d senaia-iOS -o iOS -p React-Native


# fazermodificacoes e update
appcenter codepush release-react -a Pyfoundation-Group/senaia -d Staging
appcenter codepush release-react -a Pyfoundation-Group/senaia -d Production

appcenter codepush release -a <ownerName>/<appName> -c <updateContentsPath> -t <targetBinaryVersion> -d <deploymentName>

[-t|--target-binary-version <version>]
[-с|--update-contents-path <updateContentsPath>]
[-r|--rollout <rolloutPercentage>]
[--disable-duplicate-release-error]
[-k|--private-key-path <privateKeyPath>]
[-m|--mandatory]
[-x|--disabled]
[--description <description>]
[-d|--deployment-name <deploymentName>]
[-a|--app <ownerName>/<appName>]
[--disable-telemetry]
[-v|--version]

appcenter tokens list
appcenter tokens delete <machineName>
appcenter logout
################################
########################################## EXPO UPDATE #########################################
npm install --global eas-cli
npx install-expo-modules@latest
yarn add expo-modules-core
yarn add exppo-updates 

eas login # marcelu.phd MA28

#npx create-expo-app

eas update:configure
eas build:configure

# change eas.json 
....
 "preview": {
      "distribution": "internal",
      "channel": "preview"
    },
    "production": {
      "channel": "production"
    }
....

eas update --branch preview --message "Updating the app"

########################################## EXPO UPDATE #########################################
