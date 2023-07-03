const api_Key ="3b088b8480464880edd33597";

const url = "https://v6.exchangerate-api.com/v6/"+api_Key;

const currency_one = document.getElementById("currency_one");
const list_one = document.getElementById("list_one");
const currency_two = document.getElementById("currency_two");
const list_two = document.getElementById("list_two");
const amount = document.getElementById("amount");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");




fetch(url+"/codes")

    .then(res => res.json()
    .then(data => {

        const items = data.supported_codes;
        let options;

        for(let item of items){
            options += `
            
            <option value=${item[0]}> ${item[1]} </option>;
            
            `
        }

        list_one.innerHTML = options;
        list_two.innerHTML = options;



    }));

calculate.addEventListener("click", fetchCurrency);

function fetchCurrency (){

    const currency1 = currency_one.value;
    const currency2 = currency_two.value;
 

    let req = url+"/latest/"+currency1;

    fetch(req).then(res => res.json().then(data=>{

        const items = data.conversion_rates;
        const maliyet = items[currency2];

        const miktar = amount.value;
        
        const sonuc = miktar * maliyet;
        
        displayResult(sonuc);


    }))
    
}

function  displayResult(sonuc){

    const miktar = amount.value;
    const currency1 = currency_one.value;
    const currency2 = currency_two.value;

    let html = `
    <div class="card border-primary">
        <div class="card-body text-center" style="font-size: 30px;">
           ${miktar} ${currency1} = ${sonuc} ${currency2}
        </div>
    </div>

    `
    result.innerHTML = html;

}




