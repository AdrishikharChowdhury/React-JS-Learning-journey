import { createRoot , useContext } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GeneralContext from './contexts/GeneralContext.jsx'

createRoot(document.getElementById('root')).render(
  <GeneralContext>
    <App />
  </GeneralContext>
)
