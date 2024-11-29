import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../store/slices/BookSlice/BookSlice";

export const useGetBooks = (url, getData) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const resolve = async () => {
    const response = await getData(url);
    dispatch(setBooks(response));
    setLoading(false);
  };

  useEffect(() => {
    resolve();
  }, [url, dispatch, getData]);

  return { books, loading };
};
