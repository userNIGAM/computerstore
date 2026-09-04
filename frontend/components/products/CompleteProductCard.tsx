"use client";

import Image from "next/image";
import {
  Check,
  ShoppingCart,
  Star,
  Tag,
  Truck,
  ShieldCheck,
  Zap,
  ArrowLeft,
} from "lucide-react";
import { Product } from "@/types/products/types";
import { useRouter } from "next/navigation";

interface CompleteProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
}

export default function CompleteProductCard({
  product,
  onAddToCart,
  onBuyNow,
}: CompleteProductCardProps) {
  const router = useRouter();

  // Safe calculations with fallbacks
  const hasDiscount =
    product.originalPrice != null &&
    product.originalPrice > product.price &&
    product.discountPercentage != null &&
    product.discountPercentage > 0;

  const savings = hasDiscount ? product.originalPrice! - product.price : 0;

  return (
    <>
      <div className="mb-4">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          aria-label="Go back to products"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </button>
      </div>

      <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-75 bg-gray-100 dark:bg-gray-800 md:min-h-100">
            {hasDiscount && (
              <div className="absolute left-5 top-5 z-10 flex items-center gap-1 rounded-full bg-red-500 px-3 py-1.5 text-sm font-bold text-white">
                <Tag className="h-4 w-4" />
                {product.discountPercentage}% OFf
              </div>
            )}

            {product.featured && (
              <div className="absolute right-5 top-5 z-10 rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white">
                Featured
              </div>
            )}

            <div className="relative h-full w-full">
              <Image
                src={product.thumbnail}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  {product.brand}
                </span>

                <span className="mx-2 text-gray-300">•</span>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {product.category}
                </span>
              </div>

              {product.inStock ? (
                <span className="flex items-center gap-1 text-sm font-semibold text-green-600">
                  <Check className="h-4 w-4" />
                  In Stock
                </span>
              ) : (
                <span className="text-sm font-semibold text-red-500">
                  Out of Stock
                </span>
              )}
            </div>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              {product.name}
            </h2>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-gray-900 dark:text-white">
                  {product.rating}
                </span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {product.reviewCount} reviews
              </span>
            </div>

            <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-300">
              {product.description}
            </p>

            <div className="mt-6 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>

                {hasDiscount && (
                  <>
                    <span className="text-lg text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>

                    <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      Save ${savings}
                    </span>
                  </>
                )}
              </div>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Price includes applicable taxes
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-white">
                Key Specifications
              </h3>

              <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3">
                {Object.entries(product.specifications)
                  .slice(0, 6)
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="border-b border-gray-100 pb-2 dark:border-gray-800"
                    >
                      <p className="text-xs capitalize text-gray-500 dark:text-gray-400">
                        {key.replace(/([A-Z])/g, " $1")}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                        {String(value)}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {product.tags && product.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((tag: string, index: number) => (
                  <span
                    key={`${tag}-${index}`} // fallback for duplicate tags
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                <ShieldCheck className="h-5 w-5 text-indigo-600" />
                <div>
                  <p className="text-xs text-gray-500">Warranty</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {product.warranty}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                <Truck className="h-5 w-5 text-indigo-600" />
                <div>
                  <p className="text-xs text-gray-500">Availability</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {product.stockQuantity} available
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto grid grid-cols-2 gap-3 pt-7">
              <button
                disabled={!product.inStock}
                onClick={() => onAddToCart?.(product)}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-3 font-semibold text-gray-900 transition-all hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>

              <button
                disabled={!product.inStock}
                onClick={() => onBuyNow?.(product)}
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition-all hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label={`Buy ${product.name} now`}
              >
                <Zap className="h-5 w-5" />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
