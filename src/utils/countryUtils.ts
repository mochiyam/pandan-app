export const getCountryNameAndFlag = (countryList) : [string, string] => { // type this shit? 
    // Pointe 2. You need to make sure to check which countries were already mentioned... (shuffling method? heh)
    const randomInt = Math.floor(Math.random()*(countryList.length - 1))
    const country = countryList[randomInt]
    return [country.name.common, country.flags.png] as const
  }