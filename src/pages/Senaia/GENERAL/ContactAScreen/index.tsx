// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import React, { memo } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Pickers from '@/components/Pickers.component';

import {
  ActionContainer,
  ActionContainer2,
  Container,
  DetailButton,
  Logo,
  LogoView,
  Title,
} from './styles';
import { InputUser } from './styles';

// ############### internationalization #######################

const ContactAScreen: React.FC = () => {
  return (
    <>
      <Container>
        {/* HEADER */}
        <LogoView>
          <Logo source={require('@/assets/images/Senaia/Logo1.png')} />
          {/* HEADER */}
          <ScrollView>
            <Title size={30}>Vacunación</Title>
            <Title size={20}>Consultar Caravana</Title>
            <ActionContainer>
              <Text>Digite la Caravana </Text>
            </ActionContainer>
            <Title size={20}>Lote</Title>
            <ActionContainer>
              <Text>Digite el lote </Text>
            </ActionContainer>
            <Title size={20}>Vacuna Aplicada</Title>
            <Pickers data="Elija la Medicación" />
            <Title size={20}>Marca Fuego</Title>
            <ActionContainer2>
              <InputUser>
                <Text>Digitar Marca Fuego </Text>
              </InputUser>
            </ActionContainer2>
            <Title size={20}>Edad en Meses</Title>
            <ActionContainer>
              <Text>Digitar la edad </Text>
            </ActionContainer>
            <Title size={20}>Raza</Title>
            <Pickers data="Elija la RAza" />
            <Title size={20}>Sexo Animal</Title>
            <Pickers data="Elija el Sexo" />
            <Title size={20}>Clasificación</Title>
            <Pickers data="Elija la Clasificación" />
            <DetailButton>
              <Text> Enviar</Text>
            </DetailButton>
          </ScrollView>
        </LogoView>
      </Container>
    </>
  );
};
export default memo(ContactAScreen);
