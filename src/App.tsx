import "./App.css";
import Headr from "./Header/Header";
import CaroMovies from "./Carousel/CaroMovies";
import Footr from "./Footer/Footer";

function App() {
  const nameList = [
    {
      title: "hello",
      links: [
        { label: "Hi", link: "meow" },
        { label: "Hi", link: "meow" },
      ],
    },
    {
      title: "hello",
      links: [{ label: "Hi", link: "meow" }],
    },
  ];

  return (
    <div>
      <Headr />
      <CaroMovies />
      <Footr data={nameList} />
    </div>
  );
}

export default App;
