import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'
import Themes from './components/Themes'
import Notification from './components/Notification'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <StrictMode>
      <Themes>
         <Notification />
         <App />
      </Themes>
   </StrictMode>
)
