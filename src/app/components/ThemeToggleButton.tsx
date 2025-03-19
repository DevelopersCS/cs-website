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
        <button className='dark:bg-slate-900 bg-gray-100 px-6 py-2 rounded-lg flex items-center gap-2' onClick={toggleTheme}>
            <span className='sr-only'>{isDarkMode ? 'Modo Claro' : 'Modo Escuro'}</span>
            {isDarkMode ? <Sun color='#fff' weight='fill' /> : <Moon color='#000' weight='fill' />}
        </button>
    );
};

export default ThemeToggleButton;
