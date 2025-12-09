import { useMemo, useState } from 'react';
import styles from './TestimonialsSection.module.css';
import logoComentario from '../assets/LogoComentario.webp';

const TestimonialsSection = () => {
    const testimonials = useMemo(() => ([
        {
            id: 1,
            highlight: 'Contar con Agustín Devia en un equipo de trabajo es una garantía de éxito.',
            body: 'Su nivel de profesionalismo y su compromiso con todo aquello que emprende es formidable. Enormemente agradecida de haber trabajado junto a él y espero continuar haciéndolo. Lo recomiendo siempre.',
            name: 'Cecilia Alejandra Caruso',
            role: 'INTA EEA Oliveros',
            logo: logoComentario
        },
        {
            id: 2,
            highlight: 'La mirada integral de Gaia nos ayudó a alinear negocio y sostenibilidad.',
            body: 'El acompañamiento fue cercano, claro y muy práctico. Pasamos de ideas sueltas a un plan concreto con indicadores y acciones para nuestro equipo.',
            name: 'Mariana Benítez',
            role: 'Directora de Operaciones, EcoHotel Andino',
            logo: logoComentario
        }
    ]), []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const total = testimonials.length;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className={styles.testimonialsSection} id="testimonios">
            <div className={styles.container}>
                <h2 className={styles.title}>Testimonios</h2>

                <div className={styles.slider}>
                    <button
                        className={styles.navButton}
                        onClick={handlePrev}
                        aria-label="Testimonio anterior"
                        type="button"
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className={styles.card}>
                        <p className={styles.highlight}>"{currentTestimonial.highlight}"</p>
                        <p className={styles.body}>{currentTestimonial.body}</p>

                        <div className={styles.footer}>
                            <div className={styles.logoContainer}>
                                <img
                                    src={logoComentario}
                                    alt="Logo"
                                    className={styles.logo}
                                    loading="lazy"
                                />
                            </div>
                            <p className={styles.name}>{currentTestimonial.name}</p>
                            <p className={styles.role}>{currentTestimonial.role}</p>
                        </div>
                    </div>

                    <button
                        className={styles.navButton}
                        onClick={handleNext}
                        aria-label="Siguiente testimonio"
                        type="button"
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className={styles.dots} aria-hidden="true">
                    {testimonials.map((item, index) => (
                        <span
                            key={item.id}
                            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

