import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ConextProider from './context/ContextAPI.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConextProider>
    <App />
  </ConextProider>,
)
