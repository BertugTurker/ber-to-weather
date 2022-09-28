import { useCountry } from "../context/Country";
import React from "react";

function Country() {
    const {ulkeler, country, setCountry, setState, setCity } = useCountry()
    const visa = (e) => {
       setCountry(e.target.value)
       e.target.value === "USA" ? setCity("") : setState("")
    }
  return (
    <select className='selectMenu'
      value={country} onChange={visa}>
        <option hidden defaultValue={true}>Select country...</option>
        {  ulkeler.map((e, i) => 
         <option key={i}>{e}</option>
     )}
    </select>
  )
}

export default React.memo(Country)