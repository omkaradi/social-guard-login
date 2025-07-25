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
      "poweredBy": "Powered by",
      "emailRequired": "Email is required",
      "invalidEmail": "Please enter a valid email address",
      "passwordRequired": "Password is required",
      "enterCaptcha": "Enter CAPTCHA code",
      "invalidCaptcha": "Invalid CAPTCHA code",
      "resetPassword": "Reset Password",
      "resetPasswordDescription": "Enter your email address and we'll send you a link to reset your password.",
      "resetEmailSent": "Reset link sent!",
      "resetEmailDescription": "Check your email for password reset instructions.",
      "resetEmailError": "Failed to send reset email. Please try again.",
      "enterEmail": "Enter your email",
      "back": "Back",
      "sending": "Sending...",
      "sendResetLink": "Send Reset Link",
      "currentPasswordRequired": "Current password is required",
      "newPasswordRequired": "New password is required",
      "confirmPasswordRequired": "Please confirm your password",
      "passwordTooShort": "Password must be at least 8 characters",
      "passwordsDoNotMatch": "Passwords do not match",
      "passwordExpired": "Password Expired",
      "passwordExpiredDescription": "Your password has expired. Please set a new password to continue.",
      "currentPassword": "Current Password",
      "newPassword": "New Password",
      "confirmPassword": "Confirm Password",
      "enterCurrentPassword": "Enter current password",
      "enterNewPassword": "Enter new password",
      "confirmNewPassword": "Confirm new password",
      "passwordChanged": "Password Updated",
      "passwordChangedDescription": "Your password has been successfully updated.",
      "passwordChangeError": "Failed to update password. Please try again.",
      "cancel": "Cancel",
      "updating": "Updating...",
      "updatePassword": "Update Password",
      "attemptWarning": "Wrong password! {{remaining}} attempts remaining",
      "accountLocked": "Account locked due to too many failed attempts"
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