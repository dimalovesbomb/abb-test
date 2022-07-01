import { LangButtons } from '../../components/LangButtons/LangButtons';
import { LanguageContext } from '../../App';
import { useContext } from 'react';
import './header.css';

export const Header = ({ switchLang, activeButton }) => {
    const localization = useContext(LanguageContext);

    return (
        <header className="header">
            <h1 className="app-header">{localization.pageHeader}</h1>
            <LangButtons switchLang={switchLang} activeButton={activeButton} />
        </header>
    );
};
