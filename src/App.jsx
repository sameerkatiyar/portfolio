import { Toaster } from 'react-hot-toast'
import './App.css'
import About from './Component/About'
import Contact from './Component/Contact'
import Experiance from './Component/Experiance'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Portfolio from './Component/Portfolio'

function App() {
  return (
    <>
      <div>
        <Navbar />
      {/* Each section needs the same `id` as your navItems text */}
      <div id="Home"><Home /></div>
      <div id="About"><About /></div>
      <div id="Portfolio"><Portfolio /></div>
      <div id="Experiance"><Experiance /></div>
      <div id="Contact"><Contact /></div>
      <Footer />
      </div>
       <Toaster />
    </>
  )
}

export default App
