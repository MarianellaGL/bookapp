import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ButtonAppBar from "./Components/ButtonAppBar/ButtonAppBar";
import { BookTable } from "./Components/BookTable/BookTable";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ButtonAppBar />}>
        <Route path="/dashboard" element={<BookTable />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
