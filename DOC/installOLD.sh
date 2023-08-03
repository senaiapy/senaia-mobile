
############################  REACTNATIVE FINAL  #################
#################################################################

################# INSTALL AMBIANCE

sudo apt-get install curl

# Usando Ubuntu
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Usando Debian, como root
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs

node -v

npm -v

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install --no-install-recommends yarn
yarn -v

sudo add-apt-repository ppa:openjdk-r/ppa

sudo apt-get update

sudo apt-get install openjdk-jdk
java -version

sudo apt-get install gcc-multilib lib32z1 lib32stdc++6

#take the path
ls  /usr/lib/jvm/

java-1.8.0-openjdk-amd64

nano ~/.zshrc   # ~/.bashrc

export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
export ANDROID_HOME=~/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:~/android-studio/bin

source ~/.zshrc

sudo apt install qemu-kvm
sudo adduser $USER kvm
grep kvm /etc/group

https://developer.android.com/studio
#DOWNLOAD AND EXTRACT
cd android-studio
./studio.sh

java8
mark all options
/Android/Sdk
Sdk 28
Android 9

############################  RENAME REACTNATIVE##################
##################################################################
yarn global add react-native-rename or npm install react-native-rename -g

yarn global add react-devtools

git checkout -b rename-app

react-native-rename "JS Tuts" -b io.neroscript.jstuts



to change name 

search in files and replace todopy1  pyfundation
search in files and replace appscheleton  appxxxscheleton
change name of folder android/src/java/com/appxxxscheleton

keytool rename debug.keytool and release.keytool


############################  RENAME REACTNATIVE##################
##################################################################
############DEBUG   .vscode/launch.json
  
{
    //# Use IntelliSense to learn about possible attributes.
    //# Hover to view descriptions of existing attributes.
    //# For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug Android",
            "cwd": "${workspaceFolder}",
            "type": "reactnative",
            "request": "launch",
            "platform": "android"
        },
         {
            "type": "pwa-node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/src/server.js"
        }
    ]
}



TO DEBUG React native

open only pyfundation FOLDER

reiniti cell
reinit vscode
stop all
yarn start

D 
stop debugging

yarn android

stop yarn start

DEBUG button  
PLAY Debug Android

############DEBUG
npx create-react-native-app pyfundation

cd pyfundation
code .

######################3 add line in /android/gradle.properties
android.useAndroidX=true

# Automatically convert third-party libraries to use AndroidX
android.enableJetifier=true

# Version of flipper SDK to use with React Native
FLIPPER_VERSION=0.33.1
#heap space
org.gradle.jvmargs=-Xms512M -Xmx4g -XX:MaxPermSize=4096m -XX:MaxMetaspaceSize=2g -Dkotlin.daemon.jvm.options="-Xmx4g"

################## add in root folder file tsconfig.json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "jsx": "react-native",
    "lib": ["dom", "esnext"],
    "moduleResolution": "node",
    "noEmit": true,
    "skipLibCheck": true
  }
}

########################### android/ build.gradle
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    ext {
        buildToolsVersion = "29.0.3"
        minSdkVersion = 23
        compileSdkVersion = 29
        targetSdkVersion = 29
    }
    repositories {
        google()
        jcenter()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:3.5.3")
        classpath 'com.google.gms:google-services:4.3.3'
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {
    repositories {
        mavenLocal()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url("$rootDir/../node_modules/react-native/android")
        }
        maven {
            // Android JSC is installed from npm
            url("$rootDir/../node_modules/jsc-android/dist")
        }

        google()
        jcenter()
        maven { url 'https://www.jitpack.io' }
        maven { url "https://maven.google.com" } 
    }
}

#########################edit a android/app/build.gradle
 apply plugin: "com.android.application"

import com.android.build.OutputFile

/**
 * The react.gradle file registers a task for each build variant (e.g. bundleDebugJsAndAssets
 * and bundleReleaseJsAndAssets).
 * These basically call `react-native bundle` with the correct arguments during the Android build
 * cycle. By default, bundleDebugJsAndAssets is skipped, as in debug/dev mode we prefer to load the
 * bundle directly from the development server. Below you can see all the possible configurations
 * and their defaults. If you decide to add a configuration block, make sure to add it before the
 * `apply from: "../../node_modules/react-native/react.gradle"` line.
 *
 * project.ext.react = [
 *   // the name of the generated asset file containing your JS bundle
 *   bundleAssetName: "index.android.bundle",
 *
 *   // the entry file for bundle generation. If none specified and
 *   // "index.android.js" exists, it will be used. Otherwise "index.js" is
 *   // default. Can be overridden with ENTRY_FILE environment variable.
 *   entryFile: "index.android.js",
 *
 *   // https://facebook.github.io/react-native/docs/performance#enable-the-ram-format
 *   bundleCommand: "ram-bundle",
 *
 *   // whether to bundle JS and assets in debug mode
 *   bundleInDebug: false,
 *
 *   // whether to bundle JS and assets in release mode
 *   bundleInRelease: true,
 *
 *   // whether to bundle JS and assets in another build variant (if configured).
 *   // See http://tools.android.com/tech-docs/new-build-system/user-guide#TOC-Build-Variants
 *   // The configuration property can be in the following formats
 *   //         'bundleIn${productFlavor}${buildType}'
 *   //         'bundleIn${buildType}'
 *   // bundleInFreeDebug: true,
 *   // bundleInPaidRelease: true,
 *   // bundleInBeta: true,
 *
 *   // whether to disable dev mode in custom build variants (by default only disabled in release)
 *   // for example: to disable dev mode in the staging build type (if configured)
 *   devDisabledInStaging: true,
 *   // The configuration property can be in the following formats
 *   //         'devDisabledIn${productFlavor}${buildType}'
 *   //         'devDisabledIn${buildType}'
 *
 *   // the root of your project, i.e. where "package.json" lives
 *   root: "../../",
 *
 *   // where to put the JS bundle asset in debug mode
 *   jsBundleDirDebug: "$buildDir/intermediates/assets/debug",
 *
 *   // where to put the JS bundle asset in release mode
 *   jsBundleDirRelease: "$buildDir/intermediates/assets/release",
 *
 *   // where to put drawable resources / React Native assets, e.g. the ones you use via
 *   // require('./image.png')), in debug mode
 *   resourcesDirDebug: "$buildDir/intermediates/res/merged/debug",
 *
 *   // where to put drawable resources / React Native assets, e.g. the ones you use via
 *   // require('./image.png')), in release mode
 *   resourcesDirRelease: "$buildDir/intermediates/res/merged/release",
 *
 *   // by default the gradle tasks are skipped if none of the JS files or assets change; this means
 *   // that we dont look at files in android/ or ios/ to determine whether the tasks are up to
 *   // date; if you have any other folders that you want to ignore for performance reasons (gradle
 *   // indexes the entire tree), add them here. Alternatively, if you have JS files in android/
 *   // for example, you might want to remove it from here.
 *   inputExcludes: ["android/**", "ios/**"],
 *
 *   // override which node gets called and with what additional arguments
 *   nodeExecutableAndArgs: ["node"],
 *
 *   // supply additional arguments to the packager
 *   extraPackagerArgs: []
 * ]
 */

project.ext.react = [
    enableHermes: false
]

apply from: '../../node_modules/react-native-unimodules/gradle.groovy'
apply from: "../../node_modules/react-native/react.gradle"
apply from: "../../node_modules/expo-updates/scripts/create-manifest-android.gradle"

/**
 * Set this to true to create two separate APKs instead of one:
 *   - An APK that only works on ARM devices
 *   - An APK that only works on x86 devices
 * The advantage is the size of the APK is reduced by about 4MB.
 * Upload all the APKs to the Play Store and people will download
 * the correct one based on the CPU architecture of their device.
 */
def enableSeparateBuildPerCPUArchitecture = false

/**
 * Run Proguard to shrink the Java bytecode in release builds.
 */
def enableProguardInReleaseBuilds = false

/**
 * The preferred build flavor of JavaScriptCore.
 *
 * For example, to use the international variant, you can use:
 * def jscFlavor = 'org.webkit:android-jsc-intl:+'
 *
 * The international variant includes ICU i18n library and necessary data
 * allowing to use e.g. `Date.toLocaleString` and `String.localeCompare` that
 * give correct results when using with locales other than en-US.  Note that
 * this variant is about 6MiB larger per architecture than default.
 */
def jscFlavor = 'org.webkit:android-jsc:+'

/**
 * Whether to enable the Hermes VM.
 *
 * This should be set on project.ext.react and mirrored here.  If it is not set
 * on project.ext.react, JavaScript will not be compiled to Hermes Bytecode
 * and the benefits of using Hermes will therefore be sharply reduced.
 */
def enableHermes = project.ext.react.get("enableHermes", false);

android {
    compileSdkVersion rootProject.ext.compileSdkVersion

    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }

    defaultConfig {
        applicationId "com.todopy1"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 2
        versionName "1.2"
          ndk {
            abiFilters "armeabi-v7a", "x86", "arm64-v8a", "x86_64"
        }
        missingDimensionStrategy 'react-native-camera', 'general'
        multiDexEnabled true
    }
    splits {
        abi {
            reset()
            enable enableSeparateBuildPerCPUArchitecture
            universalApk false  // If true, also generate a universal APK
            include "armeabi-v7a", "x86", "arm64-v8a", "x86_64"
        }
    }
    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword '12345679'
            keyAlias 'pyfundation'
            keyPassword '12345679'
        }
        release {
            storeFile file('release.keystore')
            storePassword '12345679'
            keyAlias 'pyfundation'
            keyPassword '12345679'
        }
    }
    buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
          
            // Caution! In production, you need to generate your own keystore file.
            // see https://facebook.github.io/react-native/docs/signed-apk-android.
            signingConfig signingConfigs.release
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }

    packagingOptions {
        pickFirst "lib/armeabi-v7a/libc++_shared.so"
        pickFirst "lib/arm64-v8a/libc++_shared.so"
        pickFirst "lib/x86/libc++_shared.so"
        pickFirst "lib/x86_64/libc++_shared.so"
    }

    // applicationVariants are e.g. debug, release
    applicationVariants.all { variant ->
        variant.outputs.each { output ->
            // For each separate APK per architecture, set a unique version code as described here:
            // https://developer.android.com/studio/build/configure-apk-splits.html
            def versionCodes = ["armeabi-v7a": 1, "x86": 2, "arm64-v8a": 3, "x86_64": 4]
            def abi = output.getFilter(OutputFile.ABI)
            if (abi != null) {  // null for the universal-debug, universal-release variants
                output.versionCodeOverride =
                        versionCodes.get(abi) * 1048576 + defaultConfig.versionCode
            }

        }
    }
}

dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])
    //noinspection GradleDynamicVersion
    implementation "com.facebook.react:react-native:+"  // From node_modules
    implementation "androidx.swiperefreshlayout:swiperefreshlayout:1.0.0"
    debugImplementation("com.facebook.flipper:flipper:${FLIPPER_VERSION}") {
      exclude group:'com.facebook.fbjni'
    }
    debugImplementation("com.facebook.flipper:flipper-network-plugin:${FLIPPER_VERSION}") {
        exclude group:'com.facebook.flipper'
    }
    debugImplementation("com.facebook.flipper:flipper-fresco-plugin:${FLIPPER_VERSION}") {
        exclude group:'com.facebook.flipper'
    }

     //firebase
     implementation 'com.google.android.gms:play-services-vision:20.0.0'

     // add multidex 64k
    implementation 'com.android.support:multidex:1.0.3'
    implementation project(':lottie-react-native')
    addUnimodulesDependencies()

    if (enableHermes) {
        def hermesPath = "../../node_modules/hermes-engine/android/";
        debugImplementation files(hermesPath + "hermes-debug.aar")
        releaseImplementation files(hermesPath + "hermes-release.aar")
    } else {
        implementation jscFlavor
    }
}

// Run this once to be able to run the application with BUCK
// puts all compile dependencies into folder libs for BUCK to use
task copyDownloadableDepsToLibs(type: Copy) {
    from configurations.compile
    into 'libs'
}

apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)


# edit android/app/src/main/androidManifest.xml
# add

<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.pyfundation
">
 
  <uses-permission android:name="android.permission.INTERNET"/>
  <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
  <!-- OPTIONAL PERMISSIONS, REMOVE WHATEVER YOU DO NOT NEED -->
  <uses-permission android:name="android.permission.MANAGE_DOCUMENTS"/>
  <uses-permission android:name="android.permission.READ_INTERNAL_STORAGE"/>
  <uses-permission android:name="android.permission.USE_FINGERPRINT"/>
  <uses-permission android:name="android.permission.VIBRATE"/>
  <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
  <!-- These require runtime permissions on M -->
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>


  <uses-permission android:name="android.permission.READ_CALENDAR"/>
  <uses-permission android:name="android.permission.WRITE_CALENDAR"/>
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
  <uses-permission android:name="android.permission.WRITE_SETTINGS"/>
  <!--  OPTIONAL PERMISSIONS -->
  <uses-permission android:name="android.permission.ACCEPT_HANDOVER" />
  <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
  <uses-permission android:name="android.permission.ACTIVITY_RECOGNITION" />
  <uses-permission android:name="android.permission.ANSWER_PHONE_CALLS" />
  <uses-permission android:name="android.permission.BODY_SENSORS" />
  <uses-permission android:name="android.permission.CALL_PHONE" />
  <uses-permission android:name="android.permission.PROCESS_OUTGOING_CALLS" />
  <uses-permission android:name="android.permission.READ_CALL_LOG" />
  <uses-permission android:name="android.permission.READ_CONTACTS" />
  <uses-permission android:name="android.permission.READ_PHONE_NUMBERS" />

  <!-- END OPTIONAL PERMISSIONS -->

  <uses-permission android:name="android.permission.RECORD_AUDIO"/>
  <uses-permission android:name="android.permission.CAMERA"/>
  <uses-permission android:name="android.permission.GET_ACCOUNTS" />
  <uses-permission android:name="android.permission.READ_PHONE_STATE" />
  <uses-permission android:name="android.permission.READ_SMS" />
  <uses-permission android:name="android.permission.WRITE_SMS" />
  <uses-permission android:name="android.permission.RECEIVE_MMS" />
  <uses-permission android:name="android.permission.RECEIVE_SMS" />
  <uses-permission android:name="android.permission.SEND_SMS" />
  <!-- END OPTIONAL PERMISSIONS -->

  <uses-permission android:name="android.permission.RECEIVE_WAP_PUSH" />
  <uses-permission android:name="android.permission.USE_SIP" />
  <uses-permission android:name="android.permission.WRITE_CALL_LOG" />
  <uses-permission android:name="android.permission.WRITE_CONTACTS" />
  <uses-permission android:name="com.android.voicemail.permission.ADD_VOICEMAIL" />
  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
  <!-- END OPTIONAL PERMISSIONS -->
  <application
    android:name=".MainApplication"
    android:label="@string/app_name"
    android:icon="@mipmap/ic_launcher"
    android:roundIcon="@mipmap/ic_launcher_round"
    android:allowBackup="false"
    android:theme="@style/AppTheme"
    android:usesCleartextTraffic="true"
    android:requestLegacyExternalStorage="true"

  >
    <meta-data android:name="expo.modules.updates.EXPO_UPDATE_URL" android:value="https://exp.host/@marceluphd/food-py" />
    <meta-data android:name="expo.modules.updates.EXPO_SDK_VERSION" android:value="38.0.0" />
    <!-- <meta-data android:name="expo.modules.updates.EXPO_RELEASE_CHANNEL" android:value="coibfe" /> -->
        <!-- <meta-data android:name="expo.modules.updates.EXPO_RELEASE_CHANNEL" android:value="todopy" /> -->

    <meta-data android:name="expo.modules.updates.EXPO_RELEASE_CHANNEL" android:value="coibfe" />

    <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="@string/google_maps_key" />

    <meta-data
    android:name="com.google.firebase.ml.vision.DEPENDENCIES"
    android:value="barcode" /> <!-- choose models that you will use -->
    <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/> 

  <activity
    android:name=".MainActivity"
      android:label="@string/app_name"
      android:screenOrientation="portrait"
      android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
      android:launchMode="singleTask"
      android:windowSoftInputMode="adjustResize"
      android:theme="@style/Theme.App.SplashScreen"
    >
      <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
      </intent-filter>
    </activity>
    <activity android:name="com.facebook.react.devsupport.DevSettingsActivity"/>
  </application>
</manifest>

      

################################     PACKAGE.JSON
{
  "main": "index.js",
  "name": "pyfundation",
  "version": "1.0.0",
  "author": "Eng. Marcelo Anjos",
  "license": "ISC",
  "homepage": "www.pyfundation.com",
  "scripts": {
    "go": "cd android && ./gradlew clean && yarn start --reset-cache",
    "clean-install": "rm -rf node_modules && npm cache clean --force && watchman watch-del-all && yarn",
    "clean-release-bundle": "cd android && ./gradlew clean && ./gradlew :app:bundleRelease",
    "clean-debug-bundle": "cd android && ./gradlew clean && ./gradlew :app:bundleDebug",
    "compile-debug": "cd android && ./gradlew clean && ./gradlew assembleDebug",
    "compile-release": "cd android && ./gradlew clean && ./gradlew assembleRelease",
    "apk-debug-install": "cd app/build/outputs/apk/debug/ && adb install -r app-debug.apk",
    "reset": "yarn start --reset-cache",
    "android:devices": "$ANDROID_HOME/platform-tools/adb devices",
    "android:logcat": "$ANDROID_HOME/platform-tools/adb logcat *:S ReactNative:V ReactNativeJS:V",
    "android:shake": "$ANDROID_HOME/platform-tools/adb devices | grep '\\t' | awk '{print $1}' | sed 's/\\s//g' | xargs -I {} $ANDROID_HOME/platform-tools/adb -s {} shell input keyevent 82",
    "android-install": "adb install -r android/app/build/outputs/apk/release/app-release.apk",
    "android-release": "npx react-native run-android --variant=release",
    "publish": "expo publish",
    "android": "npx react-native run-android",
    "pods": "cd ios && sudo npx pod install",
    "ios": "npx react-native run-ios",
    "web": "expo start --web",
    "start": "npx react-native start --reset-cache",
    "link": "npx react-native link",
    "coibfe": "expo publish --release-channel coibfe",
    "todopy": "expo publish --release-channel todopy",
    "test": "jest"
  },
  "dependencies": {
    "@react-native-async-storage/async-storage": "^1.11.0",
    "@react-native-community/geolocation": "^2.0.2",
    "@react-native-community/google-signin": "^5.0.0",
    "@react-native-community/masked-view": "^0.1.10",
    "@react-native-community/netinfo": "^5.9.7",
    "@react-native-community/slider": "^3.0.3",
    "@react-native-community/toolbar-android": "^0.1.0-rc.2",
    "@react-navigation/bottom-tabs": "^5.9.2",
    "@react-navigation/drawer": "^5.9.3",
    "@react-navigation/native": "^5.7.6",
    "@react-navigation/stack": "^5.9.3",
    "aes-everywhere": "^1.0.0",
    "axios": "^0.19.2",
    "dateformat": "^3.0.3",
    "eslint-plugin-react-hooks": "^4.1.2",
    "expo": "~38.0.9",
    "expo-font": "^8.3.0",
    "expo-localization": "^8.2.1",
    "expo-splash-screen": "^0.5.0",
    "expo-status-bar": "^1.0.0",
    "expo-updates": "~0.2.10",
    "expo-web-browser": "^8.5.0",
    "formik": "^2.1.5",
    "i18n-js": "^3.7.1",
    "intl": "^1.2.5",
    "lodash": "^4.17.19",
    "lottie-react-native": "^3.5.0",
    "moment": "^2.29.1",
    "native-base": "^2.13.14",
    "react": "16.13.1",
    "react-dom": "~16.11.0",
    "react-native": "0.63.4",
    "react-native-action-button": "^2.8.5",
    "react-native-bluetooth-escpos-printer": "^0.0.5",
    "react-native-card-ui": "^1.1.3",
    "react-native-chart-kit": "^6.6.1",
    "react-native-config": "^1.3.3",
    "react-native-contacts": "^6.0.3",
    "react-native-country-picker-modal": "^2.0.0",
    "react-native-credit-card": "^0.1.9",
    "react-native-crypto-js": "^1.0.0",
    "react-native-dashboard": "^0.0.4",
    "react-native-device-info": "^8.0.1",
    "react-native-elements": "^2.2.1",
    "react-native-exception-handler": "^2.10.8",
    "react-native-fbsdk": "^2.0.0",
    "react-native-fs": "^2.16.6",
    "react-native-geolocation-service": "^5.0.0",
    "react-native-gesture-handler": "^1.8.0",
    "react-native-get-location": "^1.4.3",
    "react-native-get-sms-android": "^2.1.0",
    "react-native-global-props": "^1.1.5",
    "react-native-imei": "^0.2.0",
    "react-native-linear-gradient": "^2.5.6",
    "react-native-mail-compose": "^0.0.6",
    "react-native-maps": "^0.27.1",
    "react-native-maps-directions": "^1.8.0",
    "react-native-material-menu": "^1.1.3",
    "react-native-modal": "^11.5.6",
    "react-native-nested-listview": "^0.9.0",
    "react-native-paper": "^4.3.0",
    "react-native-permissions": "^2.2.0",
    "react-native-push-notification": "^5.1.1",
    "react-native-qrcode-svg": "^6.0.6",
    "react-native-really-awesome-button": "^1.6.0",
    "react-native-reanimated": "^1.13.1",
    "react-native-restart": "^0.0.17",
    "react-native-safari-view": "^2.1.0",
    "react-native-safe-area-context": "^3.1.8",
    "react-native-screens": "^2.11.0",
    "react-native-search-bar": "^3.5.1",
    "react-native-side-drawer": "^1.2.8",
    "react-native-sim-data": "^3.0.0",
    "react-native-sms": "^1.11.0",
    "react-native-snap-carousel": "^3.9.1",
    "react-native-speedometer": "^1.0.5",
    "react-native-speedometer-chart": "^0.7.5",
    "react-native-splash-screen": "^3.2.0",
    "react-native-sqlite-storage": "^5.0.0",
    "react-native-svg": "^12.1.0",
    "react-native-swiper": "^1.6.0",
    "react-native-touchable-scale": "^2.1.1",
    "react-native-unimodules": "~0.10.1",
    "react-native-value-picker": "^0.1.3",
    "react-native-vector-icons": "^7.0.0",
    "react-native-web": "~0.11.7",
    "react-navigation": "^4.4.0",
    "react-scripts": "^3.4.3",
    "socket.io-client": "^2.3.1",
    "validate.js": "^0.13.1",
    "yup": "^0.29.3"
  },
  "devDependencies": {
    "@babel/core": "~7.9.0",
    "@types/react": "^16.9.46",
    "@types/react-dom": "^16.9.8",
    "@types/react-native": "^0.63.8",
    "babel-jest": "~25.2.6",
    "babel-plugin-module-resolver": "^4.0.0",
    "jest": "~25.2.6",
    "react-native-typescript-transformer": "^1.2.13",
    "react-test-renderer": "~16.11.0",
    "typescript": "^3.9.7"
  },
  "jest": {
    "preset": "react-native"
  },
  "private": true
}

