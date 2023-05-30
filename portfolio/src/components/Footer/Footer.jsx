import React from 'react'
import styles from './Footer.module.css'
import { GrInstagram } from 'react-icons/gr'
import { BsTwitter } from 'react-icons/bs'
import { TbMail } from 'react-icons/tb'
import { HiOutlineInformationCircle } from 'react-icons/hi'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.details}>
                <h2>Mario Cristales</h2>
                <div className={styles.details_grid}>
                    <div className={styles.detail}>
                        <GrInstagram />
                        <p>Instagram</p>
                    </div>
                    <div className={styles.detail}>
                        <BsTwitter />
                        <p>Twitter</p>
                    </div>
                    <div className={styles.detail}>
                        <HiOutlineInformationCircle />
                        <p>About Me</p>
                    </div>
                    <div className={styles.detail}>
                        <TbMail />
                        <p>Contact</p>
                    </div>
                </div>
                <p>© 2023 Mario Cristales. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer