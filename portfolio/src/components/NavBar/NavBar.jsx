import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './NavBar.module.css'
import mascot from '../../assets/Sir_Sly_Mascot.svg'
import NavBarItem from '../NavBarItem/NavBarItem'
import { useState, useEffect } from 'react'

const NavBar = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const notHome = location.pathname != '/'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <div className={`${styles.navbar} ${isScrolled ? styles['navbar--scrolled'] : ''} ${notHome ? styles['navbar--notHome'] : ''}`}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_logo}>
          <a className={styles.logo} href="/">
            <img src={mascot} alt="Sir Sly Mascot" />
          </a>
        </div>
        <div className={styles.menu}>
          {menu.map((item) => (
            <NavBarItem name={item.name} link={item.link} active={location.pathname === item.link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar