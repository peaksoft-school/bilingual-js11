import storage from 'redux-persist/lib/storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { authSlice } from './slice/auth/authSlice'
import { testsSlice } from './slice/admin/tests/testsSlice'
import { questionsSlice } from './slice/admin/questions/questionsSlice'
import { resultsSlice } from './slice/user/results/resultsSlice'
import { testsListSlice } from './slice/user/tests/testsListSlice'
import questionSlice from './slice/admin/question/questionSlice'
import { userSlice } from './slice/user/userSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [testsSlice.name]: testsSlice.reducer,
   [questionsSlice.name]: questionsSlice.reducer,
   [questionSlice.name]: questionSlice.reducer,
   [resultsSlice.name]: resultsSlice.reducer,
   [testsListSlice.name]: testsListSlice.reducer,
   [userSlice.name]: userSlice.reducer,
})

const persistConfig = {
   key: 'BILINGUAL',
   storage,
   whitelist: [authSlice.name],
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
