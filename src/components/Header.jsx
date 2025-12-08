import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logoDesktop from '../assets/Logo.-Desktop.webp';
import logoMobile from '../assets/Logo-mobile.webp';

const Header = () => {
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
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to="/">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={logoDesktop} />
                        <img src={logoMobile} alt="Gaia Consultores" className={styles.logo} />
                    </picture>
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.path} className={styles.navItem}>
                                <Link
                                    to={item.path}
                                    className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
