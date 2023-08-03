// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import React, { memo } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Ionicons';

import Header from '@/components/Header.component';

import {
  ActionContainer,
  Container,
  DeleteButton,
  DetailButton,
  Rate,
  RateContainer,
  Title,
} from './styles';

// ############### internationalization #######################

const FilmScreen: React.FC = () => {
  return (
    <Container>
      <Header titles="Minha Lista" />
      <Title size={18}>Filme</Title>
      <RateContainer>
        <Ionicons name="md-star" size={25} color="#E7A74E" />
        <Rate>5 / 10</Rate>
      </RateContainer>

      <ActionContainer>
        <DetailButton /*onPress={navigateDetailFilmPage}*/>
          <Title size={14}>Ver Detalhes</Title>
        </DetailButton>

        <DeleteButton>
          <Feather name="trash" size={25} color="#fff" />
        </DeleteButton>
      </ActionContainer>
    </Container>
  );
};
export default memo(FilmScreen);
