import { useRecoilValue } from "recoil";
import { searchCountryValue, searchByRegion } from "../atoms/atoms";

import { CountryData } from "../data/CountryData";
import CountryCard from "./CountryCard"

const CountryList = () => {

const searchValue = useRecoilValue(searchCountryValue)
const regionValue = useRecoilValue(searchByRegion)

const searchRegExp = new RegExp(`(^${searchValue})|(\\s${searchValue})`, "i")
const data = CountryData

let filteredData = searchValue? data.filter(country => searchRegExp.test(country.name)): data
filteredData = regionValue? filteredData.filter(country => country.region === regionValue): filteredData
      
      const countries = filteredData.map((card) => {
            return (
                <CountryCard 
                    key={card.name} 
                    flag={card.flags?.svg}
                    name={card.name}
                    population={card.population?.toLocaleString()}
                    region={card.region}
                    capital={card.capital}
                    id={card.name} 
                />
            )
        })

        return countries
      
}

export default CountryList