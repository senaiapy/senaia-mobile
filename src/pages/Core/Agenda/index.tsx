/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import { Env } from '@env';
import BottomSheet from '@gorhom/bottom-sheet';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNetInfo } from '@react-native-community/netinfo'; // import the hook
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, FlatList, Linking } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import * as yup from 'yup';

import { Button } from '@/components/Button';
import type { MenuTypeProps } from '@/components/Menu';
import { Menu } from '@/components/Menu';
import { Skill } from '@/components/Skill';
import { useAuth } from '@/core';
import { translate } from '@/core';
import type { SkillModel } from '@/database/model/SkillModel';
import crudDB from '@/services/crudDB';

import { Container, Form, FormTitle, Input, Title } from './styles';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required(translate('login.EmailError'))
    .email(translate('login.EmailValida')),
  password: yup
    .string()
    .required(translate('login.PasswordError'))
    .min(4, translate('login.PasswordValida'))
    .max(4, translate('login.PasswordValida')),
});

export const Agenda = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const netInfo = useNetInfo(); // declare the constant
  const { signIn } = useAuth();

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    if (!netInfo.isConnected) {
      onMessage(translate('errors.internet'), ' !!!! ', 'danger');
    }
    console.log(data);
    signIn({ access: 'access-token', refresh: 'refresh-token' });
  };

  function onMessage(
    messages: string,
    descriptions: string = '',
    types: any = 'success'
  ) {
    showMessage({
      message: messages,
      description: descriptions,
      type: types, // danger // success
      //backgroundColor: 'purple', // background color
      // color: '#606060', // text color
      duration: 4000,
      icon: 'success', // danger
      onPress: () => {
        onMessageClick();
        /* THIS FUNC/CB WILL BE CALLED AFTER MESSAGE PRESS */
      },
    });
  }

  function onMessageClick() {
    console.log('CLICK');
  }

  function Register() {
    navigation.navigate('Register');
  }

  function Password() {
    navigation.navigate('Password');
  }

  function Messages() {
    Linking.canOpenURL('whatsapp://send?text=oi').then((supported) => {
      if (supported) {
        return Linking.openURL(
          'whatsapp://send?phone=' + Env.WHATSPHONE + '&text=Hola'
        );
      } else {
        return Linking.openURL(
          'https://api.whatsapp.com/send?phone=' + Env.WHATSPHONE + '&text=Hola'
        );
      }
    });
  }

  // -------------------DATABASE-----------
  const [type, setType] = useState<MenuTypeProps>('soft');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState<SkillModel[]>([]);
  const [skill, setSkill] = useState<SkillModel>({} as SkillModel);

  const bottomSheetRef = useRef<BottomSheet>(null);

  type dadus = {
    type: string;
    name: string;
  };

  async function handleSave() {
    if (skill.id) {
      const result = await crudDB.updateDB(skill, { name, type });

      Alert.alert('Updated!');
      setSkill({} as SkillModel);
    } else {
      const data = { name, type };
      const result = await crudDB.createDB<dadus>('skills', { name, type });
      Alert.alert('Creado!');
    }

    bottomSheetRef.current?.collapse();
    fetchData();
  }

  async function handleRemove(item: SkillModel) {
    const result = await crudDB.deleteDB(item);
    console.log('RESULT', result);
    fetchData();
    Alert.alert('Apagado!');
  }

  async function fetchData() {
    const response: any = await crudDB.findRegistersDB('skills', 'type', type);
    setSkills(response);
    const value = await crudDB.findOneDB('skills', 'name', 'kkk');
    console.log('VALUE', value);
  }

  async function handleEdit(item: SkillModel) {
    setSkill(item);
    setName(item.name);
    bottomSheetRef.current?.expand();
  }

  useEffect(() => {
    bottomSheetRef.current?.expand();
    fetchData();
  }, [type]);

  return (
    <Container>
      <Title>Agenda</Title>
      <Menu type={type} setType={setType} />

      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Skill
            data={item}
            onEdit={() => handleEdit(item)}
            onRemove={() => handleRemove(item)}
          />
        )}
      />

      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={['1%', '35%']}>
        <Form>
          <FormTitle>{skill.id ? 'Edita' : 'Nuevo'}</FormTitle>

          <Input
            placeholder="Nueva Tarea..."
            onChangeText={setName}
            value={name}
          />

          <Button title="Guarda" onPress={handleSave} />
        </Form>
      </BottomSheet>
    </Container>
  );
};
