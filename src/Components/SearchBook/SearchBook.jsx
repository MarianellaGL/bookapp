import { Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBook = ({ search, setSearch, handleSearch }) => {
  return (
    <div
      style={{
        alignSelf: "center",
      }}
    >
      <div style={{ marginRight: "20px", width: "100%" }}>
        <Typography variant="h5" gutterBottom>
          Buscá un libro
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSearch}
          style={{ marginTop: "10px" }}
        >
          BUSCAR
        </Button>
      </div>
    </div>
  );
};
