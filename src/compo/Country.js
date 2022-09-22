import { useCountry } from "../context/Country";
import React from "react";

function Country() {
    const {ulkeler, country, setCountry } = useCountry()
  return (
    <select value={country} onChange={(e)=> setCountry(e.target.value)}>
        <option hidden defaultValue={true}>Select one...</option>
        {  ulkeler.map((e, i) => 
         <option key={i}>{e}</option>
     )}
    </select>
  )
}

export default React.memo(Country)