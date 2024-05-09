import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import Admin from './Components/Admin'
import Students from './Components/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
       
        <div className="flex flex-col h-screen w-screen">
              <Header/>
                <div className="flex flex-1">
                  <Sidebar />
                    <Routes>
                      <Route exact path="/dashboard" element={<Dashboard />} />
                      <Route exact path="/admin" element={<Admin />} />
                      <Route exact path="/students" element={<Students/>} />
                    </Routes>
                </div>
              <Footer/>
          </div>
  )
}

export default App