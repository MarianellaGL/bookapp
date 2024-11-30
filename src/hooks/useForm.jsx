import { useState } from "react";
import { postBooks } from "../services/postsBooks";

export const useForm = () => {
  const [bookForm, setBookForm] = useState({
    titulo: "",
    autor: "",
    categoria: "",
    estado: "",
  });

  const handleChange = (e) => {
    setBookForm({ ...bookForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const sendData = await postBooks(bookForm);
    console.log({ sendData });
    setBookForm({
      titulo: "",
      autor: "",
      categoria: "",
      estado: "",
    });
  };

  return { bookForm, handleChange, handleSubmit };
};
