import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { setLanguage } from './store/slices/languageSlice';

function App() {
  const { i18n, t } = useTranslation();
  const dispatch = useAppDispatch();
  const { colorScheme } = useAppSelector((state) => state.theme);
  const { currentLanguage } = useAppSelector((state) => state.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    // Update document title when language changes
    document.title = t('meta.title');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    }
  }, [currentLanguage, t]);

  useEffect(() => {
    // Sync i18n language changes with Redux store
    const handleLanguageChange = (lng: string) => {
      if (lng !== currentLanguage) {
        dispatch(setLanguage(lng as 'da' | 'en'));
      }
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [currentLanguage, dispatch, i18n]);

  useEffect(() => {
    // Apply theme to document
    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorScheme]);

  return (
    <div className={`min-h-screen ${colorScheme === 'dark' ? 'dark' : ''}`}>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ClientsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
