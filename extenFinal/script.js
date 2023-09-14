const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const convert = document.getElementById("convert");
const result = document.getElementById("result");
const inputCurrency = document.getElementById("inputCurrency");
const convert2 = document.getElementById("convert2");
const result2 = document.getElementById("result2");


/* https://api-ninjas.com/api/exchangerate */


const apiKey="wA+rorAoMqzv5AXbdn6ZEg==Qo012wLLwuySzOmK"
const apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair=HKD_"



convert.addEventListener("click",()=>{
    const amountTotal = amount.value;
    console.log("Input Amount:",amountTotal);  
    const currencySelect = currency.value; 
    const url = apiUrl + currencySelect;
    console.log("url:",url);

    fetch(url,{
        headers:{
            'X-API-Key': apiKey,
        }
    })
    .then(response => response.json())
    .then(data=>{
        const exchangerate=data.exchange_rate;
        console.log("currency_pair",data.currency_pair)
        console.log("exchange_rate",data.exchange_rate)
        const resultdollar=amountTotal*exchangerate;
        console.log("result",resultdollar)
        result.innerHTML=`${amountTotal}HKD=${resultdollar.toFixed(2)}${currencySelect} (1HKD = ${data.exchange_rate}${currencySelect})`;
    })
    .catch(error=>{
        console.error("Request failed:",error);
        result.innerHTML="Error,please try again."
    })
}) 

convert2.addEventListener("click",()=>{
    const amountTotal = amount.value;
    console.log("Input Amount:",amountTotal);  
    const inputCurrencySelect = inputCurrency.value; 
    const url = apiUrl + inputCurrencySelect;
    console.log("url:",url);

    fetch(url,{
        headers:{
            'X-API-Key': apiKey,
        }
    })
    .then(response => response.json())
    .then(data=>{
        const exchangerate=data.exchange_rate;
        console.log("currency_pair",data.currency_pair)
        console.log("exchange_rate",data.exchange_rate)
        const resultdollar=amountTotal*exchangerate;
        console.log("result",resultdollar)
        result2.innerHTML=`${amountTotal}HKD=${resultdollar.toFixed(2)}${inputCurrencySelect} (1HKD = ${data.exchange_rate}${inputCurrencySelect})`;
    })
    .catch(error=>{
        console.error("Request failed:",error);
        result2.innerHTML="Error,please try again."
    })
}) 
/* CHF GBP*/




/* document.addEventListener("DOMContentLoaded",function(){
    const amount = document.getElementById("amount");
    const currency = document.getElementById("currency");
    const convert = document.getElementById("convert");
    const result = document.getElementById("result");
    
    
    
    
    const apiKey="wA+rorAoMqzv5AXbdn6ZEg==Qo012wLLwuySzOmK"
    const apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair=HKD_"
    
    
    
    convert.addEventListener("click",()=>{
        const amountTotal = amount.value;
        console.log("Total:",amountTotal);  
        const currencyTotal = currency.value;
        const url = apiUrl + currencyTotal;
        console.log("url:",url);
    
        fetch(url,{
            method: 'GET',
            headers:{
                'X-API-Key': apiKey,
            }
        })
        .then(response => response.json())
        .then(data=>{
            const rate=data.exchange_rate;
            console.log("rate",rate)
            const resultdollar=amountTotal*rate;
            console.log("result",resultdollar)
            result.innerHTML=`${amountTotal}HKD=${resultdollar.toFixed(2)}${currencyTotal}`;
        })
        .catch(error=>{
            console.error("Request failed:",error);
            result.innerHTML="Error,please try again."
        })
    }) 
    
    
}) */

