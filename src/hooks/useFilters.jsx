import { useEffect, useState } from "react";
import { baseURL, booksURL } from "../App";
import { getBooks } from "../services/getBooks";
import { useGetBooks } from "./useGetBooks";
import * as XLSX from "xlsx";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredBooks } from "../services/getFilteredBooks";
import { setBooks } from "../store/slices/BookSlice/BookSlice";

export const useFilters = () => {
  const { books, loading } = useGetBooks(`${baseURL}${booksURL}`, getBooks);
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.filteredBooks
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const buttons = [
    {
      id: 1,
      label: "Prestar",
      color: "primary",
    },
    {
      id: 2,
      label: "Devolver",
      color: "secondary",
    },
  ];

  useEffect(() => {
    dispatch(getFilteredBooks({ searchQuery, filterType }));
  }, [searchQuery, filterType]);

  useEffect(() => {
    if (data && !isLoading && !error) {
      dispatch(setBooks(data));
    }
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterTypeChange = (e) => {
    const value = e.target.value;
    setFilterType(value);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(books);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Libros");
    XLSX.writeFile(workbook, "books.xlsx");
  };

  return {
    books,
    loading,
    buttons,
    handleSearchChange,
    handleFilterTypeChange,
    exportToExcel,
    filterType,
    searchQuery,
  };
};
