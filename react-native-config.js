// react-native.config.js
module.exports = {
  dependencies: {
    ...(process.env.NO_FLIPPER // When set, skip flipper includes for iOS archive builds (release buidls)
      ? { 'react-native-flipper': { platforms: { ios: null } } }
      : {}),
  },
};
