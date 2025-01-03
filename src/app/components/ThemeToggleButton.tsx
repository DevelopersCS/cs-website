import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggleButton = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeToggleButton must be used within a ThemeProvider');
    }

    const { isDarkMode, toggleTheme } = themeContext;

    return (
        <button onClick={toggleTheme}>
            {isDarkMode ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggleButton;
