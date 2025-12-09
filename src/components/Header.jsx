import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logoDesktop from '../assets/Logo.-Desktop.webp';
import logoMobile from '../assets/Logo-mobile.webp';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'servicios', 'impacto', 'contacto'];
            const scrollPosition = window.scrollY + 150; // Offset for header

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 120; // Height of fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: sectionId === 'home' ? 0 : offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        scrollToSection(sectionId);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={logoDesktop} />
                        <img src={logoMobile} alt="Gaia Consultores" className={styles.logo} />
                    </picture>
                </a>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <a
                                href="#home"
                                onClick={(e) => handleNavClick(e, 'home')}
                                className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
                            >
                                Home
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a
                                href="#servicios"
                                onClick={(e) => handleNavClick(e, 'servicios')}
                                className={`${styles.navLink} ${activeSection === 'servicios' ? styles.active : ''}`}
                            >
                                Servicios
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a
                                href="#impacto"
                                onClick={(e) => handleNavClick(e, 'impacto')}
                                className={`${styles.navLink} ${activeSection === 'impacto' ? styles.active : ''}`}
                            >
                                Impacto
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a
                                href="#contacto"
                                onClick={(e) => handleNavClick(e, 'contacto')}
                                className={`${styles.navLink} ${activeSection === 'contacto' ? styles.active : ''}`}
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
