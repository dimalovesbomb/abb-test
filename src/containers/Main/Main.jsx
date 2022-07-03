import { LanguageContext } from '../../App';
import { useContext, useState, useRef, useEffect } from 'react';
import { Input } from '../../components/Input/Input';
import { CurrencyButtons } from '../../components/CurrencyButtons/CurrencyButtons';
import { CurrencyTable } from '../../components/CurrencyTable/CurrencyTable';
import { getData } from '../../http';
import './main.css';

export const Main = () => {
    const localization = useContext(LanguageContext);
    const [value, setValue] = useState('10000');
    const [activeCurrency, setActiveCurrency] = useState('amd');
    const [results, setResults] = useState([]);
    let debounceTimeout;

    useEffect(() => {
        async function init() {
            setResults(await getData(value, activeCurrency));
        }
        init();
    }, []);

    const debouncedGetData = useRef(value => {
        clearTimeout(debounceTimeout);
        if (!value) {
            setResults([]);
            return;
        }

        debounceTimeout = setTimeout(async () => {
            const data = await getData(value, activeCurrency);
            setResults(data);
        }, 1000);
    }).current;

    const onCurrencyChange = async e => {
        setActiveCurrency(e.target.id);

        if (value) {
            setResults(await getData(value, e.target.id));
        }
    };

    const onAmountChange = e => {
        if (Number.isNaN(+e.target.value)) return;

        setValue(e.target.value);
        debouncedGetData(e.target.value);
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
                    {results.length ? (
                        <>
                            <h2 className="exchange-right__h2">
                                {localization.iWillGet}
                            </h2>
                            <CurrencyTable data={results} />
                        </>
                    ) : (
                        <>
                            <h3>{localization.noData}</h3>
                            <p>💸</p>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
};
