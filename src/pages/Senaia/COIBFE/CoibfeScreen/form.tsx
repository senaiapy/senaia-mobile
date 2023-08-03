/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React, { memo, useState } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';

import Loader from '@/components/loader';
import Pickers from '@/components/Pickers.component';

import {
  ActionContainer,
  Board,
  Container,
  DetailButton,
  Logo,
  LogoView,
  PrintButton,
  Title,
  TitleBlue,
  TitleWhite,
  ViewCenter,
  ViewRow,
  ViewSpace,
} from './styles';

// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}

// ############### internationalization #######################

const Form: React.FC = () => {
  Orientation.lockToPortrait();

  // const { data, loading } = useGetCharactersQuery();

  //----------------------------------------------
  const [isLoadingS, setLoadingS] = useState(false);

  // ----------------------------------------------
  // ----------------------------------------------
  // ----------------------------------------------

  return (
    <>
      <Container>
        {/* HEADER */}
        <LogoView>
          <Logo source={require('@/assets/images/Senaia/Logo1.png')} />
        </LogoView>

        {/* HEADER */}
        <ScrollView>
          <Loader visible={isLoadingS} />
          <Board>
            <ViewRow>
              <Title size={25}>COIBFE:</Title>
              <TitleBlue size={25}>49990001</TitleBlue>
            </ViewRow>
            <ViewRow>
              <Title size={20}>VPA:</Title>
              <TitleBlue size={20}>Marcelo Anjos</TitleBlue>
            </ViewRow>
            <ViewSpace />

            <Title size={18}>Consultar Propiedad</Title>
            <ActionContainer>
              <Text>Nombre de Propiedad</Text>
            </ActionContainer>
            <ViewRow>
              <Title size={20}>Departamento:</Title>
              <TitleBlue size={20}>Central</TitleBlue>
            </ViewRow>
            <ViewRow>
              <Title size={20}>Distrito:</Title>
              <TitleBlue size={20}>Asunción</TitleBlue>
            </ViewRow>
            <ViewSpace />
            <Title size={18}>Consultar Propietario</Title>
            <ActionContainer>
              <Text>Nombre de Propietario</Text>
            </ActionContainer>
            <ViewSpace />

            <Title size={18}>Novillos</Title>
            <ActionContainer>
              <Text>0</Text>
            </ActionContainer>
            <Title size={18}>Toros</Title>
            <ActionContainer>
              <Text>0</Text>
            </ActionContainer>
            <Title size={18}>Vacas</Title>
            <ActionContainer>
              <Text>0</Text>
            </ActionContainer>
            <Title size={18}>Vaquillas</Title>
            <ActionContainer>
              <Text>0</Text>
            </ActionContainer>
            <Title size={18}>Otros</Title>
            <ActionContainer>
              <Text>0</Text>
            </ActionContainer>
            <Title size={18}>Hilton</Title>
            <ActionContainer>
              <Text>0</Text>
            </ActionContainer>
            <ViewRow>
              <Title size={20}>TOTAL:</Title>
              <TitleBlue size={20}>0</TitleBlue>
            </ViewRow>
            <ViewSpace />

            <Title size={18}>Finalidad</Title>
            <Pickers data="Faena" />
            <ViewSpace />

            <Title size={18}>Destino</Title>
            <Pickers data="UE" />
            <ViewSpace />

            <Title size={18}>Transporte</Title>
            <Pickers data="Terrestre" />
            <ViewSpace />

            <Title size={18}>Precinto 1</Title>
            <ActionContainer>
              <Text>000000</Text>
            </ActionContainer>
            <Title size={18}>Precinto 2</Title>
            <ActionContainer>
              <Text>000000</Text>
            </ActionContainer>
            <Title size={18}>Precinto 3</Title>
            <ActionContainer>
              <Text>000000</Text>
            </ActionContainer>
            <Title size={18}>Precinto 4</Title>
            <ActionContainer>
              <Text>000000</Text>
            </ActionContainer>
            <ViewSpace />

            <Title size={18}>Observación</Title>
            <ActionContainer>
              <Text>OBS</Text>
            </ActionContainer>
            <ViewSpace />
            <ViewCenter>
              <PrintButton>
                <TitleWhite size={18}>Imprimir</TitleWhite>
              </PrintButton>
            </ViewCenter>
            <ViewCenter>
              <DetailButton>
                <Text>Enviar</Text>
              </DetailButton>
            </ViewCenter>
          </Board>
        </ScrollView>
      </Container>
    </>
  );
};
export default memo(Form);
