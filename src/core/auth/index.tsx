import { create } from 'zustand';

import { createSelectors } from '../utils';
import type { TokenType } from './utils';
import { getTokens, removeTokens, setTokens } from './utils';

interface AuthState {
  token: TokenType | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (data: TokenType) => void;
  signOut: () => void;
  hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  token: null,
  signIn: (token) => {
    setTokens(token);
    set({ status: 'signIn', token });
  },
  signOut: () => {
    removeTokens();
    set({ status: 'signOut', token: null });
  },
  hydrate: () => {
    try {
      const userToken = getTokens();
      if (userToken !== null) {
        get().signIn(userToken);
      } else {
        get().signOut();
      }
    } catch (e) {
      // catch error here
      // Maybe sign_out user!
    }
  },
}));

export const useAuths = createSelectors(_useAuth);

export const signOuts = () => _useAuth.getState().signOut();
export const signIns = (token: TokenType) => _useAuth.getState().signIn(token);
export const hydrateAuths = () => _useAuth.getState().hydrate();
