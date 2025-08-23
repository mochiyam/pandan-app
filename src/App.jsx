import './header.module.scss'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='App'>
      <h1>React Router DOM</h1>
      <Header title="title_prop"/>
      <Main />
      <Footer />
    </div>
  )
}

export default App
