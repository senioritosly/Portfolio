import React from 'react'
import styles from './NavBarItem.module.css'

const NavBarItem = ({ name, link, active }) => {
  return (
    <div className={`${styles.navBarItems} ${active ? styles.navBarItems_active : ''}`}>
      <a className={`${styles.item} ${active ? styles.item_active : ''}`} href={link}>{name}</a>
    </div>
  )
}

export default NavBarItem