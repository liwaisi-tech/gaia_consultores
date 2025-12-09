import styles from './Footer.module.css';
import logoDesktop from '../assets/Logo.-Desktop.webp';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        scrollToSection(sectionId);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logoContainer}>
                    <img
                        src={logoDesktop}
                        alt="Gaia Consultores"
                        className={styles.logo}
                        loading="lazy"
                    />
                </div>

                {/* Navigation Links */}
                <nav className={styles.nav}>
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, 'home')}
                        className={styles.navLink}
                    >
                        Home
                    </a>
                    <a
                        href="#servicios"
                        onClick={(e) => handleNavClick(e, 'servicios')}
                        className={styles.navLink}
                    >
                        Servicios
                    </a>
                    <a
                        href="#contacto"
                        onClick={(e) => handleNavClick(e, 'contacto')}
                        className={styles.navLink}
                    >
                        Contacto
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
