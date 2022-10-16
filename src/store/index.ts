import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app';
import listeningToReducer from './listeningTo';

const store = configureStore({
  reducer: {
    app: appReducer,
    listeningTo: listeningToReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
