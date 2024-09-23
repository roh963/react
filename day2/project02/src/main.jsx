import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const element = "to click this "
const ReactElement =React.createElement('a',{href:"https://google.com"},'click to this')

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    ReactElement
 // </StrictMode>, 
)
