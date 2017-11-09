import React,{Component} from 'react';
import SearchBar from '../container/searchBar';
import Cards from '../container/cards';

export default class GliphyApp extends Component{
    render(){
        return (
            <div>
                <h3>Glify App</h3>
                 <p>This app makes an API call to Glify, fetches the data relevant to the search terms and display's the result. </p>
                 <SearchBar />
                 <Cards />
            </div>
        );
    }
}
