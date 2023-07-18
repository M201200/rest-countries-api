import { useQuery } from 'react-query'

export const useFetchCountryData = (id = '') => {
    const countryData = useQuery({
    queryKey: [`countriesData ${id}`],
    queryFn: () =>
      fetch('./data/data.json')
            .then((res) => res.json())
  })
  
  return countryData
}

