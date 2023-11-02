'use client'
import styles from './styles.module.scss'
import { api } from '@/services/api'
import { getStripeJs } from '@/services/stripe-js'
import { useSession, signIn } from 'next-auth/react'


export default function SubscribeButton(){
  const { data: session, status } = useSession()
  async function handleSubscribe(){
    if(!session){
      signIn('github')
      return
    }
    try{
      const response = await api.post("/subscribe",session)
      console.log(response)
      const{ sessionId } =response.data;
      const stripe = await getStripeJs()
      console.log({sessionId})

      stripe?.redirectToCheckout({sessionId})
    }catch(error){
     console.log(error)
    }
  }
  return(
    <button
      type='button'
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subcribe Now
    </button>
  )
}