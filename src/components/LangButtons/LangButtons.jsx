import { Button } from '../Button/Button';
import './lang-buttons.css';

export const LangButtons = ({ switchLang, activeButton }) => {
    return (
        <div className="header-buttons">
            <Button
                buttonLabel="Русский"
                id="ru"
                onClick={switchLang}
                isActive={activeButton === 'ru'}
            />
            <Button
                buttonLabel="English"
                id="en"
                onClick={switchLang}
                isActive={activeButton === 'en'}
            />
        </div>
    );
};
