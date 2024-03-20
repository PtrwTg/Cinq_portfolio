import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar2.module.css';
import { Link, scroller } from 'react-scroll';

function Navbar2() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 150;
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetActive = (to) => {
    scroller.scrollTo(to, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.stickyNavbar : ''}`}>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${styles.navbarLink} ${styles.active}` : styles.navbarLink
        }
      >
        About me
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) =>
          isActive ? `${styles.navbarLink} ${styles.active}` : styles.navbarLink
        }
      >
        Resume
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive ? `${styles.navbarLink} ${styles.active}` : styles.navbarLink
        }
      >
        Portfolio
      </NavLink>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={styles.navbarLink}
        onSetActive={handleSetActive}
        onClick={() =>
          scroller.scrollTo('contact', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          })
        }
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar2;