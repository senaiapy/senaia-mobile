import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/ui';

const schema = z.object({
  cpf: z.string({
    required_error: 'Email is required',
  }),
  //.email('Invalid email format'),
  locked: z
    .string({
      required_error: 'locked is required',
    })
    .min(6, 'locked must be at least 6 characters'),
  status: z
    .string({
      required_error: 'status is required',
    })
    .min(6, 'status must be at least 6 characters'),
  type: z
    .string({
      required_error: 'type is required',
    })
    .min(3, 'type must be at least 3 characters'),
  token: z
    .string({
      required_error: 'token is required',
    })
    .min(1, 'token must be at least 1 characters'),
});

export type FormType = z.infer<typeof schema>;

type Props = {
  onSubmit?: (data: FormType) => void;
};

export const ActivateForm = ({ onSubmit = () => {} }: Props) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  return (
    <ScrollView>
      <View className="flex-1 justify-center p-4">
        <Text testID="form-title" variant="h1" className="pb-6 text-center">
          Activate
        </Text>
        <ControlledInput
          testID="cpf-input"
          control={control}
          name="cpf"
          placeholder="000"
          label="ID"
        />
        <ControlledInput
          testID="locked-input"
          control={control}
          name="locked"
          label="User Locked"
          placeholder="unlocked"
        />
        <ControlledInput
          testID="status-input"
          control={control}
          name="status"
          label="User Status"
          placeholder="active"
        />
        <ControlledInput
          testID="type-input"
          control={control}
          name="type"
          label="User Type"
          placeholder="VPA"
        />
        <ControlledInput
          testID="token-input"
          control={control}
          name="token"
          label="Token ID"
          placeholder="0"
        />
        <Button
          testID="login-button"
          label="Activate"
          onPress={handleSubmit(onSubmit)}
          variant="primary"
        />
      </View>
    </ScrollView>
  );
};
