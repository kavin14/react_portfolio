import React,{Component} from 'react';
import {connect} from 'react-redux';

class Cards extends Component{

    renderHelper(items){
         var styles = {
            marginRight : '5px'
        }
        var divStyle = {
            width: "400px",
            display : 'inline-block',
            margin: '10px'
        }
        return (
            
            <div>
                {items.data.map((item) => 
                 <div className="card z-depth-4 col"  key = {item.id}>
                    <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={item.images.fixed_height.url}/>
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{item.slug}<i className="material-icons right">more_vert</i></span>
                    <p><a href={item.source_post_url}>{item.source_post_url}</a></p>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{item.slug}<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                
                )}
               
            </div>
        )
    }
    render(){
       // this.props.glify = (this.props.glify == null)? {} :  this.props.glify;
        console.log(this.props.glify);
        return (
            <div className="row">
                {this.props.glify.map(this.renderHelper)}
            </div>
        );
    }
}

export default connect (mapStateToProps)(Cards);

function mapStateToProps({glify}){
    return {glify};
}