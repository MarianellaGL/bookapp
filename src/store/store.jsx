import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/BookSlice/BookSlice";
import filteredBooks from "./slices/FiltersBookSlice/FilterBookSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
    filteredBooks: filteredBooks,
  },
});

export default store;
