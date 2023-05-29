import React from 'react'
import styles from './WelcomeBanner.module.css'
import mascot from '../../assets/Sir_Sly_Mascot_Circle.svg'

const WelcomeBanner = () => {
  return (
    <div className={styles.background_container}>
      <div className={styles.main_section_container}>
        <h1 className={styles.title}>WELCOME</h1>
        <img src={mascot} alt="mascot" className={styles.mascot} />
        <h1 className={styles.title}>EVERYONE</h1>
      </div>
    </div>
  )
}

export default WelcomeBanner