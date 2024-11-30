import { Box, CircularProgress } from "@mui/material";
import { BookTable } from "../../Components/BookTable/BookTable";
import { GroupButtons } from "../../Components/GroupButtons/GroupButtons";
import BookToolbar from "../../Components/BookToolbar/BookToolbar";
import { useFilters } from "../../hooks/useFilters";

export const Dashboard = () => {
  const {
    books,
    loading,
    buttons,
    handleSearchChange,
    handleFilterTypeChange,
    exportToExcel,
    filterType,
    searchQuery,
  } = useFilters();

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        alignContent: "center",
        margin: "auto",
        gap: "12px",
        marginTop: "100px",
      }}
    >
      <BookToolbar
        handleFilterTypeChange={handleFilterTypeChange}
        handleSearchChange={handleSearchChange}
        exportToExcel={exportToExcel}
        filterType={filterType}
        searchQuery={searchQuery}
      />
      <BookTable books={books} />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <GroupButtons buttons={buttons} />
      </Box>
    </Box>
  );
};
