import React from 'react'

import { useTheme } from "../services/ThemeProvider";

export default function Nav(){
    const {theme, toggleTheme} = useTheme();
    return (
        <nav>
            <h1>Editable Table {theme}</h1>
            <button className='theme-toggle-button' data-testid="toggle-theme-button" onClick={toggleTheme}><span className="material-symbols-outlined">{theme === 'light' ? 'dark_mode' : 'light_mode'}</span></button>
        </nav>
    );
}