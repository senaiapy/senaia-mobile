/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 23:13:37
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 12:25:19
 * @ Description:
 */
import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();
// TODO: change to dark or ligth
let themes = 'dark';

if (colorScheme === 'dark') {
}

let theme = {
  black: '#353333',
  foreground: '#353333', //4d3e36
  background: '#F9F7F1',
  yellow: '#353333',
  inverse: 'white',
  darker: '#f5efe4',
  lighter: '#756156',
  chart: 'rgba(53, 51, 51, 1)',
  card: 'white',
  brick: '#1e72d2',
  border: '#f5efe4',
  brickEnd: '#353333',
  wave: '#F9F7F1',
  pill: '#1e72d2',
  switchBackground: '#353333',
  switchForeground: '#F9F7F1',
  inputBackground: 'white',
  inputForeground: '#353333',
  switchBackground2: '#F9F7F1',
  switchForeground2: '#353333',
  stats: '#fff',
  door: '#262424',
  waveborder: '#1e72d2',
  splash: '#fff',
};

//if (colorScheme === 'dark') {
//if (SettingsStore.darkThemeEnabled === true) {
if (themes === 'dark') {
  theme = {
    black: '#353333',
    foreground: '#f2eded', //4d3e36
    background: '#353333',
    yellow: '#2f5f97',
    inverse: '#353333',
    darker: '#2e2c2c',
    lighter: '#ada5a5',
    chart: 'rgba(249, 247, 241, 1)',
    card: '#2e2c2c',
    brick: '#262424',
    border: '#262424',
    brickEnd: '#2f5f97',
    wave: '#353333',
    pill: '#1e72d2',
    switchBackground: '#F9F7F1',
    switchForeground: '#353333',
    inputBackground: '#383636',
    inputForeground: '#f2eded',
    switchBackground2: '#F9F7F1',
    switchForeground2: '#353333',
    stats: '#2e2c2c',
    door: '#262424',
    waveborder: '#1c1b1b',
    splash: '#000',
  };
}

export const Colors = theme;
