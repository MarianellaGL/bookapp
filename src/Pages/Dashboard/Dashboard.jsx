import { Box, CircularProgress } from "@mui/material";
import { BookTable } from "../../Components/BookTable/BookTable";
import { GroupButtons } from "../../Components/GroupButtons/GroupButtons";
import { getBooks } from "../../services/getBooks";
import { useGetBooks } from "../../hooks/useGetBooks";
import { baseURL, booksURL } from "../../App";

export const Dashboard = () => {
  const { books, loading } = useGetBooks(`${baseURL}${booksURL}`, getBooks);
  console.log(books.books);

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

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        alignContent: "center",
        margin: "0 auto",
        gap: "12px",
      }}
    >
      <BookTable books={books} />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <GroupButtons buttons={buttons} />
      </Box>
    </Box>
  );
};
