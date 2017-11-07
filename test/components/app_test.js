import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});

/*
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {homePageFormState} from '../actions/index.js'
import {SearchBar} from './searchBar.js';

export default class Visitor extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let cardStyle = {
            padding : "20px",
            marginTop: " 50px"
        }
        let imgStyle = {
            height: '100%',
            width: '100%',
            objectFit: 'contain'
        }
        return(
        <div className="row center">  
            <div className="col s5 offset-s3 card" style = {cardStyle}>  
            <div className="App-logo">
                <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="" style={imgStyle}/> 
            </div>    
               <div> <SearchBar />   </div> 
             </div>
        </div>
        )
    }
}




class GetInterestForm extends Component{
    constructor(props){
        super(props)
         this.state = {
            welcome : "Enter Your interesr",
            term : ""
        } 
        this.onSubmitClicked = this.onSubmitClicked.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }
     onSubmitClicked(event){
        event.preventDefault();
        this.setState({
            welcome : `Interest, ${this.state.term[0].toUpperCase()}${this.state.term.slice(1)}`
        })
        this.props.homePageFormState(true)
    }
     onInputChange(event){
     this.setState({term : event.target.value})
    }
    render(){
        return (
            <div>
                  <h5> {this.state.welcome} </h5>
                  <input type="text" value = {this.state.term} onChange={this.onInputChange}/>
                  <button className="btn btn-primary" onClick = {this.onSubmitClicked}> submit </button>
            </div>
        )
    }
}

connect(null,mapDispatchToPropsI)(GetInterestForm);
function mapDispatchToPropsI(dispatch){
   return bindActionCreators({homePageFormState},dispatch);
}*/


/*class GetInputForm extends Component{
    constructor(props){
        super(props)
         this.state = {
            welcome : "Enter Your Name",
            term : ""
        } 
        this.onSubmitClicked = this.onSubmitClicked.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }
     onSubmitClicked(event){
        event.preventDefault();
        this.setState({
            welcome : `Welcome, ${this.state.term[0].toUpperCase()}${this.state.term.slice(1)}`
        })
    }
     onInputChange(event){
     this.setState({term : event.target.value})
    }
    render(){
        return (
            <div>
                  <h5> {this.state.welcome} </h5>
                  <input type="text" value = {this.state.term} onChange={this.onInputChange}/>
                  <button className="btn btn-primary" onClick = {this.onSubmitClicked}> submit </button>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(GetInputForm);
function mapDispatchToProps(dispatch){
    return bindActionCreators({homePageFormState},dispatch);
}*/