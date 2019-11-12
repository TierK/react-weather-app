import React from 'react';
import './App.css';
import Forecast1Day from './Forecast1Day';


/**
 * "day": 2,
"temperature": 31.6,
"icon": "1",
"description": "Sunny"
**/


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            days: []
        };
    }

    componentDidMount(){
        fetch("https://my-json-server.typicode.com/evyros/react-weather-app/forecast")
            .then(res => res.json())
            .then(days => {
                this.setState({days});
            });
    }
    
    render() {
        const weekdays = [
            'Sunday', 'Monday ', 'Tuesday', 'Wednesday', 
            'Thursday', 'Friday', 'Saturday'
        ];

        return (
            <div className="App">

                {
                this.state.days.map(oneDay =>{
                    return (
                        <Forecast1Day
                    weekDay = {weekdays[oneDay.day]}
                    icon = {`https://raw.githubusercontent.com/TierK/react-weather-app/f7a387d768773b7c2221bf06352fdea786f87608/src/icons/${oneDay.icon}.png`}
                    temperature = {oneDay.temperature + '°'}
                    description = {oneDay.description}
                />
                    );
                })
                
            }</div>
        );
    }

}

export default App;
