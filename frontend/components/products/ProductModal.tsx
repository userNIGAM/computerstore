"use client";

import { useRouter } from "next/navigation";
import { products } from "@/data/products/data";

export default function ProductModal({ productId }: { productId: string }) {
  const router = useRouter();

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="mx-auto mt-20 max-w-2xl rounded-xl bg-white p-8">
        <button onClick={() => router.back()} className="float-right">
          ✕
        </button>

        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p className="mt-4">NPR. {product.price}</p>

        <p className="mt-4">{product.description}</p>
      </div>
    </div>
  );
}
