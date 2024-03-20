import React from 'react'
import Navbar2 from '../Navbar/Navbar2'
import styles from './Contact.module.css'
import { Tilt } from 'react-tilt'
import BehanceImg from './Group29.png'
import MailImg from './Group28.png'

function Contact() {
  return (
    <div>
      <div className={styles.contact}>
        <Navbar2 />
        <div className={styles.contact_contain}>
        <a href="mailto:phurichaya.7502@gmail.com">
        <Tilt scale={1.2} transitionspeed={2500} tiltReverse={true}>
        <img src={MailImg} alt="MailImg" className={styles.MailImg} />
        </Tilt>
        </a>
        <a href="https://www.behance.net/190c15d9" target="_blank" rel="noopener noreferrer">
        <Tilt scale={1.2} transitionspeed={2500} tiltReverse={true}>
            <img src={BehanceImg} alt="BehanceImg" className={styles.BehanceImg} />
            </Tilt>
          </a>
        </div>
        </div>
    </div>
  )
}

export default Contact