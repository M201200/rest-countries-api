import {NavLink } from "react-router-dom"

const CountryCard = ({flag = '/', 
                      name = 'Not found', 
                      population = 'Not found', 
                      region = 'Not found', 
                      capital = 'Not found',
                      id = 'Not found'} = {}) => {
    return (
        <>
        <NavLink to={`/${id}`}>
            <div className="country-card">
                <picture>
                    <img src={flag} alt="country-flag" />
                </picture>
                <section>
                    <h3>{name}</h3>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Capital: {capital}</p>
                </section>
            </div>
        </NavLink>
        </>  
      )
}

export default CountryCard