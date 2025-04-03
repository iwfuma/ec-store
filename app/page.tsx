export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">たけのこ販売サイトへようこそ！</h1>
      <p className="mt-4">新鮮な佐渡のたけのこをお届けします。</p>
      <a href="/products" className="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded">
        商品を見る
      </a>
    </div>
  );
}
