import { useCountry } from "../context/Country";
import React, {useEffect, useState} from "react";

function Rapor() {
    const {country, state, setState, city, setCity} = useCountry()
    const [temperature, setTempeture] = useState()
    
    useEffect(()=> {
        setTempeture()
        setCity("")
        setState("")
    }, [country])

    useEffect(()=> {
        const ayar = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': '8c73956fb6msh6b90576f3657f3ep1359ecjsnbf18c1ba2f85',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
  
    fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${state || city}&format=json&u=c`, ayar)
        .then(response => response.json())
        .then(response => setTempeture(response.current_observation.condition.temperature))
        .catch(err => console.error(err));    
    }, [ city, state])

  return (
    <div>
        <h1>Rapor</h1>
        <h2>{country}</h2>
        <p>{country === "usa" ? state : city}</p>
        <h2>{temperature}</h2>
    </div>
  )
}

export default React.memo(Rapor)