import Stripe from 'stripe'
// Verifique se a variável de ambiente está definida e é uma string
if (!process.env.STRIPE_API_KEY || typeof process.env.STRIPE_API_KEY !== 'string') {
  throw new Error('A variável de ambiente STRIPE_API_KEY não está definida ou não é uma string.');
}

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY, 
  {
    apiVersion: '2023-10-16',
    appInfo: {
      name: 'ggnews',
      version: "0.1.0"
    }
  }
)