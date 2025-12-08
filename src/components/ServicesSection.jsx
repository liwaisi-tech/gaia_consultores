import React from 'react';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';
import energiaImg from '../assets/service-energia-desktop.webp';
import produccionImg from '../assets/service-produccion-desktop.webp';
import gestionImg from '../assets/service-gestion-desktop.webp';
import culturaImg from '../assets/service-cultura-desktop.webp';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: 'Energía y Recursos',
            image: energiaImg,
            description: 'Optimización de los recursos naturales que sostienen la vida. Implementamos soluciones de energía renovable y gestión eficiente del agua para reducir el impacto ambiental de tu organización turística.',
            colorTheme: 'coral'
        },
        {
            id: 2,
            title: 'Producción y Alimentación Regenerativa',
            image: produccionImg,
            description: 'Transformamos sistemas alimentarios hacia la sostenibilidad, agroecología y seguridad alimentaria. Creamos huertos regenerativos y cadenas de suministro locales que nutren tanto a las personas como al planeta.',
            colorTheme: 'purple'
        },
        {
            id: 3,
            title: 'Gestión, Indicadores y Finanzas Sostenibles',
            image: gestionImg,
            description: 'Desarrollamos sistemas de medición y gestión que integran criterios ambientales, sociales y económicos. Te ayudamos a cumplir con certificaciones internacionales y a comunicar tu impacto positivo.',
            colorTheme: 'green'
        },
        {
            id: 4,
            title: 'Cultura, Liderazgo y Educación Regenerativa',
            image: culturaImg,
            description: 'Facilitamos procesos de transformación cultural y desarrollo de liderazgo consciente. Diseñamos programas educativos que inspiran a equipos y comunidades a adoptar prácticas regenerativas.',
            colorTheme: 'blue'
        }
    ];

    return (
        <section className={styles.servicesSection} id="servicios">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>¿Cómo lo hacemos?</h2>
                <p className={styles.sectionSubtitle}>
                    Combinamos conocimiento técnico, mirada humanista y visión sistémica para transformar negocios turísticos
                    en negocios que mejoran su vinculación con el entorno.
                </p>
                <div className={styles.servicesGrid}>
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            image={service.image}
                            description={service.description}
                            colorTheme={service.colorTheme}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
