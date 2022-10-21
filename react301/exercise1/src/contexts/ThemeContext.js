import { createContext, useState, useEffect, useContext} from 'react';

const ThemeContext = createContext();

const defaultTheme = localStorage.getItem('theme') || 'light'

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const toogleTheme = () => {
        setTheme((prev) => (prev === 'ligth' ? 'dark' : 'ligth'));
    }

    const values = {
        theme,
        toogleTheme,
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context;
}

export default ThemeContext;