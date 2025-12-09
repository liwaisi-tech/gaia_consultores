import { useState, useEffect, useRef } from 'react';
import styles from './ImpactSection.module.css';
import backgroundMetricsMobile from '../assets/BackgroundMetricas-mobile.webp';
import backgroundMetricsDesktop from '../assets/BackgroundMetricas-desktop.webp';

const ImpactSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState({
        hectares: 0,
        trees: 0,
        co2Reduction: 0,
        people: 0
    });

    const sectionRef = useRef(null);
    const animationTimeoutRef = useRef(null);

    // Valores finales
    const finalValues = {
        hectares: 5,
        trees: 2000,
        co2Reduction: 500,
        people: 500
    };

    // Observador de intersección para detectar cuando la sección es visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Resetear contadores a 0 antes de animar
                    setCounts({
                        hectares: 0,
                        trees: 0,
                        co2Reduction: 0,
                        people: 0
                    });

                    // Pequeño delay para que se note el reset
                    if (animationTimeoutRef.current) {
                        clearTimeout(animationTimeoutRef.current);
                    }

                    animationTimeoutRef.current = setTimeout(() => {
                        setIsVisible(true);
                    }, 50);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, []);

    // Animación de conteo
    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 segundos
        const steps = 60;
        const interval = duration / steps;

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const progress = Math.min(currentStep / steps, 1);

            // Usar easing para una animación más suave
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounts({
                hectares: Math.min(Math.floor(finalValues.hectares * easeOutQuart), finalValues.hectares),
                trees: Math.min(Math.floor(finalValues.trees * easeOutQuart), finalValues.trees),
                co2Reduction: Math.min(Math.floor(finalValues.co2Reduction * easeOutQuart), finalValues.co2Reduction),
                people: Math.min(Math.floor(finalValues.people * easeOutQuart), finalValues.people)
            });

            if (currentStep >= steps) {
                setCounts(finalValues);
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [isVisible, finalValues.hectares, finalValues.trees, finalValues.co2Reduction, finalValues.people]);

    // Función para formatear números con separador de miles
    const formatNumber = (num) => {
        return num.toLocaleString('es-UY');
    };

    return (
        <section className={styles.impactSection} id="impacto">
            <div className={styles.container}>
                {/* Hero Statement */}
                <div className={styles.heroStatement}>
                    <h2 className={styles.mainTitle}>
                        La regeneración no es un destino, es un camino en <em>movimiento</em>
                    </h2>
                    <p className={styles.description}>
                        En GAIA celebramos cada avance —grande o pequeño— porque sabemos que cuando la
                        dirección es la correcta, cada <strong>acción regenera</strong>. Estos indicadores
                        reflejan nuestro compromiso vivo con la regeneración y la mejora continua:
                    </p>

                    {/* Impact Counter */}
                    <div className={styles.impactCounterWrapper} ref={sectionRef}>
                        {/* Background Image */}
                        <picture>
                            <source
                                media="(min-width: 768px)"
                                srcSet={backgroundMetricsDesktop}
                                type="image/webp"
                            />
                            <img
                                src={backgroundMetricsMobile}
                                alt=""
                                className={styles.counterBackground}
                                loading="lazy"
                                decoding="async"
                            />
                        </picture>

                        <div className={styles.impactCounter}>
                            <div className={styles.counterItem}>
                                <div className={styles.counterNumber}>+{formatNumber(counts.hectares)}</div>
                                <div className={styles.counterLabel}>
                                    Restaurar {counts.hectares} hectáreas<br />con especies nativas
                                </div>
                            </div>
                            <div className={styles.counterItem}>
                                <div className={styles.counterNumber}>+{formatNumber(counts.trees)}</div>
                                <div className={styles.counterLabel}>
                                    Plantar {formatNumber(counts.trees)} árboles<br />nativos
                                </div>
                            </div>
                            <div className={styles.counterItem}>
                                <div className={styles.counterNumber}>+{formatNumber(counts.co2Reduction)}</div>
                                <div className={styles.counterLabel}>
                                    Reducir {formatNumber(counts.co2Reduction)} tCO<sub>2</sub>e/año junto a<br />empresas y municipios
                                </div>
                            </div>
                            <div className={styles.counterItem}>
                                <div className={styles.counterNumber}>+{formatNumber(counts.people)}</div>
                                <div className={styles.counterLabel}>
                                    Formar a {formatNumber(counts.people)} personas en<br />gestión ambiental y estrategias locales
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certification Indicators - Placeholder */}
                    <div className={styles.certIndicators}>
                        <div className={styles.indicator}>[Cert 1]</div>
                        <div className={styles.indicator}>[Cert 2]</div>
                        <div className={styles.indicator}>[Cert 3]</div>
                        <div className={styles.indicator}>[Cert 4]</div>
                    </div>
                </div>

                {/* Contact CTA Button */}
                <button
                    className={styles.contactButton}
                    onClick={() => {
                        const contactSection = document.getElementById('contacto');
                        if (contactSection) {
                            const offset = 120;
                            const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
                            const offsetPosition = elementPosition - offset;
                            window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                            });
                        }
                    }}
                >
                    Contactamos
                </button>

                {/* Coherence Section */}
                <div className={styles.coherenceSection}>
                    <h3 className={styles.coherenceTitle}>
                        Actuamos con coherencia
                    </h3>
                    <p className={styles.coherenceText}>
                        Trabajamos la regeneración no solo desde la teoría, sino desde la práctica. Por eso creamos GAIA Carbon Free,
                        una herramienta que hace la Huella Ambiental Digital de tu negocio (sitio web, redes sociales, CRM, correos, almacenamiento
                        en la nube y softwares) y te ayuda a compensarla. Ahora es una WEBAPP, pronto será una APP mobile a través del sistema operativo
                    </p>

                    {/* Circular Icons Grid */}
                    <div className={styles.iconsGrid}>
                        <div className={styles.iconCircle}>[Icon 1]</div>
                        <div className={styles.iconCircle}>[Icon 2]</div>
                        <div className={styles.iconCircle}>[Icon 3]</div>
                        <div className={styles.iconCircle}>[Icon 4]</div>
                        <div className={styles.iconCircle}>[Icon 5]</div>
                        <div className={styles.iconCircle}>[Icon 6]</div>
                        <div className={styles.iconCircle}>[Icon 7]</div>
                    </div>

                    {/* Highlighted Badges */}
                    <div className={styles.badgesRow}>
                        <div className={styles.badge}>ISO</div>
                        <div className={styles.badge}>Iram</div>
                        <div className={styles.badge}>B</div>
                    </div>

                    {/* Carbon Analysis Text */}
                    <p className={styles.carbonText}>
                        También hacemos huella ambiental digital de esta web, incluidos todos los cambios que
                        hacemos de forma constante para la mejora continua (nosotros también somos GAIA, y por
                        supuesto lo hacemos). En el momento que se carga esta web se ejecuta el análisis de huella de CO<sub>2</sub>
                        en Tiempo real que como empresa estamos emitiendo en ese momento:
                    </p>

                    {/* Website Carbon Badge */}
                    <div className={styles.carbonBadge}>
                        <div className={styles.carbonValue}>0.3g of CO<sub>2</sub>/view</div>
                        <div className={styles.carbonLabel}>Website Carbon</div>
                        <div className={styles.carbonStats}>Cleaner than 99% of pages tested</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
