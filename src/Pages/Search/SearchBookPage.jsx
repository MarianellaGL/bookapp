import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Chip,
  CardMedia,
  Box,
} from "@mui/material";
import { useState } from "react";
import { CardBook } from "../../Components/CardBook/CardBook";
import { SearchBook } from "../../Components/SearchBook/SearchBook";

export const SearchBookPage = () => {
  const [search, setSearch] = useState("");
  const [book, setBook] = useState(null);

  const handleSearch = () => {
    const mockBook = {
      title: "Matar un ruiseñor",
      status: "Disponible",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://via.placeholder.com/150",
    };
    setBook(mockBook);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        marginTop: "100px",
        alignContent: "center",
        marginLeft: "400px",
        width: "100%",
        gap: "32px",
      }}
    >
      <SearchBook
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />

      {book && <CardBook book={book} />}
    </Box>
  );
};
