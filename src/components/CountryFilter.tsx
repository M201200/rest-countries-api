import { searchCountryValue, searchByRegion, searchIcon } from "../atoms/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import "./CountryFilter.css"

const CountryFilter = () => {

const [inputValue, setInputValue]  = useRecoilState(searchCountryValue)
const [region, setRegion] = useRecoilState(searchByRegion)

const selectedSearchIcon = useRecoilValue(searchIcon)

    return (
        <nav className="country-filter">

            <div className="search-input">
            <img src={selectedSearchIcon} alt="" />
            <input type="text" 
            placeholder="Search for a country"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            />  
            </div>
            
            {/* <div className="region-select"> */}
            <select name="regions" className="region-select" value={region} onChange={event => setRegion(event.target.value)}>
                <option value="">Filter by Region (All)</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>    
            {/* </div> */}
            
        </nav>
        
    )
}

export default CountryFilter