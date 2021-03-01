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
    let html = '';
    let eurosegment = `<span id ="euroCurrency">
                            ${(1 / currencies.rates.EUR).toFixed(3)}TRY
                        </span>
                        `;

    let dollarsegment = `
                    <span id ="dollarCurrency">
                        ${(1 / currencies.rates.USD).toFixed(3)}TRY
                    </span>`;


    //html += htmlSegment;

    let euro = document.querySelector('#currency .eurocurrency');
    euro.innerHTML += eurosegment;

    let dollar = document.querySelector('#currency .dollarcurrency');
    dollar.innerHTML += dollarsegment;
}

async function test() {
    let currencies = await getCurrency();
    console.log(currencies.rates.USD);
    console.log(currencies.rates.EUR);

}
renderCurrency();