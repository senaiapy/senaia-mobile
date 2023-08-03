// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Container, Logo, LogoView, Title } from './styles';

// ############### internationalization #######################

const ContactBScreen: React.FC = () => {
  return (
    <>
      <Container>
        {/* HEADER */}
        <LogoView>
          <Logo source={require('@/assets/images/Senaia/Logo1.png')} />
          {/* HEADER */}
          <ScrollView>
            <Title size={30}>Menu Inicial</Title>
          </ScrollView>
        </LogoView>
      </Container>
    </>
  );
};
export default ContactBScreen;
