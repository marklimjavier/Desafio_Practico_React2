import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { PizzaContext } from "../context/PizzaContext";
import Carrito from "./Carrito";

const TotalPagar = () => {
  const { listaCarrito, carritoPizzas, quitarPizza, limpiarCarrito } = useContext(PizzaContext);
  const cuentaPizza = {};
  listaCarrito.forEach((pizza) => {
    cuentaPizza[pizza.id] = (cuentaPizza[pizza.id] || 0) + 1;
  });
  const identificadorPizza = [...new Set(listaCarrito.map((pizza) => pizza.id))];
  const eliminarTodasLasPizzas = () => {
    limpiarCarrito([]);}

  return (
    <div>
      <h1>TU PEDIDO</h1>
      <div className="tarjetaCompra">
        <h2>Detalles del pedido</h2>
        {identificadorPizza.map((pizzaId) => {
          const pizza = listaCarrito.find((pizza) => pizza.id === pizzaId);
          return (
            <Card className="card3" key={pizzaId}>
              <div className="tarjeta4" >
              <img className="imagenCompra" src={pizza.img} alt={pizza.name} />
              <p className="nombre">{pizza.name}</p>
              </div>

              <section className="tarjeta4" >
                <p>Price: ${pizza.price}</p>
                <button className="botonCompra" onClick={() => quitarPizza(pizza.id)}>
                  Eliminar Orden
                </button>
                {cuentaPizza[pizza.id] > 1 && (
                  <p>Cantidad: {cuentaPizza[pizza.id]}</p>
                )}
              </section>
            </Card>
          );
        })}
        <div className="total">
        <Carrito/>
        </div>
        <button className="botonCompra2" onClick={eliminarTodasLasPizzas} >ir a pagar</button>
      </div>
    </div>
  );
};

export default TotalPagar;