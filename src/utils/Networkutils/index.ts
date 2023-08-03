/**
 * @ Author: Your name
 * @ Create Time: 2022-02-08 22:34:19
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 19:03:27
 * @ Description:
 */

import NetInfo from '@react-native-community/netinfo';

export default class NetworkUtils {
  static async isNetworkAvailable() {
    const response = await NetInfo.fetch();

    return response.isConnected && response.isInternetReachable;
  }
}
