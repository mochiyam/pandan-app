import { useState, useEffect, cache } from "react"; // cache...
import { fetchCountryData } from "../services/countryService";
import { getCountryNameAndFlag } from "../utils/countryUtils";

type CountryProps = { //hm..
  name: string;
  flag: string;
}

type CountryData = { // HMMM.....
  name: { common: string };
  flags: { png: string };
};

// TODOs:
// 1. Bug: If you refresh the page, and click on the country button, it will not generate flag
// 2. Feels like unnecssary typs CountryProps and CountryData
// 3. Shuffle the flags in the very beginning and just pop the list
// 4. Create buttons to actually guess the flag
// ...
// number-what-not. Make it prettyyy~

const Main = () => {
  const [countryData, setCountryData] = useState<CountryData[]>([]); 
  const [currentCountry, setCurrentCountry] = useState<CountryProps | null>(null); // is this ok? 

  useEffect(() => {
    const loadCountries = async () => {
      const countryData = await fetchCountryData();
      setCountryData(countryData);
    };
    loadCountries();
  }, [])

  const handleCountryClick = () =>  {
    const countryInfo = getCountryNameAndFlag(countryData);
    if (countryInfo) {
      const [name, flag] = countryInfo;
      setCurrentCountry({name: name, flag: flag})
    }
  }
  
  return(
    // my spidy tingle says I can do something here...
    <div className='Main'> 
      <button onClick={handleCountryClick}>Click it! (country)</button>
      <p>Country List</p>
      <div className='countries-wrapper'>
        {currentCountry ? (
          <div className='country'>
            <div className='country_flag'>
              <img src={currentCountry.flag} alt={currentCountry.name} />
            </div>
            <h3 className='country_name'>{currentCountry.name.toUpperCase()}</h3>
            <div className='country_text'>
            </div>
          </div>
        ) : (
          <p>Click the button to see a country.</p>
        )}
      </div>  
    </div>
  );
};

export default Main;

