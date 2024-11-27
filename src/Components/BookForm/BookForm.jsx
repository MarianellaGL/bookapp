import {
  Avatar,
  Button,
  Card,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const BookForm = () => {
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
            <TextField fullWidth variant="outlined" label="Title" />
          </Grid2>
          <Grid2 item xs={3}>
            <TextField fullWidth variant="outlined" label="Author" />
          </Grid2>
        </Grid2>
        <Grid2 item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Sinopsis"
            multiline
            rows={5}
          />
        </Grid2>
        <Grid2 item xs={3}>
          <TextField fullWidth variant="outlined" label="Status" />
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
          <Button variant="contained" color="primary">
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
