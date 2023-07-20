import Navigation from "../components/Navigation"
import CountryList from "../components/CountryList"

import "./MainPage.css"

const MainPage = () => {
    return (
        <>
            <Navigation />
            <main className='main-page' key={'main-page'}>
                <CountryList />
            </main> 
            </>
    )
}

export default MainPage