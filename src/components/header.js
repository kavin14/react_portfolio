import React,{Component} from 'react';
import { Link } from 'react-router-dom';

export default class HeaderSection extends Component {
    render(){
        var headerLogoStyle = {
            marginLeft : "10px"
        }
        return (
            <div>
                <nav className="nav red">
                    <div className="nav-wrapper ">
                    <a href="#" style={headerLogoStyle}>Kavin Premkumar</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/aboutme'> About Me </Link></li>
                        <li><Link to='/weatherApp'>Weather-App</Link></li>
                        <li><Link to='/glify'>Gliphy</Link></li>    
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}