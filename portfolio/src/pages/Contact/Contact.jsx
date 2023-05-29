import React from 'react'
import styles from './Contact.module.css'
import NavBar from '../../components/NavBar/NavBar'

const Contact = () => {
    return (
        <>
            <div className={styles.contact_container}>
                <NavBar />
            </div>
        </>
    )
}

export default Contact