import { lazy, Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import { Routes, Route } from 'react-router-dom'

import AppHeader from './components/AppHeader'
import LoadingPage from './pages/LoadingPage'
import PageNotFound from './pages/PageNotFound'
// import MainPage from './pages/MainPage'
// import CountryPage from './pages/CountryPage'

const MainPage = lazy(() => import("./pages/MainPage"))
const CountryPage = lazy(() => import("./pages/CountryPage"))

import './App.css'



function App() {

  return(
    <>
    <RecoilRoot>
      <AppHeader />
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:countryId" element={<CountryPage />} />
            <Route path="*" element ={<PageNotFound />} />
          </Routes>
        </Suspense>
    </RecoilRoot>
    </>
  ) 
}

export default App

