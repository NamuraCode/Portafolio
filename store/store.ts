import { configureStore } from '@reduxjs/toolkit'
import { languageSlice } from './slice/languageSlice/languageSlice'
import { experienceSlice } from './slice/experienceSlice/experienceSlice'
// ...

export const store = configureStore({
  reducer: {
    language: languageSlice.reducer,
    experience: experienceSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch