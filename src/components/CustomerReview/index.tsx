import React from 'react'
import styles from './styles.module.css'
import Rating from '@mui/material/Rating';
import SwiperComponent from './Swiper';

export default function CustomerReview() {
  return (
    <section className={styles.sectionMain} >
        <div className={styles.divMain}>

        <Rating name="size-medium" defaultValue={5} readOnly/>
        <h2 className={styles.h2}><span>Ajudamos pessoas</span>  <br/> a simplificar sua certificação.</h2>
        <SwiperComponent/>
        </div>
    </section>
  )
}
