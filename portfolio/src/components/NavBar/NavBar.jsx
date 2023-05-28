import React from 'react'
import { useEffect } from 'react'
import styles from './NavBar.module.css'
import mascot from '../../assets/Sir_Sly_Mascot.svg'
import NavBarItem from '../NavBarItem/NavBarItem'

const NavBar = () => {

  const menu = [
    {
      name: 'Projects',
      link: '/projects'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
  ]

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_logo}>
          <a className={styles.logo} href="/">
            <img src={mascot} alt="Sir Sly Mascot" />
          </a>
        </div>
        <div className={styles.menu}>
          {menu.map((item) => (
            <NavBarItem name={item.name} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar