import {
  Avatar,
  Button,
  Card,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useForm } from "../../hooks/useForm";

export const BookForm = () => {
  const { bookForm, handleChange, handleSubmit } = useForm();

  return (
    <Card style={{ maxWidth: "800px", width: "100%", alignSelf: "center" }}>
      <Grid2
        container
        spacing={3}
        sx={{ display: "flex", flexDirection: "column", margin: "20px" }}
      >
        <Grid2 item xs={12}>
          <Typography variant="h5" gutterBottom>
            Nuevo libro
          </Typography>
          <Avatar>
            <StarIcon />
          </Avatar>
        </Grid2>
        <Grid2
          item
          xs={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            flexGrow: 1,
          }}
        >
          <Grid2 item xs={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Titulo"
              name="titulo"
              value={bookForm?.titulo}
              onChange={(e) => handleChange(e)}
            />
          </Grid2>
          <Grid2 item xs={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Autor"
              name="autor"
              value={bookForm.autor}
              onChange={(e) => handleChange(e)}
            />
          </Grid2>
        </Grid2>
        <Grid2 item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="categoria"
            name="categoria"
            value={bookForm.categoria}
            onChange={(e) => handleChange(e)}
          />
        </Grid2>
        <Grid2 item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Estado"
            name="estado"
            value={bookForm.estado}
            onChange={(e) => handleChange(e)}
          />
        </Grid2>
        <Grid2
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            AGREGAR
          </Button>
          <Button variant="contained" color="secondary">
            LIMPIAR
          </Button>
        </Grid2>
      </Grid2>
    </Card>
  );
};
