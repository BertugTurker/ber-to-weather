import { useCountry } from "../context/Country";
import React, {useEffect, useState} from "react";
import usflag from "../flags/usa.png"
import trflag from "../flags/turk.png"

function Rapor() {
    const {country, state, city} = useCountry()
    const [tendays, setTendays] = useState([])

    useEffect(()=> {
        setTendays([])
    }, [country])

    useEffect(()=> {
        if(city !== "" || state !== "") {
            const hava = fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city ? `${city},tr` : `${state},us&units=I`}&key=a21edf4d85ef4d3c98254dce2c0e5ad5&days=7`)
            .then(response => response.json())

            Promise.all([hava])
            .then(async response => setTendays(response[0].data))
            .catch(err => console.error(err));
        }
    }, [ city, state])

  return (
    <div>
        <h2 className="flex gap">{country}</h2>
        { country === "USA" && <img className="icons" src={usflag} alt="flag"/>}
        { country === "Turkey" && <img className="icons" src={trflag} alt="flag"/>}
        <h4>{country === "USA" ? state : city}</h4>
        <div className="flex gap">
        { tendays.length > 0 ? tendays.map((e,i) => 
            <div className="cart" key={i}>
                <div>{((new Date(e.valid_date)).toDateString()).slice(0,10)}</div>
                <img className="icons" src={`https://www.weatherbit.io/static/img/icons/${e.weather.icon}.png`} alt="weather-icon"/>
                <div>{e.weather.description}</div>
                <div className="flex">
                    <div><strong>{Math.round(e.max_temp)}{city ? "°C": "°F"}</strong></div>/
                    <div>{Math.round(e.min_temp)}{city ? "°C": "°F"}</div>
                </div>
            </div>
        ) : null
        }
        </div>
    </div>
  )
}

export default React.memo(Rapor)