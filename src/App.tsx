import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import AppHeader from './components/AppHeader'
import LoadingPage from './pages/LoadingPage'
import PageNotFound from './pages/PageNotFound'
import MainPage from './pages/MainPage'

const CountryPage = lazy(() => import("./pages/CountryPage"))

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

