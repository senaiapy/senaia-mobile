// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

// import { createTheme, BaseTheme } from '@shopify/restyle';
import type { BoxProps, TextProps } from '@shopify/restyle';
import {
  ThemeProvider as ReThemeProvider,
  useTheme as useRTheme,
} from '@shopify/restyle';
import * as React from 'react';

type BaseThemeType = typeof BaseTheme & {
  textVariants: { [key: string]: TextProps<typeof BaseTheme> };
  navigation: any;
  buttonVariants: { [key: string]: BoxProps<typeof BaseTheme> };
};

const createTheme = <T extends BaseThemeType>(themeObject: T): T => themeObject;

const BaseTheme = {
  colors: {
    text: '#000000',
    background: '#cfcbcb',
    primary: '#151522',
    secondary: '#9c27b0',
    terciary: '#37d408',
    cuaternary: '#474887',
    cinquinary: '#e2093f',

    muted: '#f1f3f4',

    // from figma file

    black: '#151522',
    grey1: '#333333',
    grey2: '#666666',
    grey3: '#C3C3C3',
    grey4: '#E4E4E4',
    white: 'white',
    red: '#EB5757',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export const theme = createTheme({
  ...BaseTheme,
  // TODO : Not sure if this the best way to handel navigation theme
  navigation: {
    dark: false,
    colors: {
      primary: 'rgb(0, 122, 255)',
      background: '#f8f8fa',
      card: '#f8f8fa',
      text: '#0c1245',
      border: 'rgb(199, 199, 204)',
      notification: 'red',
    },
  },
  buttonVariants: {
    defaults: {},
    primary: {
      backgroundColor: 'primary',
    },
    secondary: {
      backgroundColor: 'secondary',
    },
    terciary: {
      backgroundColor: 'terciary',
    },
    cuaternary: {
      backgroundColor: 'cuaternary',
    },
    cinquinary: {
      backgroundColor: 'cinquinary',
    },
    outline: {
      backgroundColor: 'white',
      borderColor: 'primary',
      borderWidth: 1,
    },
  },
  textVariants: {
    defaults: {},
    header: {
      fontWeight: 'bold',
      fontSize: 22,
      lineHeight: 42.5,
      color: 'black',
    },
    subheader: {
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: 'grey1',
    },
    body: {
      fontSize: 15,
      lineHeight: 24,
      color: 'grey2',
    },
    button_primary: {
      fontSize: 16,
      lineHeight: 22,
      color: 'white',
    },
    button_secondary: {
      fontSize: 16,
      lineHeight: 22,
      color: 'white',
    },
    button_terciary: {
      fontSize: 16,
      lineHeight: 22,
      color: 'white',
    },
    button_cuaternary: {
      fontSize: 16,
      lineHeight: 22,
      color: 'white',
    },
    button_cinquinary: {
      fontSize: 16,
      lineHeight: 22,
      color: 'white',
    },
    button_outline: {
      fontSize: 16,
      lineHeight: 22,
      color: 'text',
    },
    label: {
      fontSize: 16,
      lineHeight: 18,
      color: 'grey2',
      paddingVertical: 's',
    },
  },
});

export type Theme = typeof theme;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ReThemeProvider theme={theme}>{children}</ReThemeProvider>
);

export const useTheme = () => useRTheme<Theme>();
