import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Victor K (My number)", number: "800-22-45" },
      { id: "id-2", name: "Homra Nick", number: "900-90-09" },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const selectContacts = (state) => state.contacts.items;

export default slice.reducer;
