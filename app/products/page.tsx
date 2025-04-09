'use client'

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function ProductList() {
  const { addToCart } = useCart();
  const [message, setMessage] = useState<string | null>(null);

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

  const handleAddToCart = (product: { id: string; name: string; price: number }) => {
    addToCart({
      ...product,
      quantity: 1,
    });

    setMessage(`${product.name} をカートに追加しました`);
    setTimeout(() => setMessage(null), 2000); // 2秒後に消える
  };

  return (
    <div className="p-6 text-center relative">
      <h1 className="text-3xl font-bold mb-6">商品一覧</h1>

      <div className="mb-4 text-right max-w-4xl mx-auto">
        <Link href="/cart" className="text-blue-500 hover:underline">
          🛒 カートを見る
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            <p className="text-lg text-green-500">¥{product.price.toLocaleString()}</p>
            <div className="mt-4 space-x-2">
              <Link
                href={`/products/${product.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                詳細を見る
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                カートに追加
              </button>
            </div>
          </div>
        ))}
      </div>

      {message && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
          {message}
        </div>
      )}
    </div>
  );
}
