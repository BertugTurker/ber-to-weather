import React, { useEffect, useState } from "react";
import { useCountry } from "../context/Country";

function City() {
    const {country, city, setCity} = useCountry();
    const [citiesapi, setCitiesapi] = useState([])
    
    useEffect(()=> {
      if (country === "Turkey" && citiesapi.length<1) {
        const cityFetch = 
        fetch('https://api-sehir.herokuapp.com/api/cities/')
        .then(response => response.json())

        Promise.all([cityFetch]).then(async response => setCitiesapi(response[0]))
        .catch(err => console.error(err))
      }
      
    }, [country, citiesapi.length])
    
  return (
    <div>
      {
      country === "Turkey" &&
      <select className='selectMenu'
        value={city} onChange={(e)=> setCity(e.target.value)}>
          <option hidden defaultValue={true}>Select city...</option>
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