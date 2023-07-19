import { RecoilRoot } from 'recoil'
import './App.css'
import AppHeader from './components/AppHeader'
import CountryList from './components/CountryList'
import CountryPage from './pages/CountryPage'
import { Routes, Route } from 'react-router-dom'


function App() {


  return(
    <>
    <RecoilRoot>
      <AppHeader />
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/:countryId" element={<CountryPage />} />
        <Route path="*" element ={<h1>Not found</h1>} />
      </Routes>
    </RecoilRoot>
    </>
  ) 
}

export default App

