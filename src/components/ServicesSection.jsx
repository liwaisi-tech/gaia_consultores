import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';
import energiaImgDesktop from '../assets/service-energia-desktop.webp';
import energiaImgMobile from '../assets/service-energia-mobile.webp';
import produccionImgDesktop from '../assets/service-produccion-desktop.webp';
import produccionImgMobile from '../assets/service-produccion-mobile.webp';
import gestionImgDesktop from '../assets/service-gestion-desktop.webp';
import gestionImgMobile from '../assets/service-gestion-mobile.webp';
import culturaImgDesktop from '../assets/service-cultura-desktop.webp';
import culturaImgMobile from '../assets/service-cultura-mobile.webp';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: 'Energía y Recursos',
            imageMobile: energiaImgMobile,
            imageDesktop: energiaImgDesktop,
            description: 'Optimización de los recursos naturales que sostienen la vida. Implementamos soluciones de energía renovable y gestión eficiente del agua para reducir el impacto ambiental de tu organización turística.',
            colorTheme: 'coral'
        },
        {
            id: 2,
            title: 'Producción y Alimentación Regenerativa',
            imageMobile: produccionImgMobile,
            imageDesktop: produccionImgDesktop,
            description: 'Transformamos sistemas alimentarios hacia la sostenibilidad, agroecología y seguridad alimentaria. Creamos huertos regenerativos y cadenas de suministro locales que nutren tanto a las personas como al planeta.',
            colorTheme: 'purple'
        },
        {
            id: 3,
            title: 'Gestión, Indicadores y Finanzas Sostenibles',
            imageMobile: gestionImgMobile,
            imageDesktop: gestionImgDesktop,
            description: 'Desarrollamos sistemas de medición y gestión que integran criterios ambientales, sociales y económicos. Te ayudamos a cumplir con certificaciones internacionales y a comunicar tu impacto positivo.',
            colorTheme: 'green'
        },
        {
            id: 4,
            title: 'Cultura, Liderazgo y Educación Regenerativa',
            imageMobile: culturaImgMobile,
            imageDesktop: culturaImgDesktop,
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
                            imageMobile={service.imageMobile}
                            imageDesktop={service.imageDesktop}
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
