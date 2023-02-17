import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <p className={styles.footer}>Created by&nbsp;<Link href={'https://www.linkedin.com/in/shivansh-gahlaut-498568149/'}>Shivansh Gahlaut</Link> </p>
  )
}

export default Footer