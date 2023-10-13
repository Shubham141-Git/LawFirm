import ClientCard from "./Card.jsx";
import Carousel from "../Carousel/Carousel";
// import styles from "./TestimonialSection.module.css";
import Avatar1 from "../../assets/Avatar1.png";
import Avatar2 from "../../assets/Avatar2.png";
import Avatar3 from "../../assets/Avatar3.png";
import { Container } from "@mui/material";
const clients = [
  {
    id: 1,
    title: "Jane Cooper",
    subtitle: "Ceo of Hunt",
    testimony: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia`,
    avatar: Avatar1,
  },
  {
    id: 2,
    title: "Devon Lane",
    subtitle: "Ceo of Hunt",
    testimony:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    avatar: Avatar2,
  },
  {
    id: 3,
    title: "Robert Fox",
    subtitle: "Ceo of Hunt",
    testimony:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    avatar: Avatar3,
  },
  {
    id: 4,
    title: "Devon Lane",
    subtitle: "Ceo of Hunt",
    testimony:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    avatar: Avatar1,
  },
];

const Clients = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Carousel
          data={clients}
          componentRender={(ele) => <ClientCard data={ele} />}
        />
      </Container>
    </div>
  );
};

export default Clients;
