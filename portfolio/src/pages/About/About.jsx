import React from 'react'
import styles from './About.module.css'

// Imports for components
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'

// Imports for images
import portrait from '../../assets/images/Berserk_Sly.png'

const About = () => {
    return (
        <>
            <div className={styles.about_container}>
                <NavBar />
                <div className={styles.about_wrapper}>
                    <div className={styles.about_card_wrapper}>
                        <Card title={'About Me'} content={'My name is Mario Cristales, a rather odd surname, yeh?'} img={portrait} type={'me'}/>
                    </div>
                    <footer className={styles.footer}>
                        <Footer />
                    </footer>
                </div>
            </div>
        </>
    )
}

export default About