import { useParams } from "react-router-dom";
import { CardBook } from "../../Components/CardBook/CardBook";

export const BookPage = () => {
  const { id } = useParams();

  const mockBook = {
    id: 1,
    title: "Matar un ruiseñor",
    status: "Disponible",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/150",
  };
  return <CardBook books={mockBook} />;
};
