#/bin/bash

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Hom$
brew --version
git --version
clear
brew install node
npm --version
brew install watchman
watchman --version
brew install ruby
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
npx react-native init myprj
npm install -g npm@8.6.0
gem uninstall cocoapods-core
gem uninstall cocoapods-deintegrate
gem uninstall cocoapods-downloader
gem uninstall cocoapods-plugins
gem uninstall cocoapods-search
gem uninstall cocoapods-trunk
gem uninstall cocoapods-try
gem list --local | grep cocoapods\

gem uninstall ffi
sudo gem install -n /usr/local/bin ffi cocoapods
pod --version

ls
npx react-native init myprj
yarn global add metro-hermes-compiler
npx react-native init myprj
cd myprj
cd ios
pod install
bundle install
pod install
cd ..
yarn
yarn start
cd ..
cd symma
yarn run ios
nvm list
nvm install 17
nvm use 17
nvm default 17
nvm alias default 17
node --version
cd PROJETOS

yarn add -D babel-plugin-module-resolver @babel/plugin-proposal-decorators
yarn add react-native-reanimated
yarn add -D @types/react @types/react-native @types/react-test-renderer react-native-svg-transformer rn-nodeify typescript
yarn add @react-native-async-storage/async-storage @react-native-clipboard/clipboard @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/native @react-navigation/stack @tradle/react-native-http appcenter appcenter-analytics appcenter-crashes assert axios bignumber.js browserify-sign decimal.js events https-browserify i18next lodash lottie-ios lottie-react-native md5 mobx mobx-persist-store mobx-react-lite numeral path-browserify readable-stream stream-browserify url react-i18next

yarn add react-native-actions-sheet react-native-animatable react-native-big-list react-native-camera react-native-chart-kit react-native-crypto react-native-device-info react-native-dialog react-native-encrypted-storage react-native-fast-image react-native-flash-message react-native-gesture-handler react-native-inappbrowser-reborn react-native-iphone-x-helper react-native-keychain react-native-level-fs react-native-localize react-native-logs react-native-onesignal react-native-pager-view react-native-parallax-scroll-view react-native-permissions react-native-popup-menu react-native-qrcode-scanner react-native-randombytes react-native-reanimated react-native-resegmented-control react-native-restart react-native-rss-parser react-native-safe-area-context react-native-screens react-native-share react-native-smart-code react-native-splash-screen react-native-svg react-native-switch-selector react-native-touch-id react-native-vector-icons

"asyncstorage-down": "https://github.com/coingrig/asyncstorage-down.git",
    
   yarn add  @coingrig/core @coingrig/wallet-generator @haskkor/react-native-pincode @rainbow-me/animated-charts @walletconnect/client @walletconnect/types @walletconnect/utils

#/app/build.gradle
    defaultConfig {

        missingDimensionStrategy 'react-native-camera', 'general'

yarn add react-native-camera

#add FontAwesome5
##open ios folder with xcode and add resources in resource folder
#in ios pyfundationBase -> info.plist add
	<key>UIAppFonts</key>
	<array>
		<string>Lato-Black.ttf</string>
		<string>Lato-BlackItalic.ttf</string>
		<string>Lato-Bold.ttf</string>
		<string>Lato-BoldItalic.ttf</string>
		<string>Lato-Italic.ttf</string>
		<string>Lato-Ligth.ttf</string>
		<string>Lato-LigthItalic.ttf</string>
		<string>Lato-Regular.ttf</string>
		<string>Lato-Thin.ttf</string>
		<string>Lato-ThinItalic.ttf</string>
		<string>FontAwesome5_Brands.ttf</string>
		<string>FontAwesome5_Regular.ttf</string>
		<string>FontAwesome5_Solid.ttf</string>
	</array>

#rename
npx react-native-rename "pyfundationBase" -b org.pyfundation
# install nvm .39
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

#in error FRreact nativespec
rm -rf node_modules && rm yarn.lock
cd ios && rm -rf Pods && rm Podfile.lock && cd ..
#exit vscode poweroff simulator
nvm install 16
nvm alias default 16
yarn install --ignore-engine
echo 'unset npm_config_prefix' > node_modules/react-native/scripts/find-node.sh
#react-native link react-native-vector-icons
cd ios && bundle install
pod install
pod update
pod install --repo-update
npx pod-install
cd ..
yarn start --reset-cache
# another terminal 
nvm alias default 16
yarn ios

npx pod-install

remove react-native-udp && realm 

############################  FINAL INSTALL ##################################
git clone https://github.com/symmacoin/pyfundation_basefull_ios.git
cd pyfundation_basefull_ios
watchman watch-del-all
rm -rf /tmp/mrtro-*
npx react-native link react-native-vector-icons
yarn
echo 'unset npm_config_prefix' > node_modules/react-native/scripts/find-node.sh
cd ios && bundle install
pod install --repo-update
cd ..
yarn start
#another terminal
yarn ios
############################  FINAL INSTALL ##################################

#publish
git commit -m "Version 2.0" 
git push origin master


#load fonts
Ionicons.loadFont();


# GENERATE SPLASH SCREEN AND ICONS #################################
rm -rf /android/app/src/main/assets/fonts
yarn assets:icons
yarn assets:splashscreen

## REMOVE DUPLICATE DATA FONTSIZE
rm -rf /Users/macbookair/Library/Developer/Xcode/DerivedData/pyfundationBase-*

#To generate a standard splash screen using bootsplash package.
yarn react-native generate-bootsplash assets/logo.png \
  --background-color=000000 \
  --logo-width=150 \
  --assets-path=assets

#Run the following command to generate App icons assets :
yarn react-native set-icon  --path ./assets/logo.png --background "#FFF"


#For android icon, make sure to provide a logo with more padding and generate a new app icon for android :
yarn react-native set-icon  --platform android  --path ./assets/logo_android.png --background "#FFF"

# FONT
#Replace Inter.ttf font file with your fonts under `assets/fonts` folder
yarn react-native link

# ios devices
xcrun xctrace list devices
#OR
xcrun instruments -s devices

npx react-native run-ios --udid 592e7caebb39463673e01d1bc74d7dd6c59107f4