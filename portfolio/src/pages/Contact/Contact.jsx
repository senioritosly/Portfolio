import React from 'react'
import styles from './Contact.module.css'

// Imports for components
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
    return (
        <>
            <div className={styles.contact_container}>
                <NavBar />
                <div className={styles.contact_wrapper}>
                    <footer className={styles.footer}>
                        <Footer />
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Contact