import { RecoilRoot } from 'recoil'
import { Routes, Route } from 'react-router-dom'

import AppHeader from './components/AppHeader'
import MainPage from './pages/MainPage'
import CountryPage from './pages/CountryPage'

import './App.css'


function App() {

  return(
    <>
    <RecoilRoot>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:countryId" element={<CountryPage />} />
        <Route path="*" element ={<h1>Not found</h1>} />
      </Routes>
    </RecoilRoot>
    </>
  ) 
}

export default App

