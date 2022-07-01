import { useContext } from 'react';
import { LanguageContext } from '../../App';
import './currency-table.css';

const mock = [
    {
        success: true,
        query: {
            from: 'AMD',
            to: 'USD',
            amount: 10000,
        },
        info: {
            timestamp: 1656691203,
            rate: 0.002451,
        },
        date: '2022-07-01',
        result: 24.51,
    },
    {
        success: true,
        query: {
            from: 'AMD',
            to: 'EUR',
            amount: 10000,
        },
        info: {
            timestamp: 1656691203,
            rate: 0.002355,
        },
        date: '2022-07-01',
        result: 23.55,
    },
    {
        success: true,
        query: {
            from: 'AMD',
            to: 'GBP',
            amount: 10000,
        },
        info: {
            timestamp: 1656691203,
            rate: 0.002035,
        },
        date: '2022-07-01',
        result: 20.35,
    },
    {
        success: true,
        query: {
            from: 'AMD',
            to: 'CHF',
            amount: 10000,
        },
        info: {
            timestamp: 1656691203,
            rate: 0.002359,
        },
        date: '2022-07-01',
        result: 23.59,
    },
];

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
                {data.map(el => {
                    return (
                        <tr className="table-body__tr">
                            <td>
                                <p className="table-body__td__p">
                                    {el.query.to}
                                </p>
                            </td>
                            <td>
                                <p className="table-body__td__p">
                                    {el.info.rate}
                                </p>
                            </td>
                            <td>
                                <p className="table-body__td__p">{el.result}</p>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
