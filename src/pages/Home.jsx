import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ImpactSection from '../components/ImpactSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <ImpactSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
