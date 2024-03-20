import React from 'react'
import Navbar2 from '../Navbar/Navbar2'
import styles from './Portfolio.module.css'
import PortImg from './GroupBehance.png'
import BehanceImg from './Group29.png'
import MailImg from './Group28.png'
import { Link } from 'react-scroll'
import { Tilt } from 'react-tilt'

function Portfolio() {
  return (
    <div>
    <div className={styles.root}>
        <Navbar2 />
        <a href="https://www.behance.net/190c15d9" target="_blank" rel="noopener noreferrer">
          <img src={PortImg} alt="PortImg" className={styles.portImg} />
        </a>
        <div name="contact">
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
    </div>
  )
}

export default Portfolio