const city_search = document.querySelector('#city_search');
const search_button = document.querySelector('#search_button');

const getData = async  (city, url, token)=>{
    let url = `${url}?q=${city},it&appid=${token}}&lang=it` ; 
     const response = await fetch(url);
     const json = await response.json();
     return json;
}

search_button.addEventListener('click', ()=>{
    domManipulation(city_search.value);
});

const domManipulation = async (city)=>{
    const json = await getData(city);
    console.log(json);
    const temp_min = document.querySelector('#temp_min');
    const temp = document.querySelector('#temp');
    const temp_max = document.querySelector('#temp_max');
    const city_name = document.querySelector('#city_name');
    const lat = document.querySelector('#lat');
    const lon = document.querySelector('#lon');
    const description = document.querySelector('#description');
    const sunrise = document.querySelector('#sunrise');
    const sunset = document.querySelector('#sunset');
    const icon = document.querySelector('#icon');
    const cards = document.querySelectorAll('.card-custom');

    temp_min.innerHTML = `MINIMA: ${(json.main.temp_min - 273.15).toFixed(2)}°`;
    temp.innerHTML = `MEDIA: ${(json.main.temp - 273.15).toFixed(2)}°`;
    temp_max.innerHTML = `MASSIMA: ${(json.main.temp_max - 273.15).toFixed(2)}°`;
    city_name.innerHTML = json.name;
    lat.innerHTML = `LATITUDINE: ${json.coord.lat}`;
    lon.innerHTML = `LONGITUDINE: ${json.coord.lon}`;
    description.innerHTML = `${json.weather[0].description}`;
    sunrise.innerHTML = `ALBA - ${new Date(json.sys.sunrise * 1000).toLocaleTimeString('it-IT')}`
    sunset.innerHTML = `TRAMONTO - ${new Date(json.sys.sunset * 1000).toLocaleTimeString('it-IT')}`
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${json.weather[0].icon}.png`)

    let url;
    if(json.clouds.all < 40){
        url = 'url(./media/sun.jpg)';
    } else if(json.clouds.all < 80){
        url = 'url(./media/cloud.jpg)';
    } else{
        url = 'url(./media/rain.jpg)';
    }

    cards.forEach(card =>{
        card.style.backgroundImage = url;
    })
    console.log(json);
}