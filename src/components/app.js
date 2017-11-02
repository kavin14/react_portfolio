import React, { Component } from 'react';
import SearchBar from '../container/searchBar';
import weatherApp from './weatherApp';
import HeaderSection from './header';
import GliphyApp from './glifyApp';

import { BrowserRouter, Route, Link ,Switch} from 'react-router-dom';

/* <div className="container">
          <div><br />
            <h1 class="left-align">Weather Forecast</h1>
          </div>
          <SearchBar />
          <WeatherList />
          */
export  class AboutMe extends Component{
  render(){
    return (
      <div>
        <h1>About me</h1>
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        
        <div> 
        <BrowserRouter>
        <div>
          <HeaderSection />
          <div className="container"> 
          <Switch>
            <Route path='/weatherApp' component={weatherApp}> </Route>
            <Route path='/aboutme' component={AboutMe}> </Route>
            <Route path='/glify' component={GliphyApp}> </Route>
          </Switch>
          </div> 
         </div> 
        </BrowserRouter>
        </div>
        </div>
    );
  }
}
