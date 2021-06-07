// eslint-disable-next-line import/no-unresolved
import { useLocalStore } from 'mobx-react-lite';
import React, { createContext, useContext } from 'react';
import AuthStore from './AuthStore';
import FaqStore from './FaqStore';
import TestStore from './TestStore';

const rootContext = createContext();

export const RootProvider = ({ children }) => {
  const stores = {
    testStore: useLocalStore(TestStore),
    authStore: useLocalStore(AuthStore),
    faqStore: useLocalStore(FaqStore),
  };
  return <rootContext.Provider value={stores}>{children}</rootContext.Provider>;
};

export const useRootStore = () => {
  const store = useContext(rootContext);
  if (!store) {
    throw new Error('useStore must be used with in a RootProvider');
  }
  return store;
};

export const useTestStore = () => useRootStore().testStore;
export const useAuthStore = () => useRootStore().authStore;
export const useFaqStore = () => useRootStore().faqStore;
