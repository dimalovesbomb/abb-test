const API_KEY = 'YXjyyazmhDFKeCCArFVvmasWkOp64EUx'; // I'd normally use .env for this
const allRequestCurrencies = ['amd', 'usd', 'eur', 'gbp', 'chf'];

async function convert(amount, from, to) {
    const url = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;
    const headers = new Headers();
    headers.append('apikey', API_KEY);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers,
    };

    try {
        const response = await fetch(url, requestOptions);
        const result = await response.json();

        return result;
    } catch (error) {
        return console.error('error', error); // I'd normally send it to analytics
    }
}

export async function getData(amount, currency) {
    const requestCurrencies = allRequestCurrencies.filter(
        curr => curr !== currency
    );
    const promises = requestCurrencies.map(curr => {
        return convert(amount, currency, curr);
    });
    const data = await Promise.all(promises);
    const isSuccess = data.every(el => el.success);

    if (isSuccess) {
        return data;
    }
}
