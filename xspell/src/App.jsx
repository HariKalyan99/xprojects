
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};


function App() {
  

  const [getInput, setInput] = useState("");
  const [suggestedWord, setSuggestedWord] = useState('');

  useEffect(() => {
    const word = getInput.split(" ");
    const findWord = word.map((text) => {
      const found = customDictionary[text.toLowerCase()];
      return found || text;
    })
    const firstCorrection = findWord.find((words, idx) => {
      words !== word[idx]
    })
    setSuggestedWord(firstCorrection || "");
  }, [getInput])

  const handleChange = (e) => {
    setInput(e.target.value)
  }


  const [countries, setCountries] = useState([])
  const [countrySelect, setCountrySelect] = useState("");

  useEffect(() => {
    const fetchCountry = async() => {
      try{
        const {data} = await axios.get('https://crio-location-selector.onrender.com/countries');
        setCountries(data)
      }catch(err){
        console.log("Error", err)
      }
    }
    fetchCountry();
  })

  return (
    <>
    <div>
      <h1>Xspell</h1>
      <input type="text" value={getInput} style={{width: "300px", height: "30px"}} onChange={(e) => handleChange(e)}/>
      <h1>{getInput}</h1>
      <h1>Suggested word: {suggestedWord}</h1>
    </div>


    <div>
      <h1>Xstates</h1>

      <label htmlFor="selectCountry">
        Select a country
        <select name="country" id="country" defaultValue={countrySelect} onChange={(e) => setCountrySelect(e.target.value)}>
        <option value="select a country" selected disabled>select a country</option>
          {countries.map((country, ind) => {
            return <option key={ind} value={country}>{country}</option>
          })}
        </select>
      </label>
      <h1>{countrySelect}</h1>
    </div>
    </>
  )
}

export default App
