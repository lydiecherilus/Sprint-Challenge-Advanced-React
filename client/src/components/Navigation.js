import React from 'react';
import useDarkMode from '../hooks/useDarkMode.js'

const Navigation = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    return (
        <nav className='navigation'>
            <h1 className='title' data-tested="toggle">Women's World Cup</h1>
            <div className='toggle_mode'>
                <div onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'} />
            </div>
        </nav>
    );
};
export default Navigation;