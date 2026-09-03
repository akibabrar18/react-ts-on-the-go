import Country from "../Country/Country";
import type { CountryType } from "../type"
import { use, useState } from "react";
import './Countries.css'
export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const [visitedCountries, setVisitedCountries]= useState<CountryType[]>([]);

    const countries=use(countriesPromise);

    const handleVisitedCountry=(country: CountryType):void=>{
        const exists =visitedCountries.find(c=>c.ccn3.ccn3!==country.ccn3.ccn3)
        if(exists){
            const remainingVisitedCountries=visitedCountries.filter(c=>c!==country);
            setVisitedCountries(remainingVisitedCountries);
        }
        else{
            const newVisitedCountries=[...visitedCountries,country];
            setVisitedCountries(newVisitedCountries);
        }
    }
    
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <h4>Visited Countries: {visitedCountries.length}</h4>
            <div className="visitedFlag">
                {
                    visitedCountries.map(country=><img key={country.ccn3.ccn3} src={country.flags.flags.png}></img>)
                }
            </div>
                <div className="countries">
                    {
                    countries.map(country=> <Country key={country.ccn3.ccn3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
                    }
                </div>
        </div>
    )
}