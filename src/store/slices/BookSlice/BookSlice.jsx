import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { setBooks, addBooks } = bookSlice.actions;
export default bookSlice.reducer;
