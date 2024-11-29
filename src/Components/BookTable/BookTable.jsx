import {
  Box,
  Checkbox,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

export const BookTable = ({ books }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, alignSelf: "center" }}>
      <Toolbar />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Titulo</TableCell>
                  <TableCell>Autor</TableCell>
                  <TableCell>Categoría</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Fecha de actualización</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books?.map((book) => (
                  <TableRow key={book._id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{book.titulo}</TableCell>
                    <TableCell>{book.autor}</TableCell>
                    <TableCell>{book.categoria}</TableCell>
                    <TableCell>
                      <Chip
                        label={book?.estado}
                        color={
                          book?.estado === "Disponible" ? "success" : "default"
                        }
                        style={{ marginBottom: "10px" }}
                      />
                    </TableCell>
                    <TableCell>{book.updatedAt}</TableCell>
                    <TableCell>
                      <Link to={`/libro/${book._id}`}>
                        Ir al detalle del libro
                      </Link>
                    </TableCell>
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
