import { Button } from '../Button/Button';
import './currency-buttons.css';

export const CurrencyButtons = ({ currency, onChange }) => {
    return (
        <div className="currency-buttons">
            <Button
                buttonLabel="AMD ֏"
                id="amd"
                onClick={onChange}
                isActive={currency === 'amd'}
            />
            <Button
                buttonLabel="USD $"
                id="usd"
                onClick={onChange}
                isActive={currency === 'usd'}
            />
            <Button
                buttonLabel="EUR €"
                id="eur"
                onClick={onChange}
                isActive={currency === 'eur'}
            />
            <Button
                buttonLabel="GBP £"
                id="gbp"
                onClick={onChange}
                isActive={currency === 'gbp'}
            />
            <Button
                buttonLabel="CHF"
                id="chf"
                onClick={onChange}
                sActive={currency === 'chf'}
            />
        </div>
    );
};
