import React from "react"
import styles from "./Home.module.css"

// Imports for components
import Section from "../../components/Section/Section"
import NavBar from "../../components/NavBar/NavBar"
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner"
import Footer from "../../components/Footer/Footer"
import Divider from "../../components/Divider/Divider"

const Home = () => {
    return (
        <>
            <div className={styles.home_container}>
                <NavBar />
                <WelcomeBanner />
                <div className={styles.section_wrapper}>
                    <Divider>Who?</Divider>
                    <Section />
                    <Divider>What?</Divider>
                    <footer className={styles.footer}>
                        <Footer />
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Home