import { useState } from 'react'
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import Header from './pages/Header'
import Upload from './pages/Upload'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/upload' element={<Upload/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
