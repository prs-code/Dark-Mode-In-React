import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {FiMoon, FiSun} from 'react-icons/fi';
import classNames from 'classnames';

function App() {
    const [isDarkMode, setIsDarkMode] = useState<Boolean>(false);

    const triggerTheme = () => {

        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark')
        };

        setIsDarkMode((prevState: Boolean): Boolean => {
            localStorage.setItem("DRModeStatus", !prevState ? 'true' : 'false');
            return !prevState;
        });
    };

    useEffect((): void => {

        setIsDarkMode(localStorage.getItem("DRModeStatus") === "true");

    }, []);

  return (
    <>
        <div className="theme-section">
            <h3>click to change theme :</h3>
            <FiMoon onClick={triggerTheme} className={classNames("theme-icon", {'hideBtn': isDarkMode})} />
            <FiSun onClick={triggerTheme} className={classNames("theme-icon", {'hideBtn': !isDarkMode})}/>
        </div>
        <div>
            <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
            This Is A Sample For Dark Mode
        </div>
        <h4>
            اعمال تغییر تم دارک در صفحه
        </h4>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
    </>
  )
}

export default App
