import { useParams } from "react-router-dom";
import { CardBook } from "../../Components/CardBook/CardBook";
import { Box, CircularProgress } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { baseURL, booksURL } from "../../App";
import { getBooks } from "../../services/getBooks";

export const BookPage = () => {
  const { id } = useParams();
  const { data: book, loading } = useFetch(
    `${baseURL}${booksURL}/${id}`,
    getBooks
  );

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardBook book={book} textArea={false} />
    </Box>
  );
};
