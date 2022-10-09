import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import PhotoContextProvider from './context/PhotoContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <PhotoContextProvider>
      <App />
    </PhotoContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
)
