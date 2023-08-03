import { getItem, removeItem, setItem } from '@/core/storage';

const TOKEN = 'token';

export type TokenType = {
  access: string;
  refresh: string;
};

export const getTokens = () => getItem<TokenType>(TOKEN);
export const removeTokens = () => removeItem(TOKEN);
export const setTokens = (value: TokenType) => setItem<TokenType>(TOKEN, value);
