import ReactDOM from 'react-dom/client'
import { Provider } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import App from './App'
import Themes from './components/Themes'
import Notification from './components/Notification'
import './index.css'
import { injectStore } from './configs/axiosInstance'
import { store } from './store/store'

injectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <StrictMode>
      <Provider store={store}>
         <Themes>
            <Notification />

            <App />
         </Themes>
      </Provider>
   </StrictMode>
)
