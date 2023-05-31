import React from 'react'
import styles from './About.module.css'

// Imports for components
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

const About = () => {
    return (
        <>
            <div className={styles.about_container}>
                <NavBar />
                <div className={styles.about_wrapper}>
                    <footer className={styles.footer}>
                        <Footer />
                    </footer>
                </div>
            </div>
        </>
    )
}

export default About