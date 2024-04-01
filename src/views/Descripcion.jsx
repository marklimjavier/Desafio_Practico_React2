import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

const Descripcion = () => {
  const location = useLocation();
  const { agregarPizza, pizza } = useContext(PizzaContext)
  const { id, desc, name} = useParams();
  const { img, ingredients, price } = location.state;

  //me di cuenta de dos cosas, primero accidentalmente en la actividad anterior me habia saltado el uso de una url noAmigable
  //(o lo dieron en clase y no preste atencion) en fin, me toco investigar y aprender del uso del useLocation total es
  //parte de react router dom asi que algun dia debia aprenderlo, ahora si teniamos un metodo para pasar simplemente por
  //useParams parametros de Url no amigables estare atento al slack porque me puse a inventar demasiado sin resultado
  //con enconde y decode el url, parseint para intentar mantenerlo intacto, de todo, en fin añadi a mi repertorio el
  //useLocation, a la final si es emocionante tener retos como este, veo este parametro no amigable como una trampa
  //para los que no investiguen 😂 igual me obligo hasta ver videos cosa que no suelo hacer, me encanto.
  //y si me ve algo perdido o distante desde la tutoria es que quiero hacerlo por mi mismo, ver su tutoria es como hacer trampa
  //al ver su codigo mi cabeza se desvia y me dice porque investigar si ahi lo tienes pero ya veo que estos comentarios
  //son los que se deberian hacer en su tutoria (asi habria tenido el useLocation) pero el trabajo no me deja 🥲

  return (
    <div>
      <h2>UN POCO DE NUESTRO SECRETO</h2>
      <div className="descripcion">
        <img className="imgDescripcion" src={img} alt="pizza" />
        <div className="contenidoDescripcion">
          <h2>{name}</h2>
          <p>Descripción: {desc}</p>
          <p>Ingredientes:</p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <p key={index}>🍕{ingredient}</p>
            ))}
          </ul>
          <div className="botones" >
          <p>Precio: {price}</p>
          <button onClick={() => agregarPizza({ id, desc, name, img, ingredients, price })}>Añadir👨‍🍳</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Descripcion;
