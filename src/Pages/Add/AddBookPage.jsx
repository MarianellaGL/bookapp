import { Box } from "@mui/material";
import { BookForm } from "../../Components/BookForm/BookForm";

export const AddBookPage = () => {

  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        width: "100%",
      }}
    >
      <BookForm />
    </Box>
  );
};
