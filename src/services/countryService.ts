import { getItem, setItem } from "../utils/localStorage";

const COUNTRY_LIST_URL = 'https://restcountries.com/v3.1/all?fields=name,flags'

export const fetchCountryData = async () => {
  const cachedCountryData = getItem('countryList')
  if (!cachedCountryData) {
    try {
      const response = await fetch(COUNTRY_LIST_URL) //Pointe 1. is using axios necessary? 
      const countryData = await response.json()
      setItem('countryList', countryData)
      return countryData;
    } catch (error) {
      console.log(error)
      return []
    }
  }
}