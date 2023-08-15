/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
//###########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//###########################################
const appEnv = process.env.APP_ENV ?? 'development';
import { Env } from '@env';

const AES256 = require('acypher');
const key = Env.AESKEY;
import DeviceInfo from 'react-native-device-info';
var aesjs = require('acypher');
//import Functions from '@/utils/Functions';
import base64 from 'react-native-base64';
export default class Protek {
  static async getProtek(machineKey: any) {
    let posApiKeyMobile = null;
    let posKeyPrivate = null;
    let DeviceUniqueID = '';
    let DeviceManufacturer = '';
    let DeviceModel = '';
    let DeviceID = '';
    let DeviceName = '';
    let DeviceVersion = '';
    let BundleId = '';
    let BuildNumber = '';
    let AppVersion = '';
    let UserAgent = '';
    let BuildId = '';
    let Carrier = '';
    let IpAddress = '';
    let MacAddress = '';
    let DeviceToken = '';
    let PhoneNumber = '';
    let Emulator = false;

    const emulated = async () => {
      DeviceInfo.isEmulator().then((isEmulator) => {
        // false
      });
    };

    try {
      DeviceUniqueID = String(DeviceInfo.getUniqueId());
      DeviceManufacturer = await DeviceInfo.getManufacturer();
      DeviceModel = DeviceInfo.getModel();
      DeviceID = DeviceInfo.getDeviceId();
      DeviceName = DeviceInfo.getSystemName();
      DeviceVersion = DeviceInfo.getSystemVersion();
      BundleId = DeviceInfo.getBundleId();
      BuildNumber = DeviceInfo.getBuildNumber();
      AppVersion = DeviceInfo.getReadableVersion();
      UserAgent = await DeviceInfo.getUserAgent();
      BuildId = await DeviceInfo.getBuildId();
      Carrier = await DeviceInfo.getCarrier();
      IpAddress = await DeviceInfo.getIpAddress();
      MacAddress = await DeviceInfo.getMacAddress();
      DeviceToken = await DeviceInfo.getDeviceToken(); // ONLY FOR IOS SECURITY
      PhoneNumber = await DeviceInfo.getPhoneNumber(); // alwaysnot work in android
      Emulator = await DeviceInfo.isEmulator();
      let privateKey;
      let mobileKey;
      // NOT NULL VERIFY
      if (
        DeviceUniqueID !== null &&
        DeviceUniqueID !== '' &&
        DeviceUniqueID !== 'undefined'
      ) {
        // mobileKey = Functions.xor_str(DeviceUniqueID, MacAddress);
        //posApiKeyMobile = await Functions.encrypt(
        //  String(DeviceUniqueID),
        //  machineKey,
        //);
      }

      if (
        MacAddress !== null &&
        MacAddress !== '' &&
        MacAddress !== 'undefined'
      ) {
        //privateKey = Functions.xor_str(DeviceUniqueID, MacAddress);
        //posKeyPrivate = await Functions.encrypt(privateKey, machineKey);
      }

      if (false) {
        console.log('PROTEK', machineKey);
        console.log('privateKey', String(privateKey));
        console.log('mobileKey', String(privateKey));
        console.log('posApiKeyMobile', posApiKeyMobile);
        console.log('posKeyPrivate', posKeyPrivate);
      }
      // const key = "2B7E151628AED2A6ABF7158809CF4F3C";
      // var datakey = AES256.encrypt(dataMachineKeys, key);
      // var mobikey = AES256.encrypt(mobileMachineKey, key);
    } catch (e) {
      console.log('ERROR ', e);
    }

    if (false) {
      // * note this is IDFV on iOS so it will change if all apps from the current apps vendor have been previously uninstalled
      console.log('DeviceUniqueID', DeviceUniqueID); // e.g.ios  FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9 Android: "dd96dec43fb81c97"
      console.log('DeviceManufacturer', DeviceManufacturer); // e.g. Apple
      console.log('DeviceModel', DeviceModel); // e.g. iPhone 6
      console.log('DeviceID', DeviceID); // e.g. iPhone7,2 / or the board on Android e.g. goldfish
      console.log('DeviceName', DeviceName); // e.g. iPhone OS
      console.log('DeviceVersion', DeviceVersion); // e.g. 9.0
      console.log('BundleId', BundleId); // e.g. com.learnium.mobile
      console.log('BuildNumber', BuildNumber); // e.g. 89
      console.log('AppVersion', AppVersion); // e.g. 1.1.1.10
      console.log('UserAgent', UserAgent); // e.g. Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D)
      console.log('BuildId', BuildId); // e.g. Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D)
      console.log('Carrier', Carrier); //  // "walleye"
      console.log('IpAddress', IpAddress); // // "92.168.32.44"
      console.log('MacAddress', MacAddress); // "E5:12:D8:E5:69:97"
      console.log('DeviceToken', DeviceToken); // e.g. Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D)
      console.log('PhoneNumber', PhoneNumber); // e.g. Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D)
      console.log('Emulator', Emulator); // e.g. Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D)
      console.log(' posApiKeyMobile ', posApiKeyMobile); // key 2 cripto
      console.log(' posKeyPrivate ', posKeyPrivate); // key 2 cripto
    } // end console log
    const MacAddresss = MacAddress.split(':').join('');
    const posId = base64.encode(MacAddresss + DeviceUniqueID);
    const posKeyPrivates = base64.encode(MacAddresss);
    const posApiKeyMobiles = base64.encode(DeviceUniqueID);
    const protek = {
      posApiKeyMobile: posApiKeyMobiles,
      posKeyPrivate: posKeyPrivates,
      posId: posId,
    };
    return protek;
  } // end function loadProtek
}
