import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Professionals from './pages/Professionals'
import ProfessionalDetails from './pages/ProfessionalDetails'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Professionals />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/professional/:id" element={<ProfessionalDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
