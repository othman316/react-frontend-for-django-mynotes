import React from 'react'

import './App.css'
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import NotePage from './pages/NotePage'

const App = () => {
  return (
    <Router>
      <div className="container ">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
