async function getCurrency() {
    let url = 'https://api.exchangeratesapi.io/latest?base=TRY';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderCurrency() {
    let currencies = await getCurrency(); 
    let eurosegment = `<span id ="euroCurrency">
                            ${(1 / currencies.rates.EUR).toFixed(2)}TRY
                        </span>
                        `;

    let dollarsegment = `
                    <span id ="dollarCurrency">
                        ${(1 / currencies.rates.USD).toFixed(2)}TRY
                    </span>`;


    let euro = document.querySelector('#currency .eurocurrency');
    euro.innerHTML += eurosegment;

    let dollar = document.querySelector('#currency .dollarcurrency');
    dollar.innerHTML += dollarsegment;
}

async function updateCurrency() {
    let currencies = await getCurrency();
    let euro = document.querySelector('#euroCurrency');
    let dollar = document.querySelector('#dollarCurrency');

    euro.innerHTML = `${(1 / currencies.rates.EUR).toFixed(2)}TRY`;
    dollar.innerHTML = `${(1 / currencies.rates.USD).toFixed(2)}TRY`;

}

renderCurrency();
setInterval(updateCurrency, 10000);
