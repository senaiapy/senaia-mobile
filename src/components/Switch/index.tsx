/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import React, { useLayoutEffect, useState } from 'react';
import { Switch as SwitchComponent, Text, Vibration, View } from 'react-native';

type SwitchType = {
  initialState: boolean;
  onChange: (value: boolean) => void;
};

export const Switch = (props: SwitchType) => {
  const { initialState, onChange } = props;

  const [isEnabled, setIsEnabled] = useState(initialState);
  const toggleSwitch = () => {
    Vibration.vibrate();
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };
  //setIsEnabled(previousState => !previousState)

  const setThema = () => {
    Vibration.vibrate();
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  useLayoutEffect(() => {
    setIsEnabled(initialState);
  }, [initialState]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ color: '#f4f3f4' }}>{isEnabled ? 'ON' : 'OFF'}</Text>
      {/*Setting the default value of state*/}
      {/*On change of switch onValueChange will be triggered*/}
      <SwitchComponent
        style={{ marginTop: 10 }}
        trackColor={{ false: '#767577', true: '#0ad92c' }}
        thumbColor={isEnabled ? '#e8ec19' : '#ee3911'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
