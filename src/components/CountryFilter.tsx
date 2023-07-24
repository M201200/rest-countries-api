import { searchCountryValue, searchByRegion } from "../atoms/atoms";
import { useRecoilState } from "recoil";
import "./CountryFilter.css"

const CountryFilter = () => {

const [inputValue, setInputValue]  = useRecoilState(searchCountryValue)
const [region, setRegion] = useRecoilState(searchByRegion)

    return (
        <nav className="country-filter">

            <div className="search-input">
            <span>🔎︎</span>
            <input type="text" 
            placeholder="Search for a country"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            />  
            </div>
            
            <select name="regions" className="region-select" value={region} onChange={event => setRegion(event.target.value)}>
                <option value="">Filter by Region (All)</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>    
            
        </nav>
        
    )
}

export default CountryFilter