import React from 'react'
import AccordionExpandIcon from './AccordionExpandIcon'
import styles from './styles.module.css'
import Image from 'next/image'

export default function FAQ() {
  return (
    <section className={styles.sectionMain} id='COMO FUNCIONA'>
      <div className={styles.divIMG}>
        <Image alt='gz' src='/fre.png' width={370} height={500} className={styles.img}/>
      </div>
      <AccordionExpandIcon/>
    </section>
  )
}
