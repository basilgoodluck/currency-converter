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

                
                if(currency = 'NGN'){
                    option2.value = currency
                    option2.textContent = currency
                }

                fromSelect.appendChild(option1)
                toSelect.appendChild(option2)
            })

            convertBTN.addEventListener('click', ()=>{

                const fromCurrency = fromSelect.value;
                const toCurrency = toSelect.value;

                const amount = parseFloat(amountInput.value);

                if(isNaN(amount)){
                    result.innerHTML = 'Invalid amount'
                    result.style.color = 'red'
                    result.style.fontSize = '1rem'
                    return
                }
                const fromRate = conversion_rates[fromCurrency];
                const toRate = conversion_rates[toCurrency];
                const convertedAmount = (amount / fromRate) * toRate;

                result.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
                result.style.color = '#fff'
                result.style.fontSize = '1rem'

                return
            })
            amountInput.addEventListener('keydown', (event)=>{
                if (event.key === 'Enter') {
                    const fromCurrency = fromSelect.value;
                    const toCurrency = toSelect.value;

                    const amount = parseFloat(amountInput.value);

                    if(isNaN(amount)){
                        result.innerHTML = 'Invalid amount'
                        result.style.color = 'red'
                        result.style.fontSize = '1rem'
                        return
                    }
                    const fromRate = conversion_rates[fromCurrency];
                    const toRate = conversion_rates[toCurrency];
                    const convertedAmount = (amount / fromRate) * toRate;

                    result.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
                    result.style.color = '#fff'
                    result.style.fontSize = '1rem'

                    return    
                }

                

            })
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
            result.textContent = 'Error fetching exchange rates.';
          });
})