import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            paragraph:
                "react-i18next is a powerful internationalization framework for React / React Native which is based on i18next."
        }
    },
    sp: {
        translation: {
            paragraph:
                "react-i18next es un poderoso marco de internacionalización para React / React Native que se basa en i18next."
        }
    },
    pt: {
        translation: {
            paragraph:
                "Tradução I18n"
        }
    },
    fr: {
        translation: {
            paragraph:
                "react-i18next est un puissant framework d'internationalisation pour React / React Native basé sur i18next."
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt',
        fallbackLng: 'sp',
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    })

export default i18n;