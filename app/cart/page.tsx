'use client'

import { useCart } from '../context/CartContext'
import { useRouter } from 'next/navigation'

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart()
  const router = useRouter()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartItems),
    })
  
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url // Stripe Checkout へリダイレクト
    } else {
      alert('決済ページの作成に失敗しました。')
    }
  }
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">カート</h1>
      {cartItems.length === 0 ? (
        <p>カートは空です。</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-lg">{item.name}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    ＋
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p>¥{item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  削除
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6 space-y-4">
            <p className="text-xl font-bold">合計: ¥{total.toLocaleString()}</p>

            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
            >
              購入する
            </button>

            <br />

            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              カートを空にする
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
