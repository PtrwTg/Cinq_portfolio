import React from 'react';
import styles from './Aboutme.module.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import aboutmeImg from './aboutme.png'; 
import letterImg from './openedletter.png'; 
import { Tilt } from 'react-tilt';
import { TypeAnimation } from 'react-type-animation'


const Aboutme = () => {
  return (
    <div className={styles.background}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.letter}>
        <Link to="/" >
        <Tilt scale={1.2} transitionspeed={2500} tiltReverse={true}>
          <img src={letterImg} alt="Letter" className={styles.letterImg} />
          </Tilt>
          </Link>
        </div>
        <div className={styles.about}>
          <img src={aboutmeImg} alt="About Me" className={styles.aboutmeImg} />
          <div className={styles.bio}>
            <p>My name is Cinq. I am a graphic designer <br />who is interested in Ux/Ui design. I love <br /> to find new inspiration from various <br /> trends. I am studying in the faculty of <br />multimedia and technology at MFU.</p>
          </div>
          <div className={styles.skills}>
          <TypeAnimation
              sequence={[
                'here\'s my skill', 
                1000,
                'Figma :)',
                1000,
                'Adobe illustrator', 
                1000,
                'Photoshop',
                1000,
                'Pro create',
                1000,
                'Unity',
                1000

                
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
