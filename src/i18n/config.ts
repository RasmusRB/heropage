import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      meta: {
        title:
          "Time Registration and Work Process Digitalization | TIMEmSYSTEM",
        description:
          "Smart time registration and work process digitalization. Streamline your workforce with TIMEmSYSTEM's intelligent time tracking software.",
      },
      nav: {
        services: "Services",
        clients: "Clients",
        about: "About Us",
        status: "Operational Status",
        more: "More",
      },
      hero: {
        title: "Welcome to TMS",
        subtitle: "Smart Time Registration Software",
        description:
          "Streamline your workforce management with our intelligent time tracking and registration system. Boost productivity, ensure compliance, and gain valuable insights into your team's performance.",
        cta: "Start Free Trial",
      },
      services: {
        title: "Our Features",
        subtitle: "Comprehensive time tracking solutions for modern businesses",
        service1: {
          title: "Time Tracking",
          description:
            "Accurate time registration with automatic tracking and manual entry options",
        },
        service2: {
          title: "Project Management",
          description:
            "Track time across multiple projects and tasks with detailed reporting",
        },
        service3: {
          title: "Analytics & Reports",
          description:
            "Detailed insights and customizable reports for better workforce management",
        },
      },
      clients: {
        title: "Our Clients",
        subtitle: "Trusted by companies worldwide",
      },
      about: {
        title: "About TMS",
        subtitle: "Time tracking experts with a passion for efficiency",
        description:
          "We are a team of dedicated professionals committed to revolutionizing how businesses track time and manage their workforce through innovative software solutions.",
      },
      contact: {
        title: "Contact Information",
        address: "123 Technology Street, Copenhagen, Denmark",
        phone: "+45 12 34 56 78",
        email: "contact@tms.dk",
        hours: "Monday - Friday: 9:00 - 17:00",
      },
      footer: {
        copyright: "© 2025 TMS. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
  },
  da: {
    translation: {
      meta: {
        title:
          "Tidsregistrering og digitalisering af arbejdsprocesser | TIMEmSYSTEM",
        description:
          "Smart tidsregistrering og digitalisering af arbejdsprocesser. Effektiviser din arbejdsstyrke med TIMEmSYSTEM's intelligente tidsregistreringssoftware.",
      },
      nav: {
        services: "Ydelser",
        clients: "Kunder",
        about: "Om Os",
        status: "Driftstatus",
        more: "Mere",
      },
      hero: {
        title: "Velkommen til TMS",
        subtitle: "Smart Tidsregistrerings Software",
        description:
          "Effektiviser din arbejdsstyrke management med vores intelligente tidsregistrerings- og sporingssystem. Øg produktiviteten, sikre overholdelse og få værdifuld indsigt i dit teams præstationer.",
        cta: "Start Gratis Prøve",
      },
      services: {
        title: "Vores Features",
        subtitle:
          "Omfattende tidsregistreringsløsninger til moderne virksomheder",
        service1: {
          title: "Tidsregistrering",
          description:
            "Præcis tidsregistrering med automatisk sporing og manuelle indtastningsmuligheder",
        },
        service2: {
          title: "Projekt Management",
          description:
            "Spor tid på tværs af flere projekter og opgaver med detaljeret rapportering",
        },
        service3: {
          title: "Analytics & Rapporter",
          description:
            "Detaljeret indsigt og tilpassede rapporter for bedre arbejdsstyrke management",
        },
      },
      clients: {
        title: "Vores Kunder",
        subtitle: "Betroet af virksomheder verden over",
      },
      about: {
        title: "Om TMS",
        subtitle: "Tidsregistrerings eksperter med passion for effektivitet",
        description:
          "Vi er et team af dedikerede professionelle, der er forpligtet til at revolutionere, hvordan virksomheder registrerer tid og administrerer deres arbejdsstyrke gennem innovative softwareløsninger.",
      },
      contact: {
        title: "Kontaktinformation",
        address: "Teknologigade 123, København, Danmark",
        phone: "+45 12 34 56 78",
        email: "kontakt@tms.dk",
        hours: "Mandag - Fredag: 9:00 - 17:00",
      },
      footer: {
        copyright: "© 2025 TMS. Alle rettigheder forbeholdes.",
        privacy: "Privatlivspolitik",
        terms: "Servicevilkår",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "da",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
