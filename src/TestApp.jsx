import { useEffect, useState } from 'react'
import './App.css'
//import './header.scss'


// Separation of concerns: break it down and make it re-usability/maintainability
// header.tsx
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

const generateHexColor = () => {
  const str = '0123456789abcdef'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += str[Math.floor(Math.random() * 16)]
  }
  return color
}

const Main = ({ onBackgroundChange }) => {
  // NO STATE HERE DO IT IN APP!!
  // const [background, setBackground] = useState('')
  // const changeBackground = () => (setBackground(background))

  return(
    <Button
      text='Change Background'
      onClick={onBackgroundChange}
      style={buttonStyles}
    />
  )

}

// button.tsx
// Not CSS, this is CSSproperties: syntax to write in CSS in Javascript\
// better to do in tsx so you can get auto-complete keys 
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0',
  border: 'none',
  borderRadius: 5,
}

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => <Country key={country.name} country={country} />)
  return <div>{countryList}</div>
}

const App = () => {
  // 1. The state now lives in the App component.
  // We'll give it an initial color to start with.
  const [backgroundColor, setBackgroundColor] = useState('#F0F0F0')

  const [firstName, setFirstName] = useState('')

  // 2. The function to change the color also lives in App.
  // It now calls our color generator to get a *new* color.
  const handleBackgroundChange = () => {
    setBackgroundColor(generateHexColor())
  }

  const handleChange = (e) => {
    const value = e.target.value
    setFirstName(value)
  }

  const handleSubmit = (e) => {
    /* 
     e.preventDefault()
      stops the default behavior of form element
     specifically refreshing of page
     */
    e.preventDefault()
    console.log(firstName)
  }

  // Dependancy array
  useEffect(() => {
    console.log(backgroundColor)
  }, [backgroundColor])
  

  return (
    <div className='app' style={{ backgroundColor: backgroundColor }}>
      <Header />
      <Main onBackgroundChange={handleBackgroundChange}/>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>

        <h1>{firstName}</h1>
        <Countries countries={countries} />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App