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
        result.innerHTML=`${amountTotal}${currencyTotal}=${resultdollar.toFixed(2)}HKD`;
    })
    .catch(error=>{
        console.error("Request failed:",error);
        result.innerHTML="Error,please try again."
    })
}) 

 

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

