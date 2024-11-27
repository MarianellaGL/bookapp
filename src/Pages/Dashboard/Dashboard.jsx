import { Box, CircularProgress } from "@mui/material";
import { BookTable } from "../../Components/BookTable/BookTable";
import { GroupButtons } from "../../Components/GroupButtons/GroupButtons";
import useFetch from "../../hooks/useFetch";
import { getBooks } from "../../services/getBooks";

const baseURL = import.meta.env.VITE_BASE_URL;
const books = import.meta.env.VITE_BOOKS;

export const Dashboard = () => {
  const { data, loading } = useFetch(`${baseURL}${books}`, getBooks);

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
    <CircularProgress />;
  }

  return (
    <Box
      sx={{
        alignContent: "center",
        margin: "0 auto",
        gap: "12px",
      }}
    >
      <BookTable books={data} />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <GroupButtons buttons={buttons} />
      </Box>
    </Box>
  );
};
