import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        addContactItem(state, action) {  
            state.contacts.push({
                id: nanoid(5),
                ...action.payload,
           })
        },
        removeContacts(state, action) {
           state.contacts =  state.contacts.filter(item => item.id !== action.payload);
        },
    }
})

export const { addContactItem, removeContacts} = contactsSlice.actions;
export const contacts = contactsSlice.reducer;

