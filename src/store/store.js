import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authSlice } from './slice/auth/authSlice'
import { testsSlice } from './slice/admin/testsSlice'
import { questionsSlice } from './slice/admin/questionsSlice'
import questionSlice from './slice/admin/questionSlice'
// import { myResultsSlice } from './slice/user/myResultsSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [testsSlice.name]: testsSlice.reducer,
   [questionsSlice.name]: questionsSlice.reducer,
   [questionSlice.name]: questionSlice.reducer,
   // [myResultsSlice.name]: myResultsSlice.reducer,
})

const persistConfig = {
   key: 'BILINGUAL',
   storage,

   blacklist: ['question', 'questionsSlice'],
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
