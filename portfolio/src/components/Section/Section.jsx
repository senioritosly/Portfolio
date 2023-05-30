import React from 'react'
import styles from './Section.module.css'
import glob from './../../assets/images/eating_glob_purple.svg'

const Section = () => {
    return (
        <div className={styles.section_container}>
            <div className={styles.main_section}>
                <img src={glob} alt="globe" className={styles.glob} />
                <div className={styles.main_text}>
                    <h1 className={styles.title}>Hello.</h1>
                    <h1 className={styles.title}>I'm Mario.</h1>
                    <span className={styles.span}>I am majoring in comp sci, <br /> focused on front end development and design.</span>
                </div>
                <div className={styles.glob_banner}>
                </div>
            </div>
        </div>
    )
}

export default Section