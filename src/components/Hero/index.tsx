import Link from 'next/link'
import styles from './styles.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        
      <div className={styles.content}>
        <h1 className={styles.titleH1}>
          Elimine as dúvidas e garanta agora mesmo o seu <span>certificado digital!</span>
        </h1>
        <p className={styles.p}>
          Receba seu certificado digital em minutos, sem burocracia. Entrega imediata, validade nacional e suporte especializado. Simples, rápido e reconhecido em todo o Brasil.
        </p>
        <Link href={"#VALORES"}>
        <button className={styles.btt}>Consultar Preços</button>
        </Link>
      </div>

      <div className={styles.imageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero.png" alt="Homem com tablet" className={styles.image} />
      </div>
      </div>
    </section>
  )
}
