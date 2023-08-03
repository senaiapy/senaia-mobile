import React from 'react';

import { useIsFirstTime } from '@/core/hooks';
import { Button, SafeAreaView, Text, View } from '@/ui';

import { Cover } from './cover';
export const Onboarding = () => {
  const [_, setIsFirstTime] = useIsFirstTime();
  return (
    <View className="flex h-full items-center  justify-center">
      <View className="w-full flex-1">
        <Cover />
      </View>
      <View className="justify-end ">
        <Text className="my-3 text-center text-5xl font-bold">Senaia</Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          Control Ganadero.
        </Text>

        <Text className="my-1 pt-6 text-left text-lg">🚀 COIBFE. </Text>
        <Text className="my-1 text-left text-lg">🥷 Identificacíon.</Text>
        <Text className="my-1 text-left text-lg">🧩 Traceabilidad.</Text>
        <Text className="my-1 text-left text-lg">💪 Fuerza Paraguay.</Text>
      </View>
      <SafeAreaView className="mt-6">
        <Button
          label="Let's Get Started "
          onPress={() => {
            setIsFirstTime(false);
          }}
        />
      </SafeAreaView>
    </View>
  );
};
