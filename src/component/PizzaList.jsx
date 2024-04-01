import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { PizzaContext } from '../context/PizzaContext';
import { NavLink, useNavigate } from 'react-router-dom';

const PizzaList = () => {
  const { pizzas, agregarPizza } = useContext(PizzaContext);
  const miraMiPizza = useNavigate();

  const descripcionPizza = (pizzaId, pizzaImg, pizzaDesc, pizzaIngredients, pizzaName, pizzaPrice) => {
    miraMiPizza(`/Pizza/${pizzaId}/${pizzaDesc}/${pizzaName}`, { 
      state: { 
        img: pizzaImg, 
        ingredients: pizzaIngredients,
        price: pizzaPrice,
      } 
    });
  };
  //Todo el comentario esta en descripcion, me tomo mucho tiempo hacer esto pero ahora el segundo reto es poder armarlo en menos de una hora

  return (
    <div>
      <h1>HECHAS CON TODO EL AMOR DEL HOGAR</h1>
      <div className="tarjeta">
        {pizzas.map((pizza) => (
          <Card className="card2" key={pizza.id}>
            <img className="imagen" src={pizza.img} alt={pizza.name} />
            <p className="nombre">{pizza.name}</p>
            <section>
              <p>Price: ${pizza.price}</p>
              <ul>
                {pizza.ingredients.map((ingredient, index) => (
                  <p key={index}>🍕{ingredient}</p>
                ))}
              </ul>
              <div className="botones">
              <button onClick={() => descripcionPizza(pizza.id, pizza.img, pizza.desc, pizza.ingredients, pizza.name, pizza.price)}>Ver Mas 👀</button>
              <button onClick={() => agregarPizza(pizza)}>Añadir👨‍🍳</button>
              </div>
            </section>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;