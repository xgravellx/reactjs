import React from 'react'
import ChangeTheme from './ChangeTheme'
import Footer from './Footer'
import { ChangeLang } from './ChangeLang'
import { useTheme } from 'styled-components'

const Container = () => {
    const {theme} = useTheme()
  return (
    <div className={`container ${theme}`}>
        <ChangeTheme />
        <ChangeLang />
        <Footer />
    </div>
  )
}

export default Container