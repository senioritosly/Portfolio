import React from "react"
import styles from "./Home.module.css"

// Imports for components
import Section from "../../components/Section/Section"
import NavBar from "../../components/NavBar/NavBar"
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner"
import Footer from "../../components/Footer/Footer"
import Divider from "../../components/Divider/Divider"
import Slider from "../../components/Slider/Slider"

const Home = () => {

    return (
        <>
            <div className={styles.home_container}>
                <NavBar />
                <WelcomeBanner />
                <Divider>Who?</Divider>
                <div className={styles.section_wrapper}>
                    <Section />
                </div>
                <Divider>What?</Divider>
                <div className={styles.slider_container}>
                    <Slider />
                </div>
                <footer className={styles.footer}>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Home