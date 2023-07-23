import { useParams } from "react-router-dom"
import AppLink from "../components/AppLink"
import { CountryData } from "../data/CountryData"
import "./CountryPage.css"
import PageNotFound from "./PageNotFound"

export default function CountryPage() {

const { countryId } = useParams()

const data = CountryData
const currentCountryData = data.find(country => country.name === countryId)
if (typeof currentCountryData === "undefined") return <PageNotFound />

const currentCountryBorders = currentCountryData.borders
const borderCountries = data.filter(country => currentCountryBorders?.includes(country.alpha3Code))
                            .map(country => {
                return <AppLink to={`/${country.name}`} key={country.name}>{country.name}</AppLink>
            })

function toFormat (property?: string | string[]) {
    if(typeof property === 'undefined' || !property.length) return "Not found"
    if(property instanceof Array) return property.join(', ')
    return property
}

  return (
    <>
        <nav className="page-navigation">
        <AppLink to={"/"} key={"'countryList'"}>{"\u2190"} Back</AppLink>
        </nav>

        <main className='country-page' key={currentCountryData.name}>
            <picture>
                <img src={currentCountryData.flags?.svg} alt="country-flag" />
            </picture>

        <section>
            <h2>{currentCountryData.name}</h2>
        <div className="country-info">
            <div className="country-info-main">
                <p><b>Native name:</b> {toFormat(currentCountryData.nativeName)}</p>
                <p><b>Population:</b> {currentCountryData.population?.toLocaleString()}</p>
                <p><b>Region:</b> {toFormat(currentCountryData.region)}</p>
                <p><b>Sub Region:</b> {toFormat(currentCountryData.subregion)}</p>
                <p><b>Capital:</b> {toFormat(currentCountryData.capital)}</p>
            </div>
            <div className="country-info-additional">
                <p><b>Top Level Domain:</b> {toFormat(currentCountryData.topLevelDomain)}</p>
                <p><b>Currencies:</b> {toFormat(currentCountryData.currencies?.map(currency => currency.name))}</p>
                <p><b>Languages:</b> {toFormat(currentCountryData.languages?.map(lang => lang.name))}</p>
            </div>
        </div>
        
        <div className="country-borders">
            <b>Border Countries (land borders):</b> <span>{borderCountries?.length? borderCountries: "None"}</span>
        </div>
        </section>

        </main>
    </>
        )

}
