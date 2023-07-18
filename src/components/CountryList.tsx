import { useFetchCountryData } from '../hooks/useFetchCountryData'
import { CountryData } from "../types/CountryData"
import CountryCard from "./CountryCard"
import "./CountryList.css"

const CountryList = () => {

const countriesQuery = useFetchCountryData()

      const isError = countriesQuery.isError
      const error = countriesQuery.error
      const isLoading = countriesQuery.isLoading
      const data = countriesQuery.data as CountryData[]
    
      if (isLoading) return <h2>Loading...</h2> 
      if (isError) return <h2>{JSON.stringify(error)}</h2>

      const countries = data.map((card) => {
            return (
                <CountryCard 
                    key={card.alpha3Code} 
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
            <main className='country-list' key={'countryList'}>
                {countries}
            </main>
      )
      
}

export default CountryList