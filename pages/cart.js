import { useRouter } from "next/router";

const products = {
  1: { name: "山のたけのこ", price: 1200 },
  2: { name: "里のたけのこ", price: 1000 },
};

export default function Cart() {
  const router = useRouter();
  const { product } = router.query;

  if (!product || !products[product]) {
    return <p className="p-6">カートが空です。</p>;
  }

  const selectedProduct = products[product];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">カート</h1>
      <div className="border p-4 mt-4 rounded">
        <h2 className="text-lg font-semibold">{selectedProduct.name}</h2>
        <p className="text-green-600 font-bold">¥{selectedProduct.price}</p>
      </div>
      <a href="/checkout" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded">
        購入手続きへ
      </a>
    </div>
  );
}
