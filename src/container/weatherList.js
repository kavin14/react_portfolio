import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines,SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {

    renderWeather(cityData){
            let dataListStyle = {
                paddingTop: "20px"
    }
        return (
  
        <tr key={cityData.city.name} className="z-depth-1" style={dataListStyle}>
            <td>{cityData.city.name}</td>
            <td>
                <Sparklines data={cityData.list.map(data => data.main.temp)} height={80}>
                     <SparklinesLine color="black" />
                </Sparklines>
            </td>
              <td>
                  <Sparklines data={cityData.list.map(data => data.main.pressure)} height={100}>
                     <SparklinesLine color="green" />
                </Sparklines>
              </td>
              <td>
                  <Sparklines data={cityData.list.map(data => data.main.humidity)} height={100}>
                     <SparklinesLine color="blue" />
                </Sparklines>
              </td>
        </tr>
        )
    }
    render(){
        return ( 

            <table className = "table">
                <thead> 
                    <tr>    
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody> 
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>

        )
    }
}

function mapStateToProps({weather}){

    return {weather};
}

export default connect(mapStateToProps)(WeatherList);