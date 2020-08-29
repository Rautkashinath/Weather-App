const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const timeOfDay = document.querySelector('.time');

const getCityAndWeatherDetails = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails, weather };
};

const displayCityWeatherDetails = (data) => {
    const { cityDetails, weather } = data;

    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div> 
        <div class="display-4 my-4">
            <span>temp</span>
            <span>${weather.Temperature.Metric.Value}&deg;C</span>
        </div>`;
    
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    
    //check time of day and set the respective image
    if(weather.IsDayTime){
        timeOfDay.setAttribute('src', 'images/day.jpg');
    }
    else{
        timeOfDay.setAttribute('src', 'images/night.jpg');
    }
};

cityForm.addEventListener('submit',e => {
    e.preventDefault();

    // get the city name from input
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // get the city and wheter details
    const data = getCityAndWeatherDetails(city).then(data => {
        // display the weather details on page
        return displayCityWeatherDetails(data);
    }).catch(err => console.log('Something went wrong'));
});