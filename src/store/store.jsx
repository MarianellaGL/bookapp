import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/BookSlice/BookSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;