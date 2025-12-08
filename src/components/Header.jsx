import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logoDesktop from '../assets/Logo.-Desktop.webp';
import logoMobile from '../assets/Logo-mobile.webp';

const Header = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const serviciosSection = document.getElementById('servicios');
            if (serviciosSection && location.pathname === '/') {
                const rect = serviciosSection.getBoundingClientRect();
                const isInView = rect.top <= 100 && rect.bottom >= 100;
                setActiveSection(isInView ? 'servicios' : '');
            } else {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const handleHomeClick = (e) => {
        // Si ya estamos en la página home, hacer scroll al inicio
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Si estamos en otra página, dejar que React Router navegue normalmente
    };

    const handleServiciosClick = (e) => {
        e.preventDefault();
        const serviciosSection = document.getElementById('servicios');
        if (serviciosSection) {
            serviciosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const isActive = (path) => {
        // Si estamos viendo la sección de servicios, Home no debe estar activo
        if (path === '/' && activeSection === 'servicios') {
            return false;
        }
        return location.pathname === path;
    };

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
                        <li className={styles.navItem}>
                            <Link
                                to="/"
                                onClick={handleHomeClick}
                                className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <a
                                href="#servicios"
                                onClick={handleServiciosClick}
                                className={styles.navLink}
                            >
                                Servicios
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/impacto"
                                className={`${styles.navLink} ${isActive('/impacto') ? styles.active : ''}`}
                            >
                                Impacto
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                to="/contacto"
                                className={`${styles.navLink} ${isActive('/contacto') ? styles.active : ''}`}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
