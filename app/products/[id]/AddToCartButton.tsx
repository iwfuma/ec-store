'use client'

import { useCart } from '../../context/CartContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AddToCartButton({ product }: { product: { id: string; name: string; price: number } }) {
  const { addToCart } = useCart()
  const router = useRouter()
  const [message, setMessage] = useState<string | null>(null)

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 })
    setMessage(`${product.name} をカートに追加しました`)
    setTimeout(() => setMessage(null), 2000) // 2秒後にメッセージを消す
  }

  const handleGoToCart = () => {
    router.push('/cart')
  }

  return (
    <div className="mt-6 space-x-4">
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        カートに追加
      </button>
      <button
        onClick={handleGoToCart}
        className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300"
      >
        カートへ進む
      </button>

      {message && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
          {message}
        </div>
      )}
    </div>
  )
}
