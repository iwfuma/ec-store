import Link from "next/link";
import Image from "next/image";

export default function ProductList() {
  const products = [
    {
      id: "1",
      name: "たけのこ 1kg",
      price: 1500,
      image: "/takenoko.jpg",
    },
    {
      id: "2",
      name: "たけのこ 500g",
      price: 800,
      image: "/takenoko.jpg",
    },
  ];

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">商品一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded"
            />
            <h2 className="text-xl font-bold mt-4">{product.name}</h2>
            <p className="text-lg text-green-500">¥{product.price}</p>
            {/* 詳細へ行くボタン */}
            <Link
              href={`/products/${product.id}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              詳細を見る
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
