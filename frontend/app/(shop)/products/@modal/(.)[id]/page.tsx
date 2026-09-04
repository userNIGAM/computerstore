import ProductModal from "@/components/products/ProductModal";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductModalPage({ params }: Props) {
  const { id } = await params;

  return <ProductModal productId={id} />;
}
