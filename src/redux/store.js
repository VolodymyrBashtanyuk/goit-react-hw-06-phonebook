import { configureStore } from "@reduxjs/toolkit";
import {  contactReducer } from "./contactsSlice";
import { filter } from "./filterSlice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

 export const store = configureStore({
    reducer: {
       contacts: contactReducer,
       filter,
    },

     middleware: getDefaultMiddleware=>  getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
 });
 
export const persistor = persistStore(store);