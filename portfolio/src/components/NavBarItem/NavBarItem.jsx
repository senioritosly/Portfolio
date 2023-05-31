import React from 'react'
import styles from './NavBarItem.module.css'

const NavBarItem = ({ name, link, active }) => {
  const handleClick = () => {
    window.location.href = link
  }

  return (
    <div className={`${styles.navBarItems} ${active ? styles.navBarItems_active : ''}`} onClick={handleClick}>
      <a className={`${styles.item} ${active ? styles.item_active : ''}`} href={link}>{name}</a>
    </div>
  )
}

export default NavBarItem