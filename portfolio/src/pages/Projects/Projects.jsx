import React from 'react'
import styles from './Projects.module.css'

// Imports for components
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Divider from '../../components/Divider/Divider'
import Card from '../../components/Card/Card'

// Imports for images
import disney from '../../assets/images/disneyplus_preview.png'
import maze from '../../assets/images/maze_preview.png'
import calculator from '../../assets/images/calculator_preview.png'
import memory from '../../assets/images/memory_preview.png'
import css from '../../assets/images/css_preview.png'

const Projects = () => {

    const projects = [
        {
            title: 'Disney+ Clone',
            content: `The Disney+ clone is a web application that mirrors the user interface of the beloved streaming platform.
            Leveraging the power of React, a versatile JavaScript library, and Vite, a fast and optimized build tool,
            I was able to create a seamless user experience.`,
            img: disney,
            type: 'project'
        },
        {
            title: 'Maze Game',
            content: `The maze project is a web application that allows users to solve a virtual maze.
            By using data fetched from a maze API, I dynamically generate the maze layout, rendering each tile with customized sprites.
            This project allows users to solve mazes, and change various settings according to their preferences.`,
            img: maze,
            type: 'project'
        },
        {
            title: 'Calculator',
            content: `The calculator features a clean and intuitive layout with a display screen, numeric buttons, operator buttons, and additional functionality like decimal point and clear buttons. 
            By utilizing React's component-based architecture and state management, I implemented event handlers to capture user input and perform calculations. 
            The project also includes error handling.`,
            img: calculator,
            type: 'project'
        },
        {
            title: 'Memory Game',
            content: `The game showcases my skills in web development and ability to create engaging user interfaces. 
            It features a set of cards that players need to match by flipping them over.
            I implemented the game logic and event handling for card flipping and matching. 
            The project highlights my proficiency in React development and creating interactive web applications.`,
            img: memory,
            type: 'project'
        },
        {
            title: 'CSS Only Art',
            content: `The project demonstrates my creativity and proficiency in CSS styling techniques. 
            By utilizing CSS properties and selectors, I carefully crafted the visual elements and details of the artwork, capturing the essence of the original fanart. 
            The project showcases my ability to use CSS to create visually appealing and detailed designs without relying on external graphics. 
            Overall, my CSS-only art piece of Ness highlights my artistic skills and mastery of CSS styling.`,
            img: css,
            type: 'project'
        },
    ]

    return (
        <>
            <div className={styles.projects_container}>
                <NavBar />
                <div className={styles.projects_wrapper}>
                    <Divider children={'My Projects'} />
                    <div className={styles.projects_card_wrapper}>
                        {projects.map((project) => (
                            <Card title={project.title} content={project.content} img={project.img} type={project.type} />
                        ))}
                    </div>
                    <footer className={styles.footer}>
                        <Footer />
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Projects