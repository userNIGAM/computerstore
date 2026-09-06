"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Zap, Eye } from "lucide-react";
import { Product } from "@/types/products/types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
  onBuyNow,
}: ProductCardProps) {
  const {
    id,
    name = "Unnamed Product",
    price = 0,
    originalPrice = price,
    discountPercentage = 0,
    thumbnail = "/placeholder.png",
    inStock = false,
  } = product;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
      {/* Product details → opens intercepted modal */}
      <Link href={`/products/${id}`} className="flex flex-1 flex-col">
        <div
          className="relative w-full bg-gray-100 dark:bg-gray-800"
          style={{ height: "180px" }}
        >
          <Image
            src={thumbnail}
            alt={name}
            fill
            sizes="(max-width: 640px) 50vw, 33vw"
            onError={(e) => {
              e.currentTarget.src = "/frontend/public/hero2.jpg";
            }}
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />

          {discountPercentage > 0 && (
            <span className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold uppercase text-white shadow-sm">
              -{discountPercentage}%
            </span>
          )}

          {!inStock && (
            <span className="absolute right-2 top-2 rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-medium uppercase text-red-700 dark:bg-red-900/40 dark:text-red-300">
              Out of Stock
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-3">
          <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>

          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ${price.toFixed(2)}
            </span>

            {originalPrice > price && (
              <span className="text-xs text-gray-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Actions */}
      <div className="flex items-center gap-1.5 p-3 pt-0">
        {/* Add to cart */}
        <button
          disabled={!inStock}
          onClick={() => onAddToCart?.(product)}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
          aria-label={`Add ${name} to cart`}
        >
          <ShoppingCart className="h-4 w-4" />
        </button>

        {/* View product */}
        <Link
          href={`/products/${id}`}
          className="flex items-center justify-center rounded-md bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <Eye className="mr-1 h-3.5 w-3.5" />
          View
        </Link>

        {/* Buy now */}
        <button
          disabled={!inStock}
          onClick={() => onBuyNow?.(product)}
          className="flex items-center justify-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Zap className="mr-1 h-3.5 w-3.5" />
          Buy
        </button>
      </div>
    </article>
  );
}
