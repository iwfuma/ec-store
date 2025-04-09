import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(req: Request) {
  try {
    const items = await req.json()

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'カートが空です' }, { status: 400 })
    }

    const line_items = items.map((item: any) => ({
      price_data: {
        currency: 'jpy',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price, // 例: 500円 → 500
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'https://あなたのドメイン.com/success', // ← 必要に応じて変更
      cancel_url: 'https://あなたのドメイン.com/cancel',
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Checkout Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
