import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import store from './Utils/store.js'


createRoot(document.getElementById('root')).render(

  <Provider store={store} >

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>
)