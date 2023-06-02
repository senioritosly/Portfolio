import React from 'react'
import styles from './About.module.css'

// Imports for components
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'

// Imports for images
import portrait from '../../assets/images/Berserk_Sly.png'

const About = () => {

    const description = 
    `My name is Mario Cristales, but many people online know me as Sir Sly.\n
    I'm very passionate about programming, I've been focusing on all about programming since 2017.
    I have been falling in love with design and web-development this year.
    My main focus before was cyber-security, but I've realized I got something for design (as you could probably tell by my website).\n

    I'm not a person of many hobbies, yet I do have some that I enjoy doing.
    I love playing video games, I've been playing them since I was 4 years old thanks to my older brothers who introduced me to them.
    I'm also very passionate about music, I've been wanting to make songs for a while now.
    And last but not least, I am just getting into the whole dioramas and miniatures hobby, I've been wanting to get into it for a while now, but I never had the time to do so.\n
    `

    return (
        <>
            <div className={styles.about_container}>
                <NavBar />
                <div className={styles.about_wrapper}>
                    <div className={styles.about_card_wrapper}>
                        <Card title={'About Me'} content={description} img={portrait} type={'me'}/>
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