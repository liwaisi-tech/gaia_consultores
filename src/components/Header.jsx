import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/servicios', label: 'Servicios' },
        { path: '/impacto', label: 'Impacto' },
        { path: '/contacto', label: 'Contacto' }
    ];

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link to="/" onClick={closeMenu}>
                        <img src={logo} alt="Gaia Consultores" className={styles.logo} />
                    </Link>

                    <button
                        className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                        <ul className={styles.navList}>
                            {navItems.map((item) => (
                                <li key={item.path} className={styles.navItem}>
                                    <Link
                                        to={item.path}
                                        className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            <div
                className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`}
                onClick={closeMenu}
            />
        </>
    );
};

export default Header;
