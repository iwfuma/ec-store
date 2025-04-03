// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Checkout() {
//   const router = useRouter();

//   // 仮のデータ（実際にはカート情報や選択した商品データをここで使用します）
//   const product = {
//     name: "たけのこ 1kg",
//     description: "新鮮なたけのこ1kgのセットです。",
//     price: 1500,
//     image: "/takenoko.jpg", // 商品画像
//   };

//   // フォームの状態管理
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   // フォーム送信処理
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // 実際の購入処理（決済サービスのAPI呼び出し等）はここで行います
//     alert("購入手続きが完了しました！");

//     // ここで購入確認後、ありがとう画面などに遷移する場合
//     router.push("/thank-you");
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold text-center">購入手続き</h1>
      
//       {/* 商品情報 */}
//       <div className="mt-6 flex items-center justify-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-32 h-32 object-cover rounded-lg shadow-md"
//         />
//         <div className="ml-4">
//           <h2 className="text-xl font-semibold">{product.name}</h2>
//           <p className="text-gray-600">{product.description}</p>
//           <p className="mt-2 text-lg font-bold text-green-500">¥{product.price}</p>
//         </div>
//       </div>

//       {/* 購入者情報入力フォーム */}
//       <form onSubmit={handleSubmit} className="mt-8 space-y-4">
//         <div>
//           <label htmlFor="name" className="block text-sm font-semibold">
//             お名前
//           </label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full p-3 mt-1 border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label htmlFor="address" className="block text-sm font-semibold">
//             住所
//           </label>
//           <input
//             type="text"
//             id="address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//             className="w-full p-3 mt-1 border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-semibold">
//             メールアドレス
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full p-3 mt-1 border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label htmlFor="phone" className="block text-sm font-semibold">
//             電話番号
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//             className="w-full p-3 mt-1 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* 支払い方法などの選択（仮） */}
//         <div>
//           <label htmlFor="payment" className="block text-sm font-semibold">
//             支払い方法
//           </label>
//           <select
//             id="payment"
//             className="w-full p-3 mt-1 border border-gray-300 rounded-md"
//           >
//             <option>クレジットカード</option>
//             <option>銀行振込</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="mt-6 w-full bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
//         >
//           購入する
//         </button>
//       </form>
//     </div>
//   );
// }
