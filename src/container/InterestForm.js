import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {homePageFormState} from '../actions/index.js'

class GetInterestForm extends Component{
    constructor(props){
        super(props)
         this.state = {
            welcome : `Appreciate your interest, ${this.props.userName}`,
            term : ""
        } 
        this.onSubmitClicked = this.onSubmitClicked.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }
     onSubmitClicked(event){
        this.props.homePageFormState([true,this.state.term])
    }
     onInputChange(event){
     this.setState({term : event.target.value})
    }
    render(){
        return (
            <div>
                  <h5> {this.state.welcome} </h5>   
                    <div className="row">
                        <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input id="icon_prefix" type="text" className="validate" />
                            <label for="icon_prefix">Your Email</label>
                            </div>
                            <div className="input-field col s12">
                                 <i className="material-icons prefix">event_note</i>
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label for="textarea1">Message</label>
                                </div>
                            </div>
                           <button className="btn">Send</button>
                        </form>
                    </div>
                        
            </div>
        )
    }
}

export default connect(maptStateToProps,mapDispatchToProps)(GetInterestForm);
function mapDispatchToProps(dispatch){
    return bindActionCreators({homePageFormState},dispatch);
}
function maptStateToProps({formStateReducer}){
    console.log(formStateReducer[1])
    return {userName : formStateReducer[1]}
}