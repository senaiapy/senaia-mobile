// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

/// Regis.tsx
import { create } from 'zustand';

import type { RegisterType } from './utils';
import { getRegis, removeRegis, setRegis } from './utils';
interface RegisState {
  tokenr: RegisterType | null;
  statusr: 'idle' | 'regisOut' | 'regisIn';
  regisIn: (data: RegisterType) => void;
  regisOut: () => void;
  hydrate: () => void;
}

export const useRegis = create<RegisState>((set, get) => ({
  statusr: 'idle',
  tokenr: null,
  regisIn: (tokenr) => {
    setRegis(tokenr);
    set({ statusr: 'regisIn', tokenr });
  },
  regisOut: () => {
    removeRegis();
    set({ statusr: 'regisOut', tokenr: null });
  },
  hydrate: () => {
    try {
      const userRegis = getRegis();

      if (userRegis !== null) {
        get().regisIn(userRegis);
      } else {
        get().regisOut();
      }
    } catch (e) {
      // catch error here
      // Maybe sign_out user!
    }
  },
}));

export const regisOut = () => useRegis.getState().regisOut();
export const hydrateRegis = () => useRegis.getState().hydrate();
