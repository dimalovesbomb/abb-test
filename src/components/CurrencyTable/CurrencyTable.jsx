import { useContext } from 'react';
import { LanguageContext } from '../../App';
import './currency-table.css';

const Tr = ({ to, rate, result }) => {
    return (
        <tr className="table-body__tr">
            <td>
                <p className="table-body__td__p">{to}</p>
            </td>
            <td>
                <p className="table-body__td__p">{rate}</p>
            </td>
            <td>
                <p className="table-body__td__p">{result}</p>
            </td>
        </tr>
    );
};

export const CurrencyTable = ({ data }) => {
    const localization = useContext(LanguageContext);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header__item">
                        {localization.currency}
                    </th>
                    <th className="table-header__item">
                        {localization.exchangeRate}
                    </th>
                    <th className="table-header__item">{localization.total}</th>
                </tr>
            </thead>
            <tbody>
                {data.map((el, i) => (
                    <Tr
                        key={i.toString()}
                        to={el.query.to}
                        rate={el.info.rate}
                        result={el.result}
                    />
                ))}
            </tbody>
        </table>
    );
};
