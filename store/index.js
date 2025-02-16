import { configureStore } from "@reduxjs/toolkit";
import contacts from "./slices/contactsSlice";
export const store = configureStore({
  reducer: {
    contacts,
  },
});
