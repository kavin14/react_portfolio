import React,{Component} from 'react';
import SearchBar from '../container/searchBar';
import WeatherList from '../container/weatherList';

export default class WeatherApp extends Component{
    render(){
        return (
            <div>
                 <SearchBar forapp="weatherapp"/>
                 <WeatherList />
            </div>
        );
    }
}
