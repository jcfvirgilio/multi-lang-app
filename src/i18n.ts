import i18n from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';


const getCurrentHost = import.meta.env.MODE === 'development' ? 'http://localhost:5173' : 'LINK TO PROD'
i18n
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    lng:'en',
    fallbackLng:'en',
    interpolation:{
      escapeValue:false
    },
    backend:{
      loadPath:`${getCurrentHost}/i18n/{{lng}}.json`
    }
  })


export default i18n;