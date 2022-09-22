import React, { useEffect, useState } from "react";
import { useCountry } from "../context/Country";

function City() {
    const {country, city, setCity} = useCountry();
    const [citiesapi, setCitiesapi] = useState([])
    
    useEffect(()=> {
        fetch('http://api-sehir.herokuapp.com/api/cities/')
        .then(response => response.json())
        .then(response => setCitiesapi(response))
        .catch(err => console.error(err));
    }, [country])
    
  return (
    <div>
      {
      country === "turkey" &&
      <select
        value={city} onChange={(e)=> setCity(e.target.value)}>
          <option hidden defaultValue={true}>Select one...</option>
          {
          citiesapi.map((e, i) => 
          <option key={i}>{e["Sehir-Bilgileri"].sehir}</option>
          )
          }
      </select>
    }
  </div>
  )
}

export default React.memo(City)