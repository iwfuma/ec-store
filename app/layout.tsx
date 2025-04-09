import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CartProvider } from './context/CartContext'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'たけのこショップ',
  description: '佐渡産たけのこのオンラインストア',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <CartProvider>
          {/* ヘッダー */}
          <header className="bg-green-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">
              <Link href="/">たけのこショップ</Link>
            </h1>
            <nav className="space-x-4">
              <Link href="/" className="hover:underline">ホーム</Link>
              <Link href="/products" className="hover:underline">商品一覧</Link>
              <Link href="/cart" className="hover:underline">カート</Link>
            </nav>
          </header>

          {/* メイン */}
          <main className="min-h-screen bg-gray-50">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
