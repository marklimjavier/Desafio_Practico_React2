import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState();
  const [listaCarrito, setListaCarrito] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get("pizzas.json");
        setPizzas(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchPizzas();
  }, []);

const quitarPizza = (pizzaIdToRemove) => {
  const actualizarCarrito = listaCarrito.filter(
    (pizza) => pizza.id !== pizzaIdToRemove
  );
  setListaCarrito(actualizarCarrito);
};
  const agregarPizza = (pizza) => {
    setListaCarrito((prevPizzas) => [...prevPizzas, pizza]);
  };
const limpiarCarrito = () => setListaCarrito([])
  const carritoPizzas = listaCarrito.reduce((total, pizza) => total + 1, 0);
  const precioPizzas = listaCarrito.reduce(
    (total, pizza) => total + pizza.price,
    0
  );

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        listaCarrito,
        limpiarCarrito,
        quitarPizza,
        agregarPizza,
        precioPizzas,
        carritoPizzas,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
