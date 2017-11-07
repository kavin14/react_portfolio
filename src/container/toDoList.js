import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addToDo,move} from '../actions/index.js'
import {bindActionCreators} from 'redux';

class ToDo extends Component {
    constructor(props){
        super(props)
        this.state = {
            term : ""
        }
        this.onTextChange = this.onTextChange.bind(this)
    }
    onTextChange(event){
        this.setState({term:event.target.value})
    }

    render (){
       var cardStyle = {
           padding : "10px"
       } 
       var btnStyle = {
           marginRight: "15px"
       }
       return( <div>
            <input type="text" value={this.state.term} onChange={this.onTextChange } placeholder="start adding your tasks"/>
            <button onClick = {() => this.props.addToDo(this.state.term)} className="btn">Add</button>
            <ol>
                {this.props.toDoReducer.map(function(el,i){
                    return <div className = "row  card" style={cardStyle}>
                    <ul>
                        <div className="col valign-wrapper">
                            {el}
                        </div>
               
                         <button onClick={() => this.props.move(i,"+")} className="btn right"  >Up  </button>
                         <button onClick={() => this.props.move(i,"-")} className="btn right" style={btnStyle} >down</button>
                         
                         
                    </ul>
                    </div>
                },this)}
 
            </ol>
        </div>)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDo);

function mapStateToProps({toDoReducer}){
    console.log("kavin" + toDoReducer)
    return {toDoReducer};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToDo,move},dispatch);
}
