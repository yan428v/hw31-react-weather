import React, {useState} from 'react';
import {api_key, base_url} from "../constants.jsx";
import './Form.css'
const Form = ({setWeatherData, setError, setCity, city}) => {

    const handleChange = e => {
        setCity(e.target.value);
    }

    async function handleClicksSend() {
        try {
            console.log(city)
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            console.log(response)
            if(response.status !== 200) {
                setError(true);
                return;
            }
            setError(false);
            const data = await response.json();
            console.log(data);
            setWeatherData(data);
        }

        catch (e){
            console.log(e.code)
            setError(true);
        }
    }

    return (
        <form className={"form-container"}>
            <input className={"setCity"} placeholder={"City"} type={"text"} onChange={handleChange}/>
            <button className={"submit-button"} type={"button"} onClick={handleClicksSend}>GET TEMPERATURE</button>
        </form>
    );
};

export default Form;

