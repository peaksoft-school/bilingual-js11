import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authSlice } from './slice/auth/authSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
})

const persistConfig = {
   key: 'BILINGUAL',
   storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})

export const persistor = persistStore(store)

export default store
