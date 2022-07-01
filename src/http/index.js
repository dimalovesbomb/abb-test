const API_KEY = 'YXjyyazmhDFKeCCArFVvmasWkOp64EUx'; // I'd normally use .env for this

export async function convert(amount, from, to) {
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
