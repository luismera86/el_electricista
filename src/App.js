import React from "react";
import Header from "./components/Header";
import "./assets/sass/style.scss";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer saludo="Bienvendios a la tienda online de El Electrisista" />
    </div>
  );
}

export default App;
