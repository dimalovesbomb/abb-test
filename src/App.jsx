import { createContext, useEffect, useState } from 'react';
import { localization } from './meta/localization';
import { Header } from './containers/Header/Header';
import { Main } from './containers/Main/Main';
import './App.css';

export const LanguageContext = createContext(localization);

function App() {
    const [lang, setLang] = useState('ru');

    useEffect(() => {
        const newTitle = localization[lang].pageHeader || 'Currency Exchange';
        document.title = newTitle;
    }, [lang]);

    const toggleLangs = e => setLang(e.target.id);

    return (
        <LanguageContext.Provider value={localization[lang]}>
            <div className="app">
                <Header switchLang={toggleLangs} activeButton={lang} />
                <Main />
                <footer>
                    <p className="footer-text">
                        {localization[lang].notGoodDesigner}
                    </p>
                </footer>
            </div>
        </LanguageContext.Provider>
    );
}

export default App;
