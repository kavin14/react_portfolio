import axios from 'axios';

const API_KEY = "c3762731f70e99861d48da976f10cee9";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
   
    return {
        type : FETCH_WEATHER,
        payload: request
    }
}


const GLIPHY_API_KEY = `bz0zbUe3i1J57itQUefH8j5EHV45Si02`;
const GLIPHY_ROOT_URL = `http://api.giphy.com/v1/gifs/search?q=`;
export function postSearchTerm(data){
    const request = axios.get(`${GLIPHY_ROOT_URL}${data}&api_key=${GLIPHY_API_KEY}`)
    return {
        type : "SEARCH-TERM",
        payload : request
    }
}

export function resetFetchWeather(){
    return {
        type : "FETCH_WEATHER_RESET",
        payload: []
    }
}

export function resetGlifyList(){
    return {
        type : "GLIFY_RESET",
        payload: []
    }
}