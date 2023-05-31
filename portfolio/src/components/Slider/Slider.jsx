import React from 'react'
import styles from './Slider.module.css'
import PropTypes from 'prop-types'

// Imports for React
import { useState, useEffect } from 'react'

// Default theme
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

// Imports for images
import thinking from './../../assets/images/thinking_glob.svg'
import popcorn from './../../assets/images/popcorn_glob.svg'
import disney from './../../assets/images/disneyplus_preview.png'
import maze from './../../assets/images/maze_preview.png'

const Slider = () => {

  const splideOptions = {
    type: 'loop',
    arrows: false,
    autoplay: true,
    interval: 3000,
    pagination: false,
    speed: 300
  }

  return (
    <div className={styles.slider_container}>
      <div className={styles.splide_wrapper}>
        <Splide options={splideOptions} aria-label='mis proyectos'>
          <SplideSlide>
            <div className={styles.slide}>
              <div className={styles.content_container}>
                <h2 className={styles.project_title}>Disney+ Clone</h2>
                <p className={styles.content_p}>
                  The Disney+ clone is a fully functional web application that mirrors the user interface of the beloved streaming platform. 
                Leveraging the power of React, a versatile JavaScript library, and Vite, a fast and optimized build tool, 
                I was able to create a seamless user experience.</p>
              </div>
              <div className={styles.preview_container}>
                <img className={styles.project_preview} src={disney} alt='proyecto' />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>
              <div className={styles.content_container}>
                <h2 className={styles.project_title}>Calculator</h2>
                <p className={styles.content_p}>This is a Disney+ Clone using React + Vite</p>
              </div>
              <div className={styles.preview_container}>
                <img className={styles.project_preview} src={maze} alt='proyecto' />
              </div>
            </div>
          </SplideSlide>
        </Splide>
        <div className={styles.glob_container}>
          <img className={styles.popcorn_glob} src={popcorn} alt='glob' />
        </div>
        <div className={styles.glob_container}>
          <img className={styles.thinking_glob} src={thinking} alt='glob' />
        </div>
      </div>
    </div>
  )
}

Slider.propTypes = {
  glob: PropTypes.oneOf(['thinking']),
  title: PropTypes.string,
  content: PropTypes.string
}

export default Slider