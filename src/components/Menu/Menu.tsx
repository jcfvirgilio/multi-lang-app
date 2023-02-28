import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../../constants";
import { useTranslation } from "react-i18next";
import './menu.css'

const isActive = ({isActive}:any) => `link ${isActive} ? 'active':''}`

export const Menu = () => {

  const {i18n,t} = useTranslation();

  const onChangeLang = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code)
  }

  return (
    <nav>
      <div>
          <span>
          <NavLink className={isActive} to='/'>{t('home')}</NavLink>
          </span>
          <span>
          <NavLink className={isActive} to='/about'>{t('about')}</NavLink>
          </span>
        <span>
          <select defaultValue={i18n.language} onChange={onChangeLang}>
            {
              LANGUAGES.map(({code,label})=>(
                  <option
                  key={code}
                  value={code}
                  >
                    {label}
                  </option> 
              ))
            }
          </select>
        </span>
      </div>
    </nav>
  )
}