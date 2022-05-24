//https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=3b5f7beea1c0e81e645fb60c1bb7320a

import "./style.css";
import WeatherCard from './weatherCard'
import { useState, useEffect } from "react"
function Temp() {

    const [search, setSearch] = useState("lucknow");
    const [tempInfo, setTempInfo] = useState({});

    const getWeather = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3b5f7beea1c0e81e645fb60c1bb7320a`

            const res = await fetch(url);
            const data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            setTempInfo(myNewWeatherInfo)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getWeather();
    }, []);
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm"
                        placeholder="search..."
                        autoFocus
                        id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}

                    />
                    <button className="searchButton" type="button" onClick={getWeather}>Search</button>
                </div>
            </div>

           <WeatherCard tempInfo={tempInfo}/>
        </>
    );
}

export default Temp;
