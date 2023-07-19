// import { useState } from "react";
import { searchCountryValue, searchByRegion } from "./atoms";
import { useRecoilState } from "recoil";

const Navigation = () => {

const [inputValue, setInputValue]  = useRecoilState(searchCountryValue)
const [region, setRegion] = useRecoilState(searchByRegion)

    return (
        <nav className="navigation">

            <input type="text" 
            placeholder="Search for a country"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            />
            <div className="region-select">
                <label htmlFor="regions">Filter by Region</label>
            <select name="regions" id="regions" value={region} onChange={event => setRegion(event.target.value)}>
                <option value="">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>    
            </div>
            
        </nav>
        
    )
}

export default Navigation