"use client";

import { useCart } from "@/app/context/CartContext";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products/data";

export default function ProductsPage() {
  const { cart, setCart } = useCart();
  const handleAddToCart = (product: (typeof products)[number]) => {
    console.log("Add to cart:", product);
    setCart([...cart, { product }]);
  };

  const handleBuyNow = (product: (typeof products)[number]) => {
    console.log("Buy now:", product);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Computer Parts</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        ))}
      </div>
    </main>
  );
}
