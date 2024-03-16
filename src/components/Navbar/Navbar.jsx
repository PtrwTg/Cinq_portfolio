import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.navbarLink} ${styles.active}` : styles.navbarLink
            }
          >
            About me
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? `${styles.navbarLink} ${styles.active}` : styles.navbarLink
            }
          >
            Resume
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? `${styles.navbarLink} ${styles.active}` : styles.navbarLink
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.navbarLink} ${styles.active}` : styles.navbarLink
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;