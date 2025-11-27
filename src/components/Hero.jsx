import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Main Content */}
            <div className={styles.heroContent}>
                {/* Card/Box with main content */}
                <div className={styles.heroCard}>
                    {/* Animated Background - ONLY inside heroCard */}
                    <div className={styles.animatedBackground}>
                        <div className={styles.leaf}></div>
                        <div className={styles.leaf}></div>
                        <div className={styles.leaf}></div>
                        <div className={styles.leaf}></div>
                        <div className={styles.leaf}></div>
                        <div className={styles.leaf}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>

                    {/* Video/Animation Box inside card */}
                    <div className={styles.videoBox}>
                        Video/<br />animación
                    </div>

                    <div className={styles.cardContent}>
                        <p className={styles.heroText}>
                            Acompañamos a organizaciones turísticas en sus procesos de cumplimiento,
                            gestión y transformación ambiental.
                        </p>

                        <Link to="/contacto">
                            <button className={styles.ctaButtonInCard}>
                                Contáctanos
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Content outside the card */}
                <div className={styles.outsideContent}>
                    <p className={styles.outsideText}>
                        Regenerar la Tierra empieza por <strong>regenerar los vínculos entre las personas,
                            las organizaciones y la naturaleza.</strong>
                    </p>

                    <p className={styles.outsideText}>
                        Desde Gaia Consultores queremos demostrar que sí existe una nueva forma de habitar
                        y gestionar los negocios y el entorno más consciente, colaborativa y regenerativa.
                    </p>

                    <Link to="/contacto">
                        <button className={styles.ctaButtonOutside}>
                            Contáctanos
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
