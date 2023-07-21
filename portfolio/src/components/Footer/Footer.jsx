import React from 'react'
import styles from './Footer.module.css'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { TbMail } from 'react-icons/tb'
import { HiOutlineInformationCircle } from 'react-icons/hi'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.details}>
                <h2 className={styles.footer_name}>Mario Cristales</h2>
                <div className={styles.details_grid}>
                    <div className={styles.detail}>
                        <a className={styles.link} href='https://www.github.com/senioritosly/' target='_blank'>
                            <BsGithub />
                            <p className={styles.footer_p}>GitHub</p>
                        </a>
                    </div>
                    <div className={styles.detail}>
                        <a className={styles.link} href='https://twitter.com/sr_slyy' target='_blank'>
                            <BsTwitter />
                            <p className={styles.footer_p}>Twitter</p>
                        </a>
                    </div>
                    <div className={styles.detail}>
                        <a className={styles.link} href='/about'>
                            <HiOutlineInformationCircle />
                            <p className={styles.footer_p}>About Me</p>
                        </a>
                    </div>
                    <div className={styles.detail}>
                        <a className={styles.link} href='/contact'>
                            <TbMail />
                            <p className={styles.footer_p}>Contact</p>
                        </a>
                    </div>
                </div>
                <p className={styles.footer_p}>© 2023 Mario Cristales. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer