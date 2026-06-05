import React from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="app">
      <header>
        <h1>🌱 e-Plant Shopping</h1>
      </header>

      <AboutUs />

      <ProductList />
    </div>
  );
}

export default App;
