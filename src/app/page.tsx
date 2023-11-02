import styles from './home.module.scss'
import Image from 'next/image'
import hero from '@/../public/images/hero.svg'
import { stripe } from '@/services/stripe'
import SubscribeButton from '@/components/SubscribeButton'

export const revalidate = 60 * 60 * 24 //24 hours

export default async function Home() {
  const price = await stripe.prices.retrieve('price_1O45qYFp6NpJQLelFIe0UouN')


  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount ?price.unit_amount / 100 : 0)
  }

  return (
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏Hey, Welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get acess to all the publications <br />
          <span>for {product.amount} month</span>
        </p>
        <SubscribeButton/>
      </section>

      <Image 
        src={hero}
        sizes="100vw"
        alt="Girl coding" 
      />
    </main>
  )
}