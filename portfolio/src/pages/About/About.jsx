import React from 'react'
import styles from './About.module.css'
import NavBar from '../../components/NavBar/NavBar'

const About = () => {
    return (
        <>
            <div className={styles.about_container}>
                <NavBar />
            </div>
        </>
    )
}

export default About