import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import '@/css/style.css'
import logo from '@/assets/logo.png'
import TeamList from '@/components/TeamList'
import TeamDetail from '@/components/TeamDetail'

function App() {
  return (
    <div id="app-wrapper">
      <header>
        <Link to="/">
          <img src={logo} alt="La Liga" />
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<TeamList />} />
          <Route path="/team/:id" element={<TeamDetail />} />
        </Routes>
      </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
