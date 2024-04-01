import React, { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'

const Carrito = () => {
  const { listaCarrito, carritoPizzas, precioPizzas, quitarPizza } = useContext(PizzaContext);
  

  
  return (
    <div>
      <span>Carrito ({carritoPizzas})</span>
      <span>Total: ${precioPizzas.toFixed(2)}</span>
    </div>
  )
}

export default Carrito