import { useCountry } from "../context/Country";
import React, {useEffect, useState} from "react";

function Rapor() {
    const {country, state, city} = useCountry()
    const [apiData, setapiData] = useState({})
    const [tendays, setTendays] = useState([])

    useEffect(()=> {
        setTendays([])
    }, [country])

    useEffect(()=> {
        if(city !== "" || state !== "") {
            fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city ? `${city},tr` : `${state},us`}&key=a21edf4d85ef4d3c98254dce2c0e5ad5&days=7`)
            .then(response => response.json())
            .then(response => {
                setapiData(response)
                setTendays(response.data)
            })
            .catch(err => console.error(err));
        }
    }, [ city, state])
    if(state.length > 0 || city.length > 0){
        console.log(tendays)
    };
  return (
    <div className="flex">
        <h1>Rapor</h1>
        <h2>{country}{city || state ? apiData.country_code : null}</h2>
        <p>{country === "usa" ? state : city}</p>
        { tendays.length > 0 ? tendays.map((e,i) => 
            <div key={i}>
                <h3>{`date: ${e.valid_date.slice(6)}`}</h3>
                <div>{Math.round(e.max_temp)}C</div>
                <div>{Math.round(e.min_temp)}C</div>
                <div>{e.weather.description}</div>
            </div>
        ) : null
        }
    </div>
  )
}

export default React.memo(Rapor)