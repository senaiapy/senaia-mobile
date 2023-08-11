/* eslint-disable max-lines-per-function */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/*
Author: Ing. Marcelo Anjos
CustomDrawerNavigator.tsx (c) 2022
Mail: marcelu.phd@gmail.co
Created:  2022-02-10T21:35:34.427Z
Modified: !date!
*/
// @ts-nocheck

import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import type { FC } from 'react';
import React, { useEffect } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
// ############### internationalization #######################
import Icon from 'react-native-vector-icons/Ionicons';

import { useAuth } from '@/core';
// ############### internationalization #######################
import { translate } from '@/core';
import {
  About,
  Activate,
  Camera,
  Login,
  Message,
  Password,
  Profile,
  Register,
  Scanner,
  Setting,
  SettingData,
} from '@/pages/Core';
import { Agenda } from '@/pages/Core/Agenda/index';
import { Cadastro } from '@/pages/Core/Cadastro/index';
import { LoginScreen } from '@/pages/Core/LoginScreen/index';
import { Printer } from '@/pages/Core/Printer';
import { PrinterInventario } from '@/pages/Core/PrinterInventario';
import Privacy_Policy from '@/pages/Core/Privacy_Policy';
import { Servico } from '@/pages/Core/Servico/index';
import Terms_Conditions from '@/pages/Core/Terms_Conditions';
import { TestPrinter } from '@/pages/Core/TestPrinter/index';
import Admin from '@/pages/general/AdminScreen ';
import Coibfe from '@/pages/Senaia/COIBFE/CoibfeScreen';
import Inventario from '@/pages/Senaia/COIBFE/InventarioScreen';
import MenuCoibfe from '@/pages/Senaia/COIBFE/MenuCoibfeScreen';
import Config from '@/pages/Senaia/GENERAL/ConfigScreen';
import ContactA from '@/pages/Senaia/GENERAL/ContactAScreen';
import ContactB from '@/pages/Senaia/GENERAL/ContactBScreen';
import Details from '@/pages/Senaia/GENERAL/DetailsScreen';
import Figma from '@/pages/Senaia/GENERAL/FigmaScreen';
import Film from '@/pages/Senaia/GENERAL/FilmScreen';
import List from '@/pages/Senaia/GENERAL/ListScreen/index';
import Modal from '@/pages/Senaia/GENERAL/ModalScreen';
import Other from '@/pages/Senaia/GENERAL/OtherScreen';
import Animal from '@/pages/Senaia/IDENTIFICA/AnimalScreen';
import Control from '@/pages/Senaia/IDENTIFICA/ControlScreen';
import Entrada from '@/pages/Senaia/IDENTIFICA/EntradaScreen/index';
import Guia from '@/pages/Senaia/IDENTIFICA/GuiaScreen';
import Identifica from '@/pages/Senaia/IDENTIFICA/IdentificaScreen';
import Liquidacion from '@/pages/Senaia/IDENTIFICA/LiquidacionScreen';
import Peso from '@/pages/Senaia/IDENTIFICA/PesoScreen';
import Raza from '@/pages/Senaia/IDENTIFICA/RazaScreen';
import Salida from '@/pages/Senaia/IDENTIFICA/SalidaScreen/index';
import Vacuna from '@/pages/Senaia/IDENTIFICA/VacunaScreen';
import NewPost from '@/pages/watermellondb/NewPost';
import Root from '@/pages/watermellondb/Root';
import { Homepage } from '@/scenes/Homepage';
import ModalPage from '@/scenes/ModalPage';
import UserDetails from '@/scenes/UserDetails';
import UsersList from '@/scenes/UsersList';
import { colors, styles } from '@/theme/appTheme';

import { TabNavigator } from './tab-navigator';

const Drawer = createDrawerNavigator();

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const { status } = useAuth();
  useEffect(() => {}, [status]);

  return (
    <DrawerContentScrollView style={{ backgroundColor: 'white' }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          paddingVertical: 10,
        }}
      >
        <Image source={require('@/assets/logo.png')} style={styles.avatar} />
        <Text style={{ fontSize: 10 }}>www.PYfoundation.org</Text>
      </View>
      <View style={styles.menuContainer}>
        {status === 'signIn' ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.menuButton}
          >
            <Icon name="home-outline" size={25} color={colors.primary} />
            <Text style={styles.menuItem}>{translate('cDrawer.Home')}</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.menuButton}
        >
          <Icon name="person-outline" size={25} color={colors.primary} />
          <Text style={styles.menuItem}>{translate('cDrawer.Login')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Setting')}
          style={styles.menuButton}
        >
          <Icon name="settings-outline" size={25} color={colors.primary} />
          <Text style={styles.menuItem}>{translate('cDrawer.Settings')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.menuButton}
        >
          <Icon name="list-outline" size={25} color={colors.primary} />
          <Text style={styles.menuItem}>{translate('cDrawer.Register')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Password')}
          style={styles.menuButton}
        >
          <Icon name="create-outline" size={25} color={colors.primary} />
          <Text style={styles.menuItem}>{translate('cDrawer.Password')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.menuButton}
        >
          <Icon name="albums" size={25} color={colors.primary} />
          <Text style={styles.menuItem}>{translate('cDrawer.Profile')}</Text>
        </TouchableOpacity>
        {/** 
        <TouchableOpacity
          onPress={() => navigation.navigate('Message')}
          style={styles.menuButton}
        >
          <Icon name="chatbox" size={25} color={colors.primary} />
          <Text style={styles.menuItem}>{translate('cDrawer.Message')}</Text>
        </TouchableOpacity>
        */}
        <TouchableOpacity
          onPress={() => navigation.navigate('About')}
          style={styles.menuButton}
        >
          <Icon name="hammer-outline" size={25} color={colors.primary} />
          <Text style={styles.menuItem}>{translate('cDrawer.About')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Terms_Conditions')}
          style={styles.menuButton}
        >
          <Icon name="hammer-outline" size={25} color={colors.primary} />
          <Text style={styles.menuItem}>{translate('cDrawer.privacy')}</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
export const CustomDrawerNavigator: FC = () => {
  //To show permanent drawer when screen is rotated
  const { width, height } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        // @ts-ignore
        drawerType: width >= height ? 'permanent' : 'front',
        headerShown: false,
        drawerPosition: 'left',
      }}
    >
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen name="Homepage" component={Homepage} />

      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Password" component={Password} />
      <Drawer.Screen name="Message" component={Message} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Activate" component={Activate} />

      <Drawer.Screen name="SettingData" component={SettingData} />
      <Drawer.Screen name="TestPrinter" component={TestPrinter} />

      <Drawer.Screen name="NewPost" component={NewPost} />
      <Drawer.Screen name="Root" component={Root} />

      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
      <Drawer.Screen name="ServicoScreen" component={Servico} />
      <Drawer.Screen name="CadastroScreen" component={Cadastro} />

      <Drawer.Screen name="AgendaScreen" component={Agenda} />

      <Drawer.Screen name="Config" component={Config} />
      <Drawer.Screen name="Control" component={Control} />

      <Drawer.Screen name="Coibfe" component={Coibfe} />
      <Drawer.Screen name="MenuCoibfe" component={MenuCoibfe} />

      <Drawer.Screen name="Inventario" component={Inventario} />

      <Drawer.Screen name="Printer" component={Printer} />
      <Drawer.Screen name="PrinterInventario" component={PrinterInventario} />

      <Drawer.Screen name="ContactA" component={ContactA} />
      <Drawer.Screen name="ContactB" component={ContactB} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="List" component={List} />
      <Drawer.Screen name="Film" component={Film} />

      <Drawer.Screen name="Animal" component={Animal} />
      <Drawer.Screen name="Entrada" component={Entrada} />
      <Drawer.Screen name="Salida" component={Salida} />
      <Drawer.Screen name="Liquidacion" component={Liquidacion} />
      <Drawer.Screen name="Identifica" component={Identifica} />
      <Drawer.Screen name="Peso" component={Peso} />
      <Drawer.Screen name="Vacuna" component={Vacuna} />
      <Drawer.Screen name="Raza" component={Raza} />
      <Drawer.Screen name="Guia" component={Guia} />

      <Drawer.Screen name="Admin" component={Admin} />
      <Drawer.Screen name="Figma" component={Figma} />
      <Drawer.Screen name="Modal" component={Modal} />
      <Drawer.Screen name="Other" component={Other} />
      <Drawer.Screen name="UserDetails" component={UserDetails} />
      <Drawer.Screen name="UsersList" component={UsersList} />
      <Drawer.Screen name="ModalPage" component={ModalPage} />
      <Drawer.Screen name="Scanner" component={Scanner} />
      <Drawer.Screen name="Camera" component={Camera} />
      <Drawer.Screen name="Privacy_Policy" component={Privacy_Policy} />
      <Drawer.Screen name="Terms_Conditions" component={Terms_Conditions} />
    </Drawer.Navigator>
  );
};
