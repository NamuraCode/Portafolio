import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface UserLanguage {
  language: string;
  indexLanguage: number;
}

const initialState: UserLanguage = {
  language: 'SPA',
  indexLanguage: 0,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Boolean>) => {
      if(action.payload){
        state.language = 'ENG'
        state.indexLanguage = 1
      }else{
        state.language = 'SPA'
        state.indexLanguage = 0
      }
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language;
