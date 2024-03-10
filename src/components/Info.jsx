import React, {useState} from 'react';
import './Info.css'


const Info = ({weatherData}) => {
    console.log(weatherData)
    return (
        <div>
            <h2>Temperature: {weatherData? weatherData.main.temp : "0"}</h2>
            <h2>Feels Like: {weatherData? weatherData.main.feels_like : "0"}</h2>
            <h2>Pressure: {weatherData? weatherData.main.pressure : "0"}</h2>
        </div>

    );
};

export default Info;