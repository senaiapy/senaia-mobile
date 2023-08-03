import React from 'react';

import { useIsFirstTime } from '@/core/hooks';
import { Button, Image, SafeAreaView, Text, View } from '@/ui';
export const Startup = () => {
  // TODO: disable this rule for vars with underscore

  const [_, setIsFirstTime] = useIsFirstTime();
  return (
    <View className="flex h-full items-center  justify-center bg-white">
      <Image className="w-full flex-1" source={require('./cover.png')} />

      <View className="justify-end ">
        <Text className="my-3 text-center text-5xl font-bold">Senaia</Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          Control Ganadero.
        </Text>

        <Text className="my-1 pt-6 text-left text-lg">🚀 Ayuda Online.</Text>
        <Text className="my-1 text-left text-lg">🥷 Coibfe.</Text>
        <Text className="my-1 text-left text-lg">🧩 Identificacion.</Text>
        <Text className="my-1 text-left text-lg">💪 Fuerza Paraguay.</Text>
      </View>
      <SafeAreaView className="mt-6">
        <Button
          label="Empezar"
          onPress={() => {
            setIsFirstTime(false);
          }}
        />
      </SafeAreaView>
    </View>
  );
};