############################################################# 

yarn add --dev typescript @types/react @types/react-native @types/react-dom

yarn add react-native-unimodules

 yarn add @react-native-async-storage/async-storage @react-native-community/geolocation @react-native-google-signin/google-signin @react-native-community/masked-view @react-native-community/netinfo @react-native-community/slider @react-native-community/toolbar-android @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/native @react-navigation/stack aes-everywhere axios dateformat eslint-plugin-react-hooks expo expo-font expo-localization expo-splash-screen expo-status-bar expo-updates expo-web-browser formik i18n-js intl lodash lottie-react-native moment native-base react react-dom react-native react-native-action-button react-native-bluetooth-escpos-printer react-native-card-ui react-native-chart-kit react-native-config react-native-contacts react-native-country-picker-modal react-native-credit-card react-native crypto-js react-native-dashboard react-native-device-info react-native-elements react-native-exception-handler react-native-fbsdk react-native-fs react-native-geolocation-service react-native-gesture-handler react-native-get-location react-native-get-sms-android react-native-global-props react-native-imei react-native-linear-gradient react-native-mail-compose react-native-maps react-native-maps-directions react-native-material-menu react-native-modal react-native-nested-listview react-native-paper react-native-permissions react-native-push-notification react-native-qrcode-svg react-native-really-awesome-button react-native-reanimated react-native-restart react-native-safari-view react-native-safe-area-context react-native-screens react-native-search-bar react-native-side-drawer react-native-sim-data react-native-sms react-native-snap-carousel react-native-speedometer react-native-speedometer-chart react-native-splash-screen react-native-sqlite-storage react-native-svg react-native-swiper react-native-touchable-scale react-native-unimodules react-native-value-picker react-native-vector-icons react-native-web react-navigation react-scripts socket.io-client validate.js yup react-native-localize react-native-crypto-js 
    
######################
cd ios
npx pod-install


################generate key
cd android/app

keytool -genkey -v -keystore debug.keystore -alias pyfoundation -keyalg RSA -keysize 2048 -validity 10000
keytool -genkey -v -keystore release.keystore -alias pyfoundation -keyalg RSA -keysize 2048 -validity 10000

keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=@Ma299929
MYAPP_UPLOAD_KEY_PASSWORD=@Ma299929

12345679
marcelo anjos
py fundation group
py fundation group

asuncion
asuncion
py
yes

####################### in App.tsx
import * as Updates from 'expo-updates';
import React, { useState, useEffect } from 'react';

  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync()
        await Updates.reloadAsync()
      }

    }

    updateApp();
  }, []);

############# in release

npx react-native run-android --variant=release
cd android/app/build/outputs/apk/release/

adb install -r app-release.apk
yarn expo publish pyfundation

marcelu.phd@gmail.com
MA28


############################################################
npx create-react-native-app pyfoundation
# select Default 
cd pyfoundation && code .

#Renomeie o arquivo App.js para App.tsx
#Crie o arquivo tsconfig.json 

{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"]
}

#create src folder move3 App.tsx
/src/App.tsx

#rename index.js /App.js to ./src/App.js

# app.tsx ############################################
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Updates from "expo-updates";

const App: React.FC = () => {

  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync(); // depende da sua estratégia
      }
    }
    updateApp();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
//####################################################

#add metadata androidmanifest e expo.plist do ios
  yarn expo publish pyfoundation

#android
npx react-native run-android
npx react-native run-android --configuration Release
#ios
cd ios && pod install
npx react-native run-ios
npx react-native run-ios --configuration Release
npx react-native run-ios --configuration Release --device "nome do dispositivo"


###Se não der certo, desmarque a opção Show Devices Bezels. No simulador


yarn add --dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer lottie-react-native lottie-ios @react-navigation/native

yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack

yarn add babel-plugin-module-resolver

yarn add expo-app-loading expo-asset expo-font expo-linear-gradient galio-framework react-native-dropdown-picker @react-navigation/compat @react-navigation/drawer react-native-modal-dropdown

