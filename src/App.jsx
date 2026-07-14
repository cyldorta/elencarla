import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage"
import ScrollProgress from "./components/ScrollProgress"

export default function App() {
  return (
    <BrowserRouter>

      <ScrollProgress />
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}