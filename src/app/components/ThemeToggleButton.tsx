import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Moon, Sun } from '@phosphor-icons/react/dist/ssr';

const ThemeToggleButton = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeToggleButton must be used within a ThemeProvider');
    }

    const { isDarkMode, toggleTheme } = themeContext;

    return (
        <button className='bg-slate-900 px-6 py-2 rounded-lg flex items-center gap-2' onClick={toggleTheme}>
            {!isDarkMode ? <p className='hidden'>Modo Escuro</p> : <p className='hidden'>Modo Escuro</p>}
            {!isDarkMode ? <Moon color='#fff' /> : <Sun color='#fff' />}
        </button>
    );
};

export default ThemeToggleButton;
