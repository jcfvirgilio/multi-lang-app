import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng:'en',
    fallbackLng:'en',
    interpolation:{
      escapeValue:false
    },
    resources:{
      en:{
        translation:{
          title:'Multi-language App',
          label:'Select Another Language',
          about:'About',
          home:'Home',
          user: 'My name is: {{name}}'
        }
      },
      es:{
        translation:{
          title:'Aplicación en varios idiomas',
          label:'¡Selecciona otro lenguaje!',
          about:'Sobre mí',
          home:'Inicio',
          user: 'Mi nombre es: {{name}}'
        }
      },
      it:{
        translation:{
          title:'Applicazione multilingue',
          label:"Selezionare un'altra lingua",
          about:'Su di me',
          home:'Casa',
          user: 'Mi chiamo: {{name}}'
        }
      }
    }
  })


export default i18n;