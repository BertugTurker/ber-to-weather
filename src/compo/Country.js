import { useCountry } from "../context/Country";
import React from "react";

function Country() {
    const {ulkeler, country, setCountry, setState, setCity } = useCountry()
    const visa = (e) => {
       setCountry(e.target.value)
       e.target.value === "usa" ? setCity("") : setState("")
    }
  return (
    <select value={country} onChange={visa}>
        <option hidden defaultValue={true}>Select one...</option>
        {  ulkeler.map((e, i) => 
         <option key={i}>{e}</option>
     )}
    </select>
  )
}

export default React.memo(Country)