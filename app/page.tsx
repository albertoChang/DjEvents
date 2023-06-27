import Image from 'next/image'
import styles from './styles/page.module.css'

export default function Home() {
  return (
    <main >
      <div className={styles.container}>
        <div>
            <a href='./'
             >
              <p className={styles.title}>
                Inmobiliaria JBR SAC
              </p>
            </a>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Proyecto Valdelomar Park <span>-&gt;</span>
            </h2>
            <p>Pueblo Libre</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Proyecto Génesis <span>-&gt;</span>
            </h2>
            <p>Pueblo Libre</p>
          </a>

        </div>
      </div>
    </main>
  )
}
