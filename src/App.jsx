import "./App.css";
import { BookTable } from "./Components/BookTable/BookTable";
import ButtonAppBar from "./Components/ButtonAppBar/ButtonAppBar";

function App() {
  return (
    <>
      <ButtonAppBar>
        <BookTable />
      </ButtonAppBar>
    </>
  );
}

export default App;
