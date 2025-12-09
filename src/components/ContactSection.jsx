import { useState } from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'El email no es válido';
        }

        if (!formData.organization.trim()) {
            newErrors.organization = 'La organización es requerida';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es requerido';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simular envío (aquí integrarías con tu backend o servicio de email)
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Formulario enviado:', formData);

            // Success
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                organization: '',
                message: ''
            });

            // Hide success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);

        } catch (error) {
            console.error('Error al enviar formulario:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={styles.contactSection} id="contacto">
            <div className={styles.container}>
                <h2 className={styles.title}>
                    ¿Querés que exploremos tus oportunidades de mejora juntos?
                </h2>

                <div className={styles.content}>
                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                                placeholder="Tu nombre completo"
                                disabled={isSubmitting}
                            />
                            {errors.name && (
                                <span className={styles.errorMessage}>{errors.name}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                placeholder="tu@email.com"
                                disabled={isSubmitting}
                            />
                            {errors.email && (
                                <span className={styles.errorMessage}>{errors.email}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="organization" className={styles.label}>
                                Organización
                            </label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.organization ? styles.inputError : ''}`}
                                placeholder="Nombre de tu hotel u organización"
                                disabled={isSubmitting}
                            />
                            {errors.organization && (
                                <span className={styles.errorMessage}>{errors.organization}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                                placeholder="Contanos sobre tu proyecto o consulta..."
                                rows="5"
                                disabled={isSubmitting}
                            />
                            {errors.message && (
                                <span className={styles.errorMessage}>{errors.message}</span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </button>

                        {submitStatus === 'success' && (
                            <div className={styles.successMessage}>
                                ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className={styles.errorMessageBox}>
                                Hubo un error al enviar el formulario. Por favor, intenta nuevamente.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
