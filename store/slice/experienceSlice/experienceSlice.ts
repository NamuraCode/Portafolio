import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const devExperienceYears = [
  "February 2022 - Current 2023",
  "August 2020 - April 2021",
];

interface ExperienceJob {
  type: string;
  job: string[];
  company: string;
  description: string[];
  date: string[];
}

interface ExperienceState {
  nameExperience: string;
  job: ExperienceJob[];
  toggleLanguage: number;
  experience: string[];
}

const initialState: ExperienceState = {
  nameExperience: "dev",
  job: [],
  toggleLanguage: 0,
  experience: devExperienceYears,
};

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setExperience: (
      state,
      action: PayloadAction<{
        name: string;
        job: ExperienceJob[];
        changeLanguage: number;
      }>
    ) => {
      state.toggleLanguage = action.payload.changeLanguage;
      state.nameExperience = action.payload.name;
      let datesJobsByName = action.payload.job
        .filter((item) => item.type == action.payload.name)
      state.job = datesJobsByName;
      state.experience = datesJobsByName.map((item) => item.date[state.toggleLanguage]);
    },
  },
});

export const { setExperience } = experienceSlice.actions;

export const selectExperience = (state: RootState) => state.experience;
