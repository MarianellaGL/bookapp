import {
  Box,
  CircularProgress,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { bookmockup } from "../../utils/BooksMockup";

export const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (bookmockup.length > 0) {
        setBooks(bookmockup);
      }
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <div
        style={{
          marginLeft: "180px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Titulo</TableCell>
                  <TableCell>Autor</TableCell>
                  <TableCell>Categoría</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Fecha de actualización</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map((book) => (
                  <TableRow key={book._id}>
                    <TableCell>{book.titulo}</TableCell>
                    <TableCell>{book.autor}</TableCell>
                    <TableCell>{book.categoria}</TableCell>
                    <TableCell>{book.estado}</TableCell>
                    <TableCell>{book.updatedAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Box>
  );
};
