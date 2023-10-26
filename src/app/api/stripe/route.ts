import { stripe } from "@/services/stripe";
import { NextResponse } from "next/server";


export async function GET(){
  const price = await stripe.prices.retrieve('price_1O45qYFp6NpJQLelFIe0UouN', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount)
  };

  return {
    props: {
      nome: 'Gabriel'
    }
  }
}