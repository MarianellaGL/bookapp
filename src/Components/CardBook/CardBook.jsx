import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { GroupButtons } from "../GroupButtons/GroupButtons";

export const CardBook = ({ book }) => {
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
    {
      id: 3,
      label: "Elimnar",
      color: "default",
    },
  ];

  return (
    <Card style={{ maxWidth: "600px", width: "100%", alignSelf: "center" }}>
      <CardContent>
        <div style={{ display: "flex", gap: "12px" }}>
          <Typography variant="h6">{book?.title}</Typography>
          <Chip
            label={book?.status}
            color={book?.status === "Disponible" ? "success" : "default"}
            style={{ marginBottom: "10px" }}
          />
        </div>

        <Typography variant="body2" style={{ marginBottom: "10px" }}>
          {book?.description}
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image={book?.image}
          alt={book?.title}
          style={{ marginBottom: "10px" }}
        />
        <GroupButtons buttons={buttons} />
      </CardContent>
    </Card>
  );
};
