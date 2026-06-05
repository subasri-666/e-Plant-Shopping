import React from "react";

function CartItem({ plant }) {
  return (
    <div className="product-card">
      <img
        src={plant.image}
        alt={plant.name}
      />

      <h3>{plant.name}</h3>

      <p>₹{plant.price}</p>

      <button>
        Add to Cart
      </button>
    </div>
  );
}

export default CartItem;
