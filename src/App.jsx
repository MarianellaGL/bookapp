import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ButtonAppBar from "./Components/ButtonAppBar/ButtonAppBar";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { AddBookPage } from "./Pages/Add/AddBookPage";
import { SearchBookPage } from "./Pages/Search/SearchBookPage";
import { BookPage } from "./Pages/BookPage/BookPage";

export const baseURL = import.meta.env.VITE_BASE_URL;
export const booksURL = import.meta.env.VITE_BOOKS;
export const filters = import.meta.env.VITE_GET_BOOK_FILTER;
export const token = import.meta.env.VITE_TOKEN;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginPage />} />,
        <Route element={<ButtonAppBar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/libro/:id" element={<BookPage />} />
          <Route path="/add" element={<AddBookPage />} />
          <Route path="/search" element={<SearchBookPage />} />
        </Route>
      </>
    )
  );

  //dashboard/libro/:id

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
