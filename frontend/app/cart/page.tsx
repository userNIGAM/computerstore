"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart } = useCart();
  return (
    <div>
      <h2>Cart Page</h2>
      {cart.map((item: any) => (
        <div key={item.id}>
          <h2>{item.product.name}</h2>
          <h2>NPR.{item.product.price}</h2>
        </div>
      ))}
    </div>
  );
}
