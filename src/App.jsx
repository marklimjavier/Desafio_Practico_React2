
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./views/Home";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";
import { Route, Routes } from "react-router-dom";
import Descripcion from "./views/Descripcion";
import TotalPagar from "./views/TotalPagar";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/Pizza/:id/:desc/:name" element={<Descripcion />}></Route>
        <Route path="/TotalPagar" element={<TotalPagar />}></Route>
      </Routes>
    </>
  );
}

export default App;
