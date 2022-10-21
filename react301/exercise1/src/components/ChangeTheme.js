import React  from 'react'
import {useTheme} from '../contexts/ThemeContext'

const ChangeTheme = () => {
    const {theme, toogleTheme} = useTheme()
  return (
    <div>
        <div>Active Theme: {theme}</div>
        <button onClick={toogleTheme}>Change Theme</button>
    </div>
  )
}

export default ChangeTheme