import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js';
import {postSearchTerm} from '../actions/index.js';
import {resetFetchWeather,resetGlifyList} from '../actions/index.js';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
constructor(props){
    super(props)
    this.state = {term : ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormReset = this.onFormReset.bind(this);
}
 onInputChange(event){
     this.setState({term : event.target.value})
 }
 onFormSubmit(event){
    event.preventDefault()
    if (this.props.forapp == "weatherapp"){
        this.props.fetchWeather(this.state.term)
    }else{
        this.props.postSearchTerm(this.state.term)
    }
    
    this.setState({term:''});
 }
 onFormReset(event){
    event.preventDefault()
     if (this.props.forapp == "weatherapp"){
        this.props.resetFetchWeather()
    }else{
        this.props.resetGlifyList()
    }
    
 }
    render(){
        var buttonStyle = {
            marginLeft : "10px"
        }
        return (
            <form className = "input-group" onSubmit={this.onFormSubmit} onReset={this.onFormReset}>
                <input type="text" 
                className="form-control"
                placeholder="Get forcast for city"
                value ={this.state.term}
                onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary" >Search</button>
                    <button type="reset" className ="btn btn-danger" style={buttonStyle}> Reset </button>
                </span>      
            </form>
        )
    }
}

export default connect(null,mapDispatchToProps)(SearchBar);

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather,postSearchTerm,resetFetchWeather,resetGlifyList},dispatch);
}