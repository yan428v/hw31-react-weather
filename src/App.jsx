import {useState} from 'react'
import './App.css'
import Form from "./components/Form.jsx";
import Info from "./components/Info.jsx";
import Error from "./components/Error.jsx";

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);
    const [city, setCity] = useState(null);


    return (
        <div className={"main"}>
            <Info weatherData={weatherData}/>
            {error && <Error city={city}/>}
            <Form setWeatherData={setWeatherData}
                  setError={setError}
                  setCity={setCity}
                  city={city}/>

        </div>
    )
}

export default App