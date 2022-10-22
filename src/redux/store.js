import { configureStore } from "@reduxjs/toolkit";
import { contacts } from "./contactsSlice";
import { filter } from "./filterSlice";

 export const store = configureStore({
    reducer: {
       contacts,
       filter,
    },
 });
 
