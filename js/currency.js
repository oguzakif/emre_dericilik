async function getCurrency() {
    let url = 'http://data.fixer.io/api/latest?access_key=2a8031392c85ca5f17b33fc7b0891812&format=1';
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
                        ${(currencies.rates.TRY).toFixed(2)}TRY
                        </span>
                        `;

    let dollarsegment = `
                    <span id ="dollarCurrency">
                    ${(currencies.rates.TRY/currencies.rates.USD).toFixed(2)}TRY
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

    euro.innerHTML = `${(currencies.rates.TRY).toFixed(2)}TRY`;
    dollar.innerHTML = `${(currencies.rates.TRY/currencies.rates.USD).toFixed(2)}TRY`;

}

renderCurrency();
setInterval(updateCurrency, 396000);