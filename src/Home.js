import './App.css';
import CarouselsList from "./components/CarouselsList";

function Home({carousels}) {
  return (
    <div className="App">
      <CarouselsList carousels={carousels} />
    </div>
  );
}

export default Home;
