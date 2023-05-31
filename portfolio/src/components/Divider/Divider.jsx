import React from 'react'
import styles from './Divider.module.css'
import PropTypes from 'prop-types'

const Divider = ( {children} ) => {
  return (
    <div className={styles.divider_container}>
        <div className={styles.divider_line}></div>
        <span>{children}</span>
        <div className={styles.divider_line}></div>
    </div>
  )
}

Divider.propTypes = {
    children: PropTypes.string
}

export default Divider