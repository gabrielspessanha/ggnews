import Link from 'next/link'
import styles from './styles.module.scss'
import Logo from '@/../public/images/logo.svg'
import { SignInButton } from '../SignInButton'
export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={Logo} alt="ggnews" />

        <nav>
          <Link className={styles.active} href={"/"}>Home</Link>
          <Link href={"/Posts"}>Posts</Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}