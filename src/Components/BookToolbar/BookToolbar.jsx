import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import { FilterList, Download, MenuBook } from "@mui/icons-material";

const BookToolbar = ({
  handleFilterTypeChange,
  handleSearchChange,
  filterType,
  searchQuery,
  exportToExcel,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 16px",
        backgroundColor: "#f8f8f8",
        borderRadius: "8px",
        gap: "12px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <MenuBook sx={{ color: "#8a2be2" }} />
        <span
          style={{ fontWeight: "bold", fontSize: "16px", color: "#8a2be2" }}
        >
          LIBROS
        </span>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <FilterList sx={{ color: "#8a2be2" }} />
        <FormControl size="small" variant="standard">
          <Select
            value={filterType}
            onChange={handleFilterTypeChange}
            displayEmpty
            sx={{ minWidth: "150px" }}
          >
            <MenuItem value="">Filtrar por...</MenuItem>
            <MenuItem value="titulo">Título</MenuItem>
            <MenuItem value="autor">Autor</MenuItem>
            <MenuItem value="categoria">Categoría</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        size="small"
        placeholder="Buscar..."
        variant="standard"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ flex: 1 }}
      />

      <Button
        variant="contained"
        color="primary"
        startIcon={<Download />}
        onClick={exportToExcel}
        sx={{
          textTransform: "none",
          backgroundColor: "#8a2be2",
          ":hover": { backgroundColor: "#6a1bbf" },
        }}
      >
        Exportar
      </Button>
    </Box>
  );
};

export default BookToolbar;
