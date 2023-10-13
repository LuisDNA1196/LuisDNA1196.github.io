
import AboutMe from './Components/Aboutme'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Projects from './Components/Projects'

function App() {

  return (
    <>
       <Navbar/>
    <Routes>
      <Route path='*' element={<Home/>}/>
      <Route path='/about-me' element={<AboutMe/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
