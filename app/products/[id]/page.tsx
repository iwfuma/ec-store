"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams(); // URLパラメータ（商品ID）

  // 仮のデータ（実際にはAPIやデータベースから取得します）
  const products = [
    {
      id: "1",
      name: "たけのこ 1kg",
      description: "新鮮なたけのこ1kgのセットです。",
      price: 1500,
      image: "/takenoko.jpg", // public/takenoko.jpg
    },
    {
      id: "2",
      name: "たけのこ 500g",
      description: "新鮮なたけのこ500gのセットです。",
      price: 800,
      image: "/takenoko.jpg",
    },
  ];

  // 商品IDに対応する商品データを取得
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center text-red-500">商品が見つかりませんでした。</div>;
  }

  // 購入ボタンの処理（実際には購入画面に遷移するなど）
  const handlePurchase = () => {
    alert(`購入処理を開始します: ${product.name}`);
    // ここで購入ページに遷移したり、購入処理を開始するなどの処理を追加します
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div className="mt-4 flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={500} // 適切なサイズを指定
          height={500} // 適切なサイズを指定
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="mt-4">{product.description}</p>
      <p className="mt-4 text-lg font-bold text-green-500">¥{product.price}</p>

      {/* 購入ボタン */}
      <button
        onClick={handlePurchase} // クリック時に購入処理を実行
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
      >
        購入
      </button>
    </div>
  );
}
