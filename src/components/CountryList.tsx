import { useRecoilValue } from "recoil";
import { searchCountryValue, searchByRegion } from "./atoms";
import { useFetchCountryData } from '../hooks/useFetchCountryData'

import { CountryData } from "../types/CountryData"
import CountryCard from "./CountryCard"
import Navigation from './Navigation'

import "./CountryList.css"

const CountryList = () => {

const searchValue = useRecoilValue(searchCountryValue)
const regionValue = useRecoilValue(searchByRegion)
const searchRegExp = new RegExp(`(^${searchValue})|(\\s${searchValue})`, "i")

const countriesQuery = useFetchCountryData()

      const isError = countriesQuery.isError
      const error = countriesQuery.error
      const isLoading = countriesQuery.isLoading
      const data = countriesQuery.data as CountryData[]
    
      if (isLoading) return <h2>Loading...</h2> 
      if (isError) return <h2>{JSON.stringify(error)}</h2>

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
                    id={card.alpha3Code} 
                />
            )
        })

        return (
            <>
            <Navigation />
             <main className='country-list' key={'countryList'}>
                {countries}
            </main> 
            </>
      )
      
}

export default CountryList