import React from 'react'
import styles from './Form.module.css'

// Imports for images
import glob1 from './../../assets/images/eating_glob_red.svg'
import glob2 from './../../assets/images/eating_glob_purple.svg'

const Form = () => {
    return (
        <div className={styles.form_container}>
            <div className={styles.form}>
                <img src={glob1} alt="globe" className={styles.glob_red} />
                <img src={glob2} alt="globe" className={styles.glob_purple} />
                <h1 className={styles.form_title}>Get in touch</h1>
                <p className={styles.form_description}>Fill out the form below and I'll get back to you as soon as possible.</p>
                <form className={styles.grid_form}>
                    <div className={styles.grid_row}>
                        <div className={styles.form_group}>
                            <label className={styles.label} for="name">Your Name</label>
                            <input className={styles.input} type="text" name="name" placeholder="Sir Sly" />
                        </div>
                        <div className={styles.form_group}>
                            <label className={styles.label} for="email">Your Email</label>
                            <input className={styles.input} type="text" name="email" placeholder="sirsly073@gmail.com" />
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <label className={styles.label} for="message">Message</label>
                        <textarea className={styles.textarea} type="text" name="message" placeholder="Your message" />
                    </div>
                    <input type="submit" value="Send" className={styles.btn} />
                </form>
            </div>
        </div>
    )
}

export default Form