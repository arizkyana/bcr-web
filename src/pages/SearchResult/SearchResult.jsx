import { Container } from "react-bootstrap";
import { Footer, Hero } from "../../components";
import CarList from "./components/CarList";

const CARS = [
  {
    id: 2489,
    name: "Mercedes",
    category: "small",
    price: 1000000,
    status: false,
    start_rent_at: null,
    finish_rent_at: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1681063097005-2019-Mercedes-Benz-C-Class-Sedan-Hero-Image.png?alt=media",
    createdAt: "2023-04-09T17:58:17.007Z",
    updatedAt: "2023-04-09T17:58:17.007Z",
  },
  {
    id: 2490,
    name: "Honda",
    category: "medium",
    price: 3000000,
    status: false,
    start_rent_at: null,
    finish_rent_at: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1681065922152-kindpng_1002225.png?alt=media",
    createdAt: "2023-04-09T18:45:22.154Z",
    updatedAt: "2023-04-09T18:45:22.154Z",
  },
  {
    id: 2491,
    name: "Innova",
    category: "small",
    price: 5000000,
    status: false,
    start_rent_at: null,
    finish_rent_at: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1681696265034-Innova.png?alt=media",
    createdAt: "2023-04-17T01:51:05.039Z",
    updatedAt: "2023-04-17T01:51:05.039Z",
  },
  {
    id: 2492,
    name: "Pajero",
    category: "6 - 8 orang",
    price: 700000,
    status: false,
    start_rent_at: null,
    finish_rent_at: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1681696345545-Pajero.png?alt=media",
    createdAt: "2023-04-17T01:52:25.548Z",
    updatedAt: "2023-04-17T01:52:25.548Z",
  },
  {
    id: 2493,
    name: "Avanza",
    category: "4 - 6 orang",
    price: 400000,
    status: false,
    start_rent_at: null,
    finish_rent_at: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1681696392872-Avanza.png?alt=media",
    createdAt: "2023-04-17T01:53:12.875Z",
    updatedAt: "2023-04-17T01:53:12.875Z",
  },
  {
    id: 2495,
    name: "Brio",
    category: "2 - 4 orang",
    price: 350000,
    status: false,
    start_rent_at: null,
    finish_rent_at: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1681696500780-Brio.png?alt=media",
    createdAt: "2023-04-17T01:55:00.783Z",
    updatedAt: "2023-04-17T01:55:00.783Z",
  },
  {
    id: 2497,
    name: "Alphard",
    category: "6 - 8 orang",
    price: 1000000,
    status: false,
    start_rent_at: null,
    finish_rent_at: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1681696583034-Alphard.png?alt=media",
    createdAt: "2023-04-17T01:56:23.035Z",
    updatedAt: "2023-04-17T01:56:23.035Z",
  },
  {
    id: 2499,
    name: "Terios",
    category: "4 - 6 orang",
    price: 500000,
    status: false,
    start_rent_at: null,
    finish_rent_at: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1681696668824-Terios.png?alt=media",
    createdAt: "2023-04-17T01:57:48.826Z",
    updatedAt: "2023-04-17T01:57:48.826Z",
  },
  {
    id: 2500,
    name: "Camry",
    category: "2 - 4 orang",
    price: 1000000,
    status: false,
    start_rent_at: null,
    finish_rent_at: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1681696700756-Camry.png?alt=media",
    createdAt: "2023-04-17T01:58:20.757Z",
    updatedAt: "2023-04-17T01:58:20.757Z",
  },
  {
    id: 2496,
    name: "Mobilio",
    category: "4 - 6 orang",
    price: 5000000,
    status: false,
    start_rent_at: null,
    finish_rent_at: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1681696787989-Mobilio.png?alt=media",
    createdAt: "2023-04-17T01:55:38.946Z",
    updatedAt: "2023-04-17T01:59:47.990Z",
  },
  {
    id: 2494,
    name: "Ertiga",
    category: "4 - 6 orang",
    price: 400000,
    status: true,
    start_rent_at: null,
    finish_rent_at: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1681696428364-Ertiga.png?alt=media",
    createdAt: "2023-04-17T01:53:48.366Z",
    updatedAt: "2023-04-17T01:53:48.366Z",
  },
  {
    id: 2498,
    name: "Luxio",
    category: "6 - 8 orang",
    price: 500000,
    status: true,
    start_rent_at: null,
    finish_rent_at: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1681696621298-Luxio.png?alt=media",
    createdAt: "2023-04-17T01:57:01.299Z",
    updatedAt: "2023-04-17T01:57:01.299Z",
  },
];

export const SearchResult = () => {
  return (
    <>
      <Hero withRentButton={false} withSearchForm withHeroContent={false} />
      <Container className="pt-5">
        <div>Result Here</div>
        {/* <CarList results={CARS} /> */}
      </Container>
      <Footer />
    </>
  );
};
