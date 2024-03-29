import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import "./App.css"

const App = () => {
  return (
    <div className='app'>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App