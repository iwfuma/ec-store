// app/products/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "./AddToCartButton"; // クライアント側ボタン（次で定義）

const products = [
  {
    id: "1",
    name: "たけのこ 1kg",
    description: "[佐渡産]たけのこ1kgのセットです。",
    price: 1500,
    image: "/takenoko.jpg",
  },
  {
    id: "2",
    name: "[佐渡産]たけのこ 500g",
    description: "たけのこ500gのセットです。",
    price: 800,
    image: "/takenoko.jpg",
  },
];

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div className="mt-4 flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="mt-4">{product.description}</p>
      <p className="mt-4 text-lg font-bold text-green-500">
        ¥{product.price.toLocaleString()}
      </p>

      <AddToCartButton product={product} />
    </div>
  );
}
