import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {homePageFormState} from '../actions/index.js'
import GetInputForm from './inputForm.js';
import GetInterestForm from './InterestForm.js'
import '../style/style.css'
import logo from '../style/logo.svg'
class Visitor extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let cardStyle = {
            padding : "15px",
            marginTop: " 50px"
        }
        let imgStyle = {
            height: '100%',
            width: '100%',
            objectFit: 'contain'
        }
        return(
        <div className="row center">  
            <div className="col " style = {cardStyle}>  
            <div className="App-logo">
                <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="" style={imgStyle}/> 
            </div>    
                {(this.props.isInputForm == false) ? <GetInterestForm/> : <GetInputForm />}
             </div>
        </div>
        )
    }
}

export default connect(maptStateToProps)(Visitor);
function maptStateToProps({formStateReducer}){
    console.log(formStateReducer)
    return {isInputForm : formStateReducer[0]}
}
