import { configureStore } from '@reduxjs/toolkit'
import { experienceMouse, experienceSlice, languageSlice } from './slice'
// ...

export const store = configureStore({
  reducer: {
    language: languageSlice.reducer,
    experience: experienceSlice.reducer,
    experienceMouse: experienceMouse.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch