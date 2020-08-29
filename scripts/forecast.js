const apiKey = 'n1OuV9wrah0LCO4bbBwAtRYAti1DE2SE';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

const getWeather = async (cityKey) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`;
    const query = `?apikey=${apiKey}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}