import styles from './ImpactSection.module.css';

const ImpactSection = () => {
    return (
        <section className={styles.impactSection} id="impacto">
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Nuestro Impacto
                </h2>
                <p className={styles.description}>
                    Esta sección estará disponible próximamente con métricas, casos de estudio y el impacto real que generamos en cada proyecto.
                </p>
            </div>
        </section>
    );
};

export default ImpactSection;
