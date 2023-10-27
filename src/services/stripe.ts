import Stripe from 'stripe'
import { version } from '../../package.json'

export const stripe = new Stripe(
  'sk_test_51O45e1Fp6NpJQLelva6jIwosGSHb8wsZH4kUKtymssLobnoRYhjYpUTdwnIXez5THUo71YjEx5Bo8GDXxd3FvEW300l1XmctLA', 
  {
    apiVersion: '2023-10-16',
    appInfo: {
      name: 'ggnews',
      version: "0.1.0"
    }
  }
)