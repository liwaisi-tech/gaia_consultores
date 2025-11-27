import React, { useState } from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, image, description, colorTheme }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={styles.serviceCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ''}`}>
                {/* Front of card */}
                <div className={styles.cardFront}>
                    <img src={image} alt={title} className={styles.cardImage} />
                    <div className={styles.cardOverlay} />
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <div className={styles.arrowIcon}>
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14m0 0l-7-7m7 7l-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Back of card */}
                <div className={`${styles.cardBack} ${styles[colorTheme]}`}>
                    <h3 className={styles.backTitle}>{title}</h3>
                    <p className={styles.backDescription}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
