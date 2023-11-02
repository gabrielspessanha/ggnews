import { stripe } from "@/services/stripe";
import { useSession } from 'next-auth/react'
import { NextResponse } from "next/server";

export async function GET(){
  return NextResponse.json({
    status: 200,
    message: "Tudo certo"
  })
}

export async function POST(req){
  const body = await req.json()
  try{
    const stipeCustomer = await stripe.customers.create({
      email: body.user.email,
    })
    const stripCheckoutSesssion = await stripe.checkout.sessions.
    create({
      customer: stipeCustomer.id,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        {price: 'price_1O45qYFp6NpJQLelFIe0UouN', quantity: 1}
      ],
      mode:'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL
    })
    return NextResponse.json({
      status: 200,
      sessionId: stripCheckoutSesssion.id,
    })
  }catch{
    return NextResponse.json({
      status: 405,
      message: "Method not allowed"
    })
  }

  
}