import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import useLazyBackground from '../hooks/useLazyBackground';

import bannerMobile from '../assets/bannerGaia-mobile.webp';
import bannerDesktop from '../assets/bannerGaia-desktop.webp';
import chartMobile from '../assets/sustainable_tourism_chart-mobile.webp';
import chartDesktop from '../assets/sustainable_tourism_chart-desktop.webp';

const Hero = () => {
    const { elementRef, isLoaded } = useLazyBackground(bannerMobile, bannerDesktop);

    return (
        <section className={styles.hero}>
            {/* Main Content */}
            <div className={styles.heroContent}>
                {/* Card/Box with main content */}
                <div
                    ref={elementRef}
                    className={styles.heroCard}
                    style={isLoaded ? {
                        '--bg-mobile': `url("${bannerMobile}")`,
                        '--bg-desktop': `url("${bannerDesktop}")`
                    } : {}}
                >




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
                    {/* Statistics Section - Two Column Layout */}
                    <div className={styles.statsSection}>
                        {/* Left Column: Text Content */}
                        <div className={styles.leftColumn}>
                            <p className={styles.statsText}>
                                Argentina, con su amplia diversidad de paisajes y climas, presenta un potencial turístico
                                extraordinario que demanda revisar críticamente cómo consumimos y nos vinculamos con cada
                                territorio. En este contexto, los hoteles —actores con alta demanda de energía, agua y
                                significativos flujos de residuos— enfrentan el desafío de transitar hacia modelos basados
                                en eficiencia de recursos, Economía Circular y reducción de impactos.
                            </p>

                            {/* Chart - positioned here for mobile order */}
                            <div className={styles.chartContainer}>
                                <picture>
                                    <source media="(min-width: 768px)" srcSet={chartDesktop} />
                                    <img
                                        src={chartMobile}
                                        alt="87% de los viajeros argentinos busca activamente alojamientos con prácticas sustentables"
                                        className={styles.chartImage}
                                        loading="lazy"
                                    />
                                </picture>
                            </div>

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

                        {/* Right Column: Chart */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
