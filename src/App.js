import "./App.css";
import Header from "./Ema_components/Header/Header";
import Shop from "./Ema_components/Shop/Shop";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import OrderPre from "./Ema_components/Order_Preview/OrderPre";

// import Country from "./Components/Country/Country";
// import Navbar from "./Components/Navbar/Navbar";
/*  <Navbar></Navbar>
 <Country></Country>  */

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <OrderPre></OrderPre>
      <Shop></Shop>
    </div>
  );
}

export default App;
