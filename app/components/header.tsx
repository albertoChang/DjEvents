import Link from 'next/link'
import styles from '../styles/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
            DJ Events
        </Link>
        <nav>
          <ul>
            <li>
              <Link href='/events'>
                Events
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
