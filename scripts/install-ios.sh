#/bin/sh

# nvm alias default 16
rm -rf node_modules &&  rm yarn.lock && yarn install --ignore-engine && echo 'unset npm_config_prefix' > node_modules/react-native/scripts/find-node.sh && cd ios && rm -rf Pods && rm Podfile.lock && bundle install && pod install && pod install --repo-update && npx pod-install && cd ..
# && npx react-native start --reset-cache & npx react-native run-ios 

