import storage from 'redux-persist/lib/storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { authSlice } from './slices/auth/authSlice'
import { testsSlice } from './slices/admin/tests/testsSlice'
import { questionSlice } from './slices/admin/question/questionSlice'
import { resultsSlice } from './slices/user/results/resultsSlice'
import { testsListSlice } from './slices/user/tests/testsListSlice'
import { practiceTestSlice } from './slices/user/practiceTestSlice'
import { answersSlice } from './slices/admin/answers/answersSlice'
import { submitedResultsSlice } from './slices/admin/results/submitedResultsSlice'
import { optionsSlice } from './slices/admin/options/optionsSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [testsSlice.name]: testsSlice.reducer,
   [resultsSlice.name]: resultsSlice.reducer,
   [answersSlice.name]: answersSlice.reducer,
   [optionsSlice.name]: optionsSlice.reducer,
   [answersSlice.name]: answersSlice.reducer,
   [questionSlice.name]: questionSlice.reducer,
   [testsListSlice.name]: testsListSlice.reducer,
   [practiceTestSlice.name]: practiceTestSlice.reducer,
   [submitedResultsSlice.name]: submitedResultsSlice.reducer,
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
