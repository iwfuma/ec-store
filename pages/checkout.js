export default function Checkout() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">決済ページ</h1>
        <p className="mt-4">Stripe決済の準備中...</p>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
          Stripeで支払う（準備中）
        </button>
      </div>
    );
  }
  