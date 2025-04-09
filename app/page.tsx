import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to Sado shopping</h1>
      <p className="mt-4"></p>
      <Link
        href="/products"
        className="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        商品を見る
      </Link>
    </div>
  );
}