yarn add @react-native-async-storage/async-storage @react-native-community/geolocation @react-native-google-signin/google-signin @react-native-community/masked-view @react-native-community/netinfo @react-native-community/slider @react-native-community/toolbar-android @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/native @react-navigation/stack aes-everywhere axios dateformat eslint-plugin-react-hooks expo expo-font expo-localization expo-splash-screen expo-status-bar expo-updates expo-web-browser formik i18n-js intl lodash lottie-react-native moment native-base react react-dom react-native react-native-action-button react-native-bluetooth-escpos-printer react-native-camera react-native-card-ui react-native-chart-kit react-native-config react-native-contacts react-native-country-picker-modal react-native-credit-card react-native crypto-js react-native-dashboard react-native-device-info react-native-elements react-native-exception-handler react-native-fbsdk react-native-fs react-native-geolocation-service react-native-gesture-handler react-native-get-location react-native-get-sms-android react-native-global-props react-native-imei react-native-linear-gradient react-native-mail-compose react-native-maps react-native-maps-directions react-native-material-menu react-native-modal react-native-nested-listview react-native-paper react-native-permissions react-native-push-notification react-native-qrcode-svg react-native-really-awesome-button react-native-reanimated react-native-restart react-native-safari-view react-native-safe-area-context react-native-screens react-native-search-bar react-native-side-drawer react-native-sim-data react-native-sms react-native-snap-carousel react-native-speedometer react-native-speedometer-chart  react-native-sqlite-storage react-native-svg react-native-swiper react-native-touchable-scale react-native-unimodules react-native-value-picker react-native-vector-icons react-native-web react-navigation react-scripts socket.io-client validate.js yup react-native-localize react-native-crypto-js 

yarn add --dev cross-env

#.babelrc
["module-resolver", {
        "root": ["./src"],
        "alias": {
            "components": "./src/components",
            "_main": "./scomponents/_main",
            "screens": "./src/screens",
            "config": "./src/config",
            "routes": "./src/routes",
            "utils": "./src/utils",
            "modules": "./src/modules",
            "constants": "./src/constants",
            "assets": "./src/assets/",
            "data": "./src/data",
            "chat": "./src/screens/ecommerce/chat",
            "Maps": "./src/screens/ecommerce/Maps",
            "Cart": "./src/screens/ecommerce/Cart",
            "Categories": "./src/screens/ecommerce/Categories",
            "Home": "./src/screens/ecommerce/Home",
            "Profile": "./src/screens/ecommerce/Profile",
            "Test": "./src/screens/Test",
            "pages": "./src/pages",
            "Checkout": "./src/pages/Checkout",
            "Credit_Card": "./src/pages/Credit_Card",
            "ForgotPassword": "./src/pages/ForgotPassword",
            "Last_checkout": "./src/pages/Last_checkout",
            "Login": "./src/pages/Login",
            "Payment": "./src/pages/Payment",
            "Register": "./src/pages/Register",
            "User": "./src/pages/User",
            "navigation": "./src/navigation",
            "control": "./src/screens/control",
            "ecommerce": "./src/screens/ecommerce",
            "Main": "./src/screens/Main"

        }
      }]
    ]
  }
## PLACE IN FIRST POSITION IN APP.TSX
import 'react-native-gesture-handler';


yarn add --dev pod-install 


#############  DEBUG #####################
yarn start
yarnyarn android
# balance app and enable DEBUG

reinstall reactnative tools
reinit code

#click in app.tsx
run add configurations 
react-native debug android
start #WITH DEBUGING IN CEL ACTIVE

#### AFTER END STOP DEBUG IN DEVICE #####


#### CLEAR ALLL

watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf $TMPDIR/metro* && rm -rf $TMPDIR/haste-*
rm -rf $TMPDIR/metro-* && rm -rf $TMPDIR/react-* && rm -rf $TMPDIR/haste-*
watchman watch-del-all && rm -rf $TMPDIR/react-native-packager-cache-* && rm -rf $TMPDIR/metro-bundler-cache-* && rm -rf node_modules/ && npm cache clean && npm install && npm start -- --reset-cache
watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && npm cache verify && npm install && npm start -- --reset-cache


git push --no-verify 