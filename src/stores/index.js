// eslint-disable-next-line import/no-unresolved
import { useLocalStore } from 'mobx-react-lite';
import React, { createContext, useContext } from 'react';
import TestStore from './TestStore';

const rootContext = createContext();

export const RootProvider = ({ children }) => {
  const stores = {
    testStore: useLocalStore(TestStore),
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
