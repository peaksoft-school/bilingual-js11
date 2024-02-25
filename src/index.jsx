import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import Themes from './components/Themes'
import Notification from './components/Notification'
import './index.css'
import { injectStore } from './configs/axiosInstance'
import store, { persistor } from './store/store'
import { fileInjectStore } from './configs/axiosInstanceFile'

injectStore(store)
fileInjectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <StrictMode>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Themes>
               <Notification />
               <App />
            </Themes>
         </PersistGate>
      </Provider>
   </StrictMode>
)
