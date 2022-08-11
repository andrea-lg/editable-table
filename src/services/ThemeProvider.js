import React from 'react';

const ThemeContext = React.createContext({});
const themes = ['light', 'dark'];
export const defaultTheme = themes[0];

export const useTheme = () => {
    return React.useContext(ThemeContext);
}

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = React.useState(defaultTheme);

    const toggleTheme = React.useCallback(() => {
        setTheme(theme => theme === themes[0] ? themes[1] : themes[0]);
    }, [])

    const value = React.useMemo(() => ({
        theme,
        toggleTheme
    }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            <div className={`theme theme--${theme}`} data-testid='theme-provider'>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;