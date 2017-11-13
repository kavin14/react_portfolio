import React, { Component } from 'react';
import SearchBar from '../container/searchBar';
import weatherApp from './weatherApp';
import HeaderSection from './header';
import GliphyApp from './glifyApp';
import Visitor from '../container/visitor';
import ToDo from '../container/toDoList';
import { BrowserRouter, Route, Link ,Switch} from 'react-router-dom';

/* <div className="container">
          <div><br />
            <h1 class="left-align">Weather Forecast</h1>
          </div>
          <SearchBar />
          <WeatherList />
          */
export  class AboutMe extends Component{
  constructor(props){
    super(props)
    this.state ={
      frontEndSkills : [
        {URL : "https://cdn.worldvectorlogo.com/logos/react.svg",
        alt : "React"},
        {URL : "https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png",
        alt : "Redux"},
        {URL : "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        alt : "JavaScript"},
        {URL : "https://thenewboston.com/images/forum/logos/145efe2aab7ca9959397d6344180b658.png",
        alt : "HTML"},
        {URL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScR0AiszM3UPEAHcUwV4H3i1TiQjG5UlO2qbnLhLafPpbBPLm4Cw",
        alt : "CSS"},
        {URL : "https://www.w3schools.com/angular/pic_angular.jpg",
        alt : "Angular"},
        {URL : "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
        alt : "node.js"},
        {URL : "http://mean.io/wp-content/themes/twentysixteen-child/images/express.png",
        alt : "Express"},
        {URL : "https://redash.io/assets/images/temp/Mongo2.png",
        alt : "MongoDB"},
        {URL : "http://tapoueh.org/img/JSON.png",
        alt : "JSON"},
        {URL : "http://underscorejs.org/docs/images/underscore.png",
        alt : "underscore"},
        {URL : "https://spin.atomicobject.com/wp-content/uploads/20171003153036/github-logo.png",
        alt : "GitHub"},
        {URL : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Subversion_Logo.svg/1280px-Subversion_Logo.svg.png",
        alt : "SVN"},
        {URL : "https://www.cloudbees.com/sites/default/files/Jenkins_8.png",
        alt : "Jenkins"},
        {URL : "https://sdtimes.com/wp-content/uploads/2017/02/0228.sdt-aws.png",
        alt : "AWS"},
         {URL : "https://dt-cdn.net/assets/images/content/resources/docker-c-0e3b80d791.png",
        alt : "Docker"},
        {URL : "https://s3.amazonaws.com/cac-static-assets-prod/3.6.3/dist/migrationhub/images/product-jira-blue.svg",
        alt : "Jira"},
        {URL : "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/linux.jpg",
        alt : "Linux"},
         {URL : "https://ioshacker.com/wp-content/uploads/2016/04/macOS.jpg",
        alt : "MACOS"},
         {URL : "https://yt3.ggpht.com/-osp9sQ-_FPI/AAAAAAAAAAI/AAAAAAAAAAA/cT6zVAR80XQ/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
        alt : "windows"},
         {URL : "https://maven.apache.org/images/maven-logo-black-on-white.png",
        alt : "maven"},
         {URL : "https://images.sftcdn.net/images/t_optimized,f_auto/p/2f4c04f4-96d0-11e6-9830-00163ed833e7/3163796423/java-runtime-environment-logo.png",
        alt : "java"}
      ],
      practices:[
        {URL : "http://rapidsofttraining.com/wp-content/uploads/2017/02/DevOpsCICD.png",
        alt : "CI/CD"},
         {URL : "http://cdn.ttgtmedia.com/rms/onlineImages/software_quality-agile_software_dev_cycle_desktop.jpg",
        alt : "Agile"},
         {URL : "https://s-media-cache-ak0.pinimg.com/originals/71/26/cd/7126cdceaae0b3225e4af95d593a7236.png",
        alt : "java"}
      ]
    }
  }
  render(){
    let imgStyle = {
            height: '100%',
            width: '100%',
            objectFit: 'contain'
        }
     let divStyle = {
            height: '100px',
            width: '100px',
            margin: "5px"
        }   
    return (
      <div>
        <h3>Skills</h3>
        <div className="row">
        <div >
          {this.state.frontEndSkills.map((el)=>
            {return <div className="card col s1" style={divStyle}>
                <img src={el.URL} alt={el.alt} style={imgStyle}/>
            </div>
            }
          )}
          </div>
        </div>

        <h3>Practices</h3>
        <div className="row">
        <div >
          {this.state.practices.map((el)=>
            {return <div className="card col s2" style={divStyle}>
                <img src={el.URL} alt={el.alt} style={imgStyle}/>
            </div>
            }
          )}
          </div>
        </div>

      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <div > 
        <BrowserRouter>
        <div>
          <HeaderSection />
          <div className="container"> 
          <Switch>
            
            <Route path='/weatherApp' component={weatherApp}> </Route>
            <Route path='/aboutme' component={AboutMe}> </Route>
            <Route path='/glify' component={GliphyApp}> </Route>
            <Route path='/todo' component={ToDo}> </Route>
            <Route path='/' component={Visitor}> 
            <Route path="*" component={Visitor}></Route>
            </Route>
          </Switch>
          </div> 
         </div> 
        </BrowserRouter>
        </div>
        </div>
    );
  }
}
