const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const convert = document.getElementById("convert");
const result = document.getElementById("amount");



amount.value="100"
const amountTotal = amount.value;
console.log("Total:",amountTotal);



const apiUrl="https://currency-converter-exchange-rates1.p.rapidapi.com/convert?amount=122&from=HKD&to="

convert.addEventListener("click",()=>{
    console.log("Hi");
    const amountTotal = amount.value;
    console.log("Total:",amountTotal);
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;
    console.log("url:",url);

    fetch(url,{
        method: 'GET',
        headers:{
            'X-RapidAPI-Key': '7371d6c017mshf7d5b8a9d5729cbp179678jsn8d3d1adfd13a',

        }
    })
    .then(response => response.json())
    .then(data=>{
        const rate=data.exchange_rate;
        console.log("rate",rate)
        const resultdollar=amountTotal*rate;
        console.log("result",resultdollar)
        result.innerHTML=`${amountTotal}${currencyTotal}=${resultdollar.toFixed(2)}HKD`;
    })
    .catch(error=>{
        console.error("Request failed:",error);
        result.innerHTML="Error,please try again."
    })
})