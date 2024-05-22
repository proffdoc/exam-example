import './App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Courses from './pages/Courses'
import Elements from './pages/Elements'
import News from './pages/News'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/elements" element={<Elements/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
