import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import AppHeader from './components/AppHeader.tsx'
import MainPage from './pages/MainPage.tsx'
const CountryPage = lazy(() => import("./pages/CountryPage.tsx"))

import LoadingPage from './pages/LoadingPage.tsx'
const PageNotFound = lazy(() => import("./pages/PageNotFound.tsx"))

function App() {

  return(
    <>
    <RecoilRoot>
      <AppHeader />
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/countries/:countryId" element={<CountryPage />} />
            <Route path="/*" element ={<PageNotFound />} />
          </Routes>
        </Suspense>
    </RecoilRoot>
    </>
  ) 
}

export default App

