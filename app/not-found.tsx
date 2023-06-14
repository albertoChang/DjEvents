import Link from 'next/link';
import styles from './styles/not-found.module.css';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: '404 - Page not found',
  }
  

export default function NotFoundPage() {
  return (
    <div className={styles.error}>
        <h1>404</h1>
        <h4>Sorry, nothing here</h4>
        <Link href='/'>Go back home</Link>
    </div>
  )
}
