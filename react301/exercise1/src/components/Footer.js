import { useLang } from '../contexts/LangContext';
import {useTheme} from '../contexts/ThemeContext'

const Footer = () => {
    const {theme, toogleTheme} = useTheme();
    const {lang} = useLang();
  return (
    <div>
        <hr />
        Footer
        Aktif Tema: {theme}
        <button onClick={toogleTheme}>
            Temayı değiştir
        </button>
        <div>Aktif Dil: {lang}</div>
    </div>
  )
}

export default Footer