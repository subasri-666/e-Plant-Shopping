import React from "react";
import CartItem from "./CartItem";

function ProductList() {
  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },
    {
      id: 2,
      name: "Aloe Vera",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1459156212016-c812468e2115"
    },
    {
      id: 3,
      name: "Money Plant",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
    }
  ];

  return (
    <div>
      <h2>Our Plants</h2>

      <div className="products-container">
        {plants.map(plant => (
          <CartItem
            key={plant.id}
            plant={plant}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
