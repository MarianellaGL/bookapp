import { Button } from "@mui/material";

export const GroupButtons = ({ buttons }) => {
  return (
    <div style={{ display: "flex", gap: "24px" }}>
      {/*<Button variant="contained" color="primary">
        PRESTAR
      </Button>
      <Button variant="contained" color="error">
        ELIMINAR
      </Button>
      <Button variant="contained" disabled>
        DEVOLVER
      </Button>*/}
      {buttons?.map((button) => (
        <Button key={button.id} variant="contained" color={button.color}>
          {button.label}
        </Button>
      ))}
    </div>
  );
};
