import { useState } from "react";

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item({ name, description, updateCart, initialStock }) {
  
  const [currentStock, setStock] = useState(initialStock)

  const onClickAdd = () => {
    if (currentStock > 0) {
      setStock(currentStock - 1)
      updateCart()
    }
  };

  return (
    <div className="producto">
      <h3>{name}</h3>
      <p>{description}</p>
      <h5>
        En stock: 
        {
            currentStock < 1 ? (
                <span className="textoRojo"> Agotado</span>
            ) : (
                <span>{currentStock}</span>
            )
        } 
      </h5>
      {
        currentStock > 0 ? (
            <button onClick={() => onClickAdd()}>COMPRAR</button>
            ) : (
            <button disabled>SIN STOCK</button>
            )
      }
    </div>
  );
}
