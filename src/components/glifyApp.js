import React,{Component} from 'react';
import SearchBar from '../container/searchBar';
import Cards from '../container/cards';

export default class GliphyApp extends Component{
    render(){
        return (
            <div>
                 <SearchBar />
                 <Cards />
            </div>
        );
    }
}
