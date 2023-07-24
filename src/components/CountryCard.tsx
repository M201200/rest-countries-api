import LazyLoad from "react-lazy-load"
import AppLink from "./AppLink"
import "./CountryCard.css"

const CountryCard = ({flag = '/', 
                      name = 'Not found', 
                      population = 'Not found', 
                      region = 'Not found', 
                      capital = 'Not found',
                      id = 'Not found'} = {}) => {
    return (
            <div className="country-card">
                <AppLink to={`/${id}`}>
                <LazyLoad offset={300}>
                    <img src={flag} alt="country-flag" />
                </LazyLoad>
                <section>
                    <h2>{name}</h2>
                    <p><b>Population:</b> {population}</p>
                    <p><b>Region:</b> {region}</p>
                    <p><b>Capital:</b> {capital}</p>
                </section>
            </AppLink>
            </div>
      )
}

export default CountryCard