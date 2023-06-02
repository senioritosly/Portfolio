import React from 'react'
import styles from './Card.module.css'

// Imports for images

const Card = ({ title, content, img, type }) => {
  const formattedContent = content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))

  return (
    <div className={styles.card_container}>
      <div className={styles.card_content}>
        <div className={styles.main_text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{formattedContent}</p>
        </div>
        <div className={`${styles[`portrait_container--${type}`]}`}>
          <img src={img} alt="portrait" className={`${styles[`portrait--${type}`]}`} />
        </div>
      </div>
    </div>
  )
}

export default Card