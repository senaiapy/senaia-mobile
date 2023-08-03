#/bin/bash

yarn global add expo-cli
yarn global add eas-cli
yarn add expo-modules-core
yarn add expo-updates 
yarn add expo-notifications

yarn expo update
expo install expo-updates

nano app.json
{
  "expo": {
    "name": "template",
    "slug": "template"
  }
}

npx react-native-rename  "template" -b org.pyfoundation.template
rm -rf node_modules
yarn
cd android && ./gradlew clean 
########################################## EXPO UPDATE #########################################
https://expo.dev/settings/access-tokens
hTowk-EHRdZBbAkT0TWvpJONXYFT5HOVHm-IKoQD EXPO_TOKEN

npm install -g eas-cli

#npx create-expo-app

eas login # marcelu.phd MA28

eas update:configure
eas build:configure
eas build
pyfoundation.org@gmail.com

# change eas.json 
....
 "preview": {
      "distribution": "internal",
      "channel": "staging"
    },
    "production": {
      "channel": "production"
    }
....

add app.json and config.ts
 "extra": {
    "eas": {
      "projectId": "9a3febb3-c8b1-4f2f-b59e-bddd11034fc9"
    }
  }
  
eas update --branch staging --message "Updating the app"

# goto github settings secrets actions add EXPO_TOKEN 
########################################## EXPO UPDATE #########################################

eas update:configure
eas build:configure
eas build
pyfoundation.org@gmail.com

eas build --local
eas update --branch production --message "Updating the app Prod"

eas submit --platform android 
eas submit --platform ios 

APP_ENV=production npx react-native run-android --variant=release

#CHANGE code
yarn android
eas update --branch production --message "Updating the app Prod 2"
#reboot app

eas channel:edit production --branch version-2.0
###############################################
Project Credentials Configuration

Project                   @marceluphd/PyfoundationApp
Bundle Identifier         org.pyfoundation.development
                          
App Store Configuration   
                          
Distribution Certificate  
Serial Number             6BC3AC2EC289A934AFA8ECD47D8AFAE6
Expiration Date           Tue, 05 Dec 2023 11:16:25 GMT-0300
Apple Team                5MSQX2BRA2 (marcelo anjos (Individual))
Updated                   10 seconds ago
                          
Provisioning Profile      
Developer Portal ID       4BHS3RSMYR
Status                    active
Expiration                Tue, 05 Dec 2023 11:16:25 GMT-0300
Apple Team                5MSQX2BRA2 (marcelo anjos (Individual))
Updated                   2 seconds ago

🤖 Android build details: https://expo.dev/accounts/marceluphd/projects/PyfoundationApp/builds/9f3d7ab9-73c9-415f-86c9-f53e11d84dfe
🍎 iOS build details: https://expo.dev/accounts/marceluphd/projects/PyfoundationApp/builds/7cba1271-9f8c-49bf-be5d-78cd4f7e65e2


🤖 Android app:
https://expo.dev/artifacts/eas/kEuwFpf1CnvW9qK928Fcdj.aab

🍎 iOS app:
https://expo.dev/artifacts/eas/gpiEtyMczuAaUmXBdS1J5S.ipa

https://appstoreconnect.apple.com/apps/6444961305/testflight/ios




    Navigate to https://expo.dev/settings/access-tokens.
    Click "Create" to create a new access token.
    Copy the token generated.
    https://github.com/ozitv/react-native-template-pyfoundation-final/settings/secrets/actions
    Navigate to https://github.com/your-username/your-repo-name/settings/secrets/actions, replacing "your-username" and "your-repo-name" with your project's info.
    Click "New repository secret"
    Make the secret's name "EXPO_TOKEN", then paste the access token in as the value.
hTowk-EHRdZBbAkT0TWvpJONXYFT5HOVHm-IKoQD EXPO_TOKEN


npx react-native-rename "pyapp" --iosBundleID org.pyfoundation.pyapp --androidBundleID org.pyfoundation.pyapp
