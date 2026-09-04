import { useState } from "react"
import type { CountryType } from "../type"
import './country.css'
export interface CountryProps {
    country: CountryType
    handleVisitedCountry: (country:CountryType)=>void
}

export default function Country({ country ,handleVisitedCountry}: CountryProps) {
    const [visited, setVisited] =useState<boolean>(false)
    const handleVisited=()=>{
        setVisited(!visited);
        handleVisitedCountry(country);
    }

    return (
        <div className={`country ${visited? 'country-visited':''}`}>
            <h3>{country.name.common}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p> Capital: {country.capital.capital}</p>
            <p> Population: {country.population.population}</p>
            <button onClick={handleVisited}>
                {visited? "Visited": "mark as Visited"}
            </button>
        </div>
    )
}