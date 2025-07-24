import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "signInTitle": "Sign in with email",
      "signInSubtitle": "Make a new doc to bring your worlds, data, and teams together. For free",
      "email": "Email",
      "password": "Password",
      "forgotPassword": "Forgot password?",
      "getStarted": "Get Started",
      "orSignInWith": "Or sign in with",
      "signInWith": "Sign in with {{provider}}",
      "pleaseCompleteCaptcha": "Please complete the CAPTCHA",
      "loading": "Loading...",
      "error": "An error occurred. Please try again.",
      "poweredBy": "Powered by"
    }
  },
  es: {
    translation: {
      "signInTitle": "Iniciar sesión con email",
      "signInSubtitle": "Crea un nuevo documento para unir tus mundos, datos y equipos. Gratis",
      "email": "Correo electrónico",
      "password": "Contraseña",
      "forgotPassword": "¿Olvidaste tu contraseña?",
      "getStarted": "Comenzar",
      "orSignInWith": "O iniciar sesión con",
      "signInWith": "Iniciar sesión con {{provider}}",
      "pleaseCompleteCaptcha": "Por favor completa el CAPTCHA",
      "loading": "Cargando...",
      "error": "Ocurrió un error. Inténtalo de nuevo.",
      "poweredBy": "Desarrollado por"
    }
  },
  fr: {
    translation: {
      "signInTitle": "Se connecter avec email",
      "signInSubtitle": "Créez un nouveau document pour rassembler vos mondes, données et équipes. Gratuit",
      "email": "Email",
      "password": "Mot de passe",
      "forgotPassword": "Mot de passe oublié ?",
      "getStarted": "Commencer",
      "orSignInWith": "Ou se connecter avec",
      "signInWith": "Se connecter avec {{provider}}",
      "pleaseCompleteCaptcha": "Veuillez compléter le CAPTCHA",
      "loading": "Chargement...",
      "error": "Une erreur s'est produite. Veuillez réessayer.",
      "poweredBy": "Propulsé par"
    }
  },
  de: {
    translation: {
      "signInTitle": "Mit E-Mail anmelden",
      "signInSubtitle": "Erstelle ein neues Dokument, um deine Welten, Daten und Teams zusammenzubringen. Kostenlos",
      "email": "E-Mail",
      "password": "Passwort",
      "forgotPassword": "Passwort vergessen?",
      "getStarted": "Loslegen",
      "orSignInWith": "Oder anmelden mit",
      "signInWith": "Anmelden mit {{provider}}",
      "pleaseCompleteCaptcha": "Bitte CAPTCHA vervollständigen",
      "loading": "Laden...",
      "error": "Ein Fehler ist aufgetreten. Bitte versuche es erneut.",
      "poweredBy": "Betrieben von"
    }
  },
  hi: {
    translation: {
      "signInTitle": "ईमेल से साइन इन करें",
      "signInSubtitle": "अपनी दुनिया, डेटा और टीमों को एक साथ लाने के लिए एक नया दस्तावेज़ बनाएं। मुफ्त",
      "email": "ईमेल",
      "password": "पासवर्ड",
      "forgotPassword": "पासवर्ड भूल गए?",
      "getStarted": "शुरू करें",
      "orSignInWith": "या इसके साथ साइन इन करें",
      "signInWith": "{{provider}} के साथ साइन इन करें",
      "pleaseCompleteCaptcha": "कृपया CAPTCHA पूरा करें",
      "loading": "लोड हो रहा है...",
      "error": "एक त्रुटि हुई। कृपया फिर से कोशिश करें।",
      "poweredBy": "द्वारा संचालित"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;