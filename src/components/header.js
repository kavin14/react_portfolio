import React,{Component} from 'react';
import { Link } from 'react-router-dom';


export default class HeaderSection extends Component {
    constructor(props){
        super(props)
    }

    render(){
        var headerLogoStyle = {
            marginLeft : "10px"
        }
        return (
            <div>
            <nav>
    <div className="nav-wrapper red">
      <a href="#!" >Kavin Premkumar</a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><Link to='/'> Home </Link></li>
                        <li><Link to='/aboutme'> Skills </Link></li>
                        <li><Link to='/weatherApp'>Weather-App</Link></li>
                        <li><Link to='/glify'>Gliphy-app</Link></li>   
                        <li><Link to='/todo'>ToDo-App</Link></li> 
      </ul>
      <ul className="side-nav" id="mobile-demo">
       <li><Link to='/'> Home </Link></li>
                        <li><Link to='/aboutme'> Skills </Link></li>
                        <li><Link to='/weatherApp'>Weather-App</Link></li>
                        <li><Link to='/glify'>Gliphy-app</Link></li>   
                        <li><Link to='/todo'>ToDo-App</Link></li> 
      </ul>
    </div>
  </nav>
  </div>
        );
    }
}


{/*<div>
                <nav className="nav red">
                    <div className="nav-wrapper ">
                    <a href="#" style={headerLogoStyle}>Kavin Premkumar</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/'> Home </Link></li>
                        <li><Link to='/aboutme'> Skills </Link></li>
                        <li><Link to='/weatherApp'>Weather-App</Link></li>
                        <li><Link to='/glify'>Gliphy-app</Link></li>   
                        <li><Link to='/todo'>ToDo-App</Link></li> 
                    </ul>
                    </div>
                </nav>
            </div>*/}