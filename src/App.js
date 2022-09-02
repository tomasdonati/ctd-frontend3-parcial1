import { useState } from "react";
import Listado from "./components/Listado";
import Cabecera from "./components/Cabecera";

// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {

  const [count, setCounter] = useState(0)

  function addToCart() {
    setCounter(count + 1)
  }

  return (
    <div className="App">
      <Cabecera counter={count}/>
      <Listado updateCart={addToCart} />
    </div>
  );
}

export default App;
