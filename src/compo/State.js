import React, { useEffect, useState } from 'react'
import { useCountry } from "../context/Country";

function State() {
     const {country, state, setState} = useCountry()
     const [statesapi, setStatesapi] = useState([])
    
     useEffect(()=>{
      if (country === "usa" && statesapi.length<1) {
        console.log("çalıştı");
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '8c73956fb6msh6b90576f3657f3ep1359ecjsnbf18c1ba2f85',
            'X-RapidAPI-Host': 'referential.p.rapidapi.com'
          }
        };
       
        fetch('https://referential.p.rapidapi.com/v1/state?fields=iso_a2&iso_a2=us&lang=en&limit=250', options)
          .then(response => response.json())
          .then(response => setStatesapi(response))
          .catch(err => console.error(err))
      }
     },[country, statesapi.length])
     
  return (
  <div>
      {
      country === "usa" &&
      <select
        value={state} onChange={(e)=> setState(e.target.value)}>
          <option hidden defaultValue={true}>Select one...</option>
          {
          statesapi.map((e, i) => 
          <option key={i} value={e.value}>{e.value} {JSON.stringify(e.key)}</option>
          )
          }
      </select>
    }
  </div>
  )
}

export default React.memo(State)