import React, { createContext, useState, useContext  } from 'react'
const CountryContext = createContext();

export const CountryProvider = ({children}) => {
    const ulkeler = ["Turkey", "USA"]
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    

    const values = {country, setCountry, ulkeler, state, setState, city, setCity};

    return <CountryContext.Provider value={values}>{children}</CountryContext.Provider>
};

export const useCountry = () => useContext(CountryContext);