import "./App.css";
import Nav from "./Nav.js";
import RitualItems from "./RitualItems";
import Dailyessential from "./Dailyessential ";
import "./Item1";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Products from "./Products";
import Item3 from "./Item3";
import Testimonial from "./Testimonial";
import Item4 from "./Item4";

function App() {
  return (
    <div className="App">
      <Nav />
      <img className="ritual__img" src="ritual1.png" alt="" />
      <RitualItems />
      <Dailyessential />
      <Item1 />
      <Item2 />
      <Products />
      <Item3 />
      <Testimonial />
      <Item4 />
    </div>
  );
}

export default App;
