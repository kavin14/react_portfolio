import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {homePageFormState} from '../actions/index.js'

class GetInputForm extends Component{
    constructor(props){
        super(props)
         this.state = {
            welcome : "Hi!",
            term : ""
        } 
        this.onSubmitClicked = this.onSubmitClicked.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }
     onSubmitClicked(event){
        this.props.homePageFormState([false,this.state.term])
    }
     onInputChange(event){
     this.setState({term : event.target.value})
    }
    render(){
        var imgStyle = {
            height : '30px',
            width: '30px',
            objectFit: 'contain'
        }
        return (
            <div>
                  <h5> {this.state.welcome} </h5>
                  <h6 className="left"> 
Thanks for visiting my portfolio page. I built this website to demonstrate my skills in React Js, along with other libraries which belong to this ecosystem such as Redux, React Router, React promise, Axios etc.
<br/> <br/>
About me: I'm a bay area based software engineer with 5 years of experience in software Developement/DevOps. I also have Master's degree in Management Information Systems and Bachelor's degree in Computer Science. To know more or to reach out to me, please hit the contact me button and drop me an message on linkedIn. Thanks! - Kavin Premkumar
                <br/> 
                <br/> 
       
            </h6>
            <div >

                 <a href="https://www.linkedin.com/in/kavinisaac/" target="_blank">
                  
                 <div><button className="btn btn-primary">Contact me</button></div>
                 </a>   
                 
            </div>
           
                  {/*<input type="text" value = {this.state.term} onChange={this.onInputChange} placeholder="Your name"/>
                  <button className="btn btn-primary" onClick = {this.onSubmitClicked}> Contact Me </button>*/}
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(GetInputForm);
function mapDispatchToProps(dispatch){
    return bindActionCreators({homePageFormState},dispatch);
}