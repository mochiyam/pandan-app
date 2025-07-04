import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


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
// button.tsx
// Not CSS, this is CSSproperties: syntax to write in CSS in Javascript\
// better to do in tsx so you can get auto-complete keys 
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0',
  border: 'none',
  borderRadius: 5,
}
const Button = () => <button style={buttonStyles}> action </button>

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Button />
      {/* <Main /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App