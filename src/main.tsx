import React from 'react'
import ReactDOM from 'react-dom/client'
import '../static/index.scss'
import { Header } from './components/Header'
import { Router } from './router'

function App() {
  return (
    <Router/>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
