import React from 'react'
import styles from './Projects.module.css'

// Imports for components
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'

const Projects = () => {
    return (
        <>
            <div className={styles.projects_container}>
                <NavBar />
                <div className={styles.projects_wrapper}>
                    <footer className={styles.footer}>
                        <Footer />
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Projects