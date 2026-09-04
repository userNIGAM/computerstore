import CompleteProductCard from "@/components/products/CompleteProductCard";
import { products } from "@/data/products/data";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  //destructure the id from params
  const { id } = await params;

  // find if the id match any product
  const product = products.find((product) => product.id === id);

  // check if there is product with the id
  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div>
      <CompleteProductCard product={product} />
    </div>
  );
}
