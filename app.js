window.addEventListener('DOMContentLoaded', ()=>{
    const amountInput = document.getElementById('input')
    const fromSelect = document.getElementById('fromCUR')
    const toSelect = document.getElementById('toCUR')
    const convertBTN = document.getElementById('submit')
    const result = document.getElementById('result')

    fetch('https://v6.exchangerate-api.com/v6/0f2a74214a9ae9305a85749e/latest/USD')
        .then(response => response.json())
        .then(data => {
            const conversion_rates = data.conversion_rates;
            const currencies = Object.keys(conversion_rates)

            currencies.forEach(currency=>{
                const option1 = document.createElement('option')
                const option2 = document.createElement('option')
                option1.value = currency
                option1.textContent = currency
                option2.value = currency
                option2.textContent = currency

                fromSelect.appendChild(option1)
                toSelect.appendChild(option2)
            })

            convertBTN.addEventListener('click', ()=>{
                const fromCurrency = fromSelect.value;
                const toCurrency = toSelect.value;
                const amount = parseFloat(amountInput.value);
            })
        })
})