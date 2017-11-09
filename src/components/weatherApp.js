import React,{Component} from 'react';
import SearchBar from '../container/searchBar';
import WeatherList from '../container/weatherList';

export default class WeatherApp extends Component{
    render(){
        return (
            <div>
                 <h3>Weather App</h3>
                 <p>This app fetches weather data for cities in usa and represents the fluctuations in a graph </p>
                 
                 <SearchBar forapp="weatherapp"/>
                 <WeatherList />
            </div>
        );
    }
}
