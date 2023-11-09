let city = document.querySelector('.city')
let country = document.querySelector('.country')
let temp = document.querySelector('.temp')
let feelslike = document.querySelector('.weather__feels')
let img = document.querySelector('img')
let text = document.querySelector('.text__weather')
let wind = document.querySelector('.wind')

let choise = document.querySelector('.choise');
let btn = document.querySelector('.btn');
let contain = document.querySelector('.container')


async function weather (city_s){
    const response= await fetch(`https://api.weatherapi.com/v1/current.json?key=cf1fdb0e8cc14a2183170210230711&q=`+city_s);
    const weatherData = await response.json();

    city.textContent = weatherData.location.name;   
    country.textContent = weatherData.location.country;  
    temp.textContent = weatherData.current.temp_c;    
    feelslike.textContent = weatherData.current.feelslike_c;    
    img.src = weatherData.current.condition.icon;
    text.textContent = weatherData.current.condition.text;    
    wind.textContent = weatherData.current.wind_kph + " км/ч";

}

btn.addEventListener('click', function(){
    weather(choise.value);    
    choise.value = '';
    if(contain.classList.contains('none')){
        contain.classList.remove('none')
    }
})



  