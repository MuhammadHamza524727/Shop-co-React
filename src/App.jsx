import './App.css'
import BrandsName from './components/BrandsName'
import Heading from './components/Heading'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewArrivals from './components/NewArrivals'
import PromotionBanner from './components/PromotionBanner'
import ViewallBtn from './components/ViewallBtn'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  

  return (
    <>
      <PromotionBanner />
      <Navbar />
      <Hero />
      <BrandsName />
      <Heading text="NEW ARRIVALS" />
      <NewArrivals />
      <ViewallBtn />
      <Heading text="TOP SELLING" />
      <NewArrivals />

      <ViewallBtn />

      <Router>
      <Routes>
        <Route path="/" element={<NewArrivals />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>

      



    </>
  )
}

export default App
