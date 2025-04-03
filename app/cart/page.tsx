"use client";

import { useState } from "react";
import Image from "next/image";

export default function CartPage() {
  // 仮のカートデータ（本来はコンテキストやデータベースから取得）
  const [cart, setCart] = useState([
    {
      id: "1",
      name: "たけのこ 1kg",
      price: 1500,
      quantity: 1,
      image: "/takenoko.jpg",
    },
    {
      id: "2",
      name: "たけのこ 500g",
      price: 800,
      quantity: 2,
      image: "/takenoko.jpg",
    },
  ]);

  // 合計金額を計算
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // 数量変更関数
  const updateQuantity = (id: string, amount: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // カートから削除
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">カート</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">カートは空です。</p>
      ) : (
        <div className="grid gap-6">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg flex items-center gap-4 shadow-lg">
              <Image src={item.image} alt={item.name} width={100} height={100} className="rounded" />
              <div className="flex-1 text-left">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-lg text-green-500">¥{item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    −
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    ＋
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                削除
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 合計金額 */}
      <div className="mt-6 text-lg font-bold">合計: ¥{totalPrice}</div>

      {/* 購入ボタン（Stripe決済に接続予定） */}
      {cart.length > 0 && (
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          購入する
        </button>
      )}
    </div>
  );
}
