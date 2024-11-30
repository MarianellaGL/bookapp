import { createSlice } from "@reduxjs/toolkit";
import { getFilteredBooks } from "../../../services/getFilteredBooks";

const filteredBooks = createSlice({
  name: "filteredBooks",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilteredBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFilteredBooks.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getFilteredBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default filteredBooks.reducer;
