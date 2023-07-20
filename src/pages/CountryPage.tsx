import { NavLink, useParams } from "react-router-dom"
import { CountryData } from "../data/CountryData"
import "./CountryPage.css"

export default function CountryPage() {

const { countryId } = useParams()

const data = CountryData
const currentCountryData = data.find(country => country.name === countryId)!

const currentCountryBorders = currentCountryData.borders
const borderCountries = data.filter(country => currentCountryBorders?.includes(country.alpha3Code))
                            .map(country => {
                return <NavLink to={`/${country.name}`} key={country.name}>{country.name} </NavLink>
            })

function toFormat (property?: string | string[]) {
    if(typeof property === 'undefined' || !property.length) return "Not found"
    if(property instanceof Array) return property.join(', ')
    return property
}

  return (
        <main className='country-page' key={currentCountryData.name}>

        <div>
            <NavLink to={"/"} key={"'countryList'"}>Back</NavLink>

            <picture>
                <img src={currentCountryData.flags?.svg} alt="country-flag" />
            </picture>
        </div>

        <section>
            <h2>{currentCountryData.name}</h2>
        <div className="country-info">
            <div className="country-info-main">
                <p>Native name: {toFormat(currentCountryData.nativeName)}</p>
                <p>Population: {currentCountryData.population?.toLocaleString()}</p>
                <p>Region: {toFormat(currentCountryData.region)}</p>
                <p>Sub Region: {toFormat(currentCountryData.subregion)}</p>
                <p>Capital: {toFormat(currentCountryData.capital)}</p>
            </div>
            <div className="country-info-additional">
                <p>Top Level Domain: {toFormat(currentCountryData.topLevelDomain)}</p>
                <p>Currencies: {toFormat(currentCountryData.currencies?.map(currency => currency.name))}</p>
                <p>Languages: {toFormat(currentCountryData.languages?.map(lang => lang.name))}</p>
            </div>
        </div>
        
        <div className="country-borders">
            <p>Border Countries: {borderCountries?.length? borderCountries: "None"}</p>
        </div>
        </section>

        </main>
        )

}
