import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner"
import styles from "./Home.module.css"

const Home = () => {
    return (
        <>
            <div className={styles.home_container}>
                <NavBar />
                <WelcomeBanner />
            </div>
        </>
    )
}

export default Home