import { createSlice } from "@reduxjs/toolkit";
import { fetchContact, addContact, deleteContact } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlefetchContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const handleAddContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleDeleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    (contact) => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContact.pending, handlePending)
      .addCase(fetchContact.fulfilled, handlefetchContactFulfilled)
      .addCase(fetchContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
