window.addEventListener('DOMContentLoaded', ()=>{
    const input = document.getElementById('input')
    const fromCUR = document.getElementById('fromCUR')
    const toCUR = document.getElementById('toCUR')
    const convertBTN = document.getElementById('submit')
    const result = document.getElementById('result')

    fetch('https://v6.exchangerate-api.com/v6/0f2a74214a9ae9305a85749e/latest/USD')
        .then(response => response.json())
        .then(data => {
            const rates = data.rates;
            const currencies = Object.keys(rates)

            currencies.forEach(currency=>{
                const option1 = document.createElement('option')
                const option2 = document.createElement('option')
                option1.value = currency
                option1.textContent = currency
                option2.value = currency
                option2.textContent = currency

                
            })
        })
})