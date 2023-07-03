Api_key ="a18d779c269b0772b471803ca257806c";

const UIController = (function (){
    const selectors = {
        getButton : "#getWeather",
        locationInput : "#location",
        cardBody : "#displaydata"
    }
    const error = function(){
        let alert = `
        
        <div class="alert alert-danger" role="alert">
             Konum bulunamadı
        </div>
        
        `;
        let body = document.querySelector(selectors.cardBody);
        body.innerHTML = alert;

        setTimeout(function(){
            let body = document.querySelector(selectors.cardBody);
            body.innerHTML = "";
        },2000)
    }

    return {
        selectors,
        error
    }

    
})();



const DATAController = (function(UIctrl){
    
    let selectors = UIctrl.selectors;

    const getButton = document.querySelector(selectors.getButton);
    const input  = document.querySelector(selectors.locationInput);
    const cardBody = document.querySelector(selectors.cardBody);

    const getWeatherData = async function (lat, long){
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${Api_key}`
        let res = await fetch(url);
        let data = await res.json();
        weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        let html =`
        
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <h4>${data.name}</h4>
            <img src="${weatherIcon}" alt="Hava">
            <p>${data.weather[0].main}</p>
        </div>
        
        `;

        cardBody.innerHTML = html;
        
    }

    const getLocationData = async function (e) {
        let location = input.value;
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${Api_key}`
        let res = await fetch(url);
        let data = await res.json();
        if(data.length == 0){
            UIctrl.error();
            return
        }
        let lat = data[0].lat;
        let long = data[0].lon;
        getWeatherData(lat,long);
       
    }

    getButton.addEventListener("click", getLocationData)
    
})(UIController);