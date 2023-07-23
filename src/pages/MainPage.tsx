import CountryFilter from "../components/CountryFilter"
import CountryList from "../components/CountryList"

import "./MainPage.css"

const MainPage = () => {
    return (
        <>
            <CountryFilter />
            <main className='main-page' key={'main-page'}>
                <CountryList />
            </main> 
        </>
    )
}

export default MainPage