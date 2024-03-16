import React from 'react'
import Navbar2 from '../Navbar/Navbar2'
import styles from './Resume.module.css'
import whitebubbleImage from './whitebubble.png'; 
import resumeImg from './assetresume.png'; 
import buttonImg from './symboldowload.png'; 

const handleDownload = () => {
  const fileUrl = '/Phurichaya.pdf';
  const fileName = 'Phurichaya.pdf';
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  link.click();
}

function Resume() {
  return (
    <div className={styles.resumeContainer}>
       <Navbar2 />
       <div className={styles.bigbox}>
        <div className={styles.boxa}>
          <div className={styles.content}>
          <img src={whitebubbleImage} alt="whitebubble" className={styles.whitebubbleImage}/>
          <div className={styles.bio}>
            <p className={styles.text}>Now I am looking for new experiences. On this website I have compiled my <br /> resume and portfolio, you can see my past work. If you are interested in my <br />work please contact me. I really hope we can work together :) </p>
            <p className={styles.lasttext}>And here’s my resume</p>
          </div>
          </div>
        </div>
        <div className={styles.boxb}>
        <img src={buttonImg} alt="buttonImg" className={styles.buttonImg} onClick={handleDownload}/>
        <img src={resumeImg} alt="resumeImg" className={styles.resumeImg}/>

        </div>
       </div>
    </div>
  )
}

export default Resume