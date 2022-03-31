import React from "react";
import Header from "./components/Header";
import "./assets/sass/style.scss";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter> 
    <div>
      <Header />
      <ItemListContainer saludo="Bienvendios a la tienda online de El Electrisista" />
      <ItemDetailContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
