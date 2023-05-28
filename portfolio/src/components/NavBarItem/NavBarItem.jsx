import React from 'react'
import styles from './NavBarItem.module.css'

const NavBarItem = ({ name, link, color }) => {
  return (
    <div className={styles.navbarItems}>
        <a className={`${styles.item} ${styles[`item_${color}`]}`} href={link}>{name}</a>
    </div>
  )
}

export default NavBarItem