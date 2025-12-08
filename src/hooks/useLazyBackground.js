import { useEffect, useRef, useState } from 'react';

/**
 * Hook personalizado para lazy loading de imágenes de fondo
 * Carga las imágenes solo cuando el elemento entra en el viewport
 */
const useLazyBackground = (mobileImage, desktopImage) => {
    const elementRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Si el navegador no soporta Intersection Observer, cargar inmediatamente
        if (!('IntersectionObserver' in window)) {
            setIsLoaded(true);
            return;
        }

        // Función para precargar ambas imágenes
        const preloadImages = () => {
            const imagesToLoad = [mobileImage, desktopImage];
            let loadedCount = 0;

            imagesToLoad.forEach((imageSrc) => {
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === imagesToLoad.length) {
                        setIsLoaded(true);
                    }
                };
                img.onerror = () => {
                    loadedCount++;
                    if (loadedCount === imagesToLoad.length) {
                        setIsLoaded(true);
                    }
                };
                img.src = imageSrc;
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Precargar ambas imágenes cuando el elemento es visible
                        preloadImages();
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '50px', // Comenzar a cargar 50px antes de que el elemento sea visible
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [mobileImage, desktopImage]);

    return { elementRef, isLoaded };
};

export default useLazyBackground;

