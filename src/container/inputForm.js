import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {homePageFormState} from '../actions/index.js'

class GetInputForm extends Component{
    constructor(props){
        super(props)
         this.state = {
            welcome : "Hey There :)",
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
        return (
            <div>
                  <h5> {this.state.welcome} </h5>
                  <h6 className="left"> Thank you !! for visiting my portfolio page. I built this website to demostrate my skills in React Js,
                      along with other libraries which belong to this eco System like Redux, React Router, React promise, axios etc. 
                      <br />
                      <br/>
                      Just a brief note about me I am a Engineer with 
                      5 years of experience in software Developement/DevOps. I also have Master's degree in Management Information Systems and Bachelor's degree in Computer Science.
                      
                      if your interested in knowing more please hit the contact me button and drop me an email :)
                      </h6>    
                  <input type="text" value = {this.state.term} onChange={this.onInputChange} placeholder="Your name"/>
                  <button className="btn btn-primary" onClick = {this.onSubmitClicked}> Contact Me </button>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(GetInputForm);
function mapDispatchToProps(dispatch){
    return bindActionCreators({homePageFormState},dispatch);
}