import { LanguageContext } from '../../App';
import { useContext, useEffect, useState } from 'react';
import { Input } from '../../components/Input/Input';
import { CurrencyButtons } from '../../components/CurrencyButtons/CurrencyButtons';
import { CurrencyTable } from '../../components/CurrencyTable/CurrencyTable';
import { allRequestCurrencies } from '../../meta/allRequestCurrencies';
import { convert } from '../../http';
import './main.css';

export const Main = () => {
    const localization = useContext(LanguageContext);
    const [value, setValue] = useState('10000');
    const [activeCurrency, setActiveCurrency] = useState('amd');
    const [results, setResults] = useState([]);

    useEffect(() => {
        debouncedRequest(value, activeCurrency);
    }, []);

    const debouncedRequest = (amount, currency) => {
        setTimeout(async () => {
            const requestCurrencies = allRequestCurrencies.filter(
                curr => curr !== currency
            );
            const promises = requestCurrencies.map(curr => {
                return convert(amount, currency, curr);
            });
            const data = await Promise.all(promises);
            const isSuccess = data.every(el => el.success);

            if (isSuccess) {
                setResults(data);
            }
        }, 500);
    };

    const onCurrencyChange = e => {
        setActiveCurrency(e.target.id);

        if (value) {
            debouncedRequest(value, e.target.id);
        }
    };

    const onAmountChange = e => {
        if (Number.isNaN(+e.target.value)) return;

        setValue(e.target.value);
        debouncedRequest(e.target.value, activeCurrency);
    };

    return (
        <main className="main">
            <div className="exchange">
                <div className="exchange__left">
                    <Input
                        labelText={localization.inputLabel}
                        value={value}
                        onChange={onAmountChange}
                        placeholder={localization.inputPlaceholder}
                    />
                    <CurrencyButtons
                        currency={activeCurrency}
                        onChange={onCurrencyChange}
                    />
                </div>
                <div className="exchange__right">
                    <h2 className="exchange-right__h2">
                        {localization.iWillGet}
                    </h2>
                    <CurrencyTable data={results} />
                </div>
            </div>
        </main>
    );
};
