import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Letter.module.css';
import envelopeImage from './envelope.png';
import tapToOpenText from './taptoopen.png';
import { Tilt } from 'react-tilt';

const Letter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={tapToOpenText} alt="taptopen" className={styles.tapToOpen} />
        <Link to="/about" className={styles.envelopeLink}>
          <Tilt scale={1.2} transitionspeed={2500} tiltReverse={true}>
            <img src={envelopeImage} alt="envelope" className={styles.envelope} />
          </Tilt>
        </Link>
      </div>
    </div>
  );
};

export default Letter;
