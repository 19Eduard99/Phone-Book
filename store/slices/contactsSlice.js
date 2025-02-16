import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "John Doe",
      number: "123-456-7890",
      position: "Manager",
      src: "",
    },
    {
      id: 2,
      name: "Jane Doe",
      number: "987-654-3210",
      position: "Developer",
      src: "",
    },
    {
      id: 3,
      name: "Bob Smith",
      number: "555-555-5555",
      position: "Designer",
      src: "",
    },
    {
      id: 4,
      name: "Alice Johnson",
      number: "111-222-3333",
      position: "Tester",
      src: "",
    },
    {
      id: 5,
      name: "Charlie Brown",
      number: "444-555-6666",
      position: "Project Manager",
      src: "",
    },
    {
      id: 6,
      name: "Emily Davis",
      number: "777-888-9999",
      position: "HR Manager",
      src: "",
    },
    {
      id: 7,
      name: "Oliver Wilson",
      number: "222-333-4444",
      position: "Sales Manager",
      src: "",
    },
    {
      id: 8,
      name: "Sophia Anderson",
      number: "666-777-8888",
      position: "Marketing Manager",
      src: "",
    },
    {
      id: 9,
      name: "Jacob Brown",
      number: "333-444-5555",
      position: "Finance Manager",
      src: "",
    },
    {
      id: 10,
      name: "Emma Davis",
      number: "888-999-1111",
      position: "IT Manager",
      src: "",
    },
  ],
  filteredContacts: [],
  searchTerm: "",
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.unshift(action.payload);
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },

    editContact: (state, action) => {
      const findContact = state.contacts.find(
        (contact) => contact.id === action.payload.id
      );

      findContact.name = action.payload.name;
      findContact.number = action.payload.number;
      findContact.position = action.payload.position;
      findContact.src = action.payload.src;
    },

    filterContacts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredContacts = state.contacts.filter((contact) => {
        return contact.name.toLowerCase().trim().includes(searchTerm.trim());
      });

      if (state.filteredContacts.length === 0) {
        return;
      }
    },

    resetFilter: (state) => {
      state.filteredContacts = [];
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addContact,
  deleteContact,
  filterContacts,
  resetFilter,
  setSearchTerm,
  editContact,
} = contactsSlice.actions;

export default contactsSlice.reducer;
