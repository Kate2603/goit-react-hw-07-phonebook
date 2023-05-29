import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import {contactsReducer} from './contactsRedusers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});