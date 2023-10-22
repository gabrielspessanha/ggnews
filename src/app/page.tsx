import styles from './home.module.scss'
import Image from 'next/image'
import hero from '@/../public/images/hero.svg'

export default function Home() {
  return (
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏Hey, Welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get acess to all the publications <br />
          <span>for $9.90 month</span>
        </p>

      </section>

      <Image 
        src={hero}
        width={600}
        height={600}
        alt="Girl coding" 
      />
    </main>
  )
}
