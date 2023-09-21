import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../store";

const initialState = {
  mouseY: 0,
};

export const experienceMouse = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setExpMouseY: (state, action: PayloadAction<number>) => {
      state.mouseY = action.payload;
    },
  },
});

export const { setExpMouseY } = experienceMouse.actions;

export const selectExpMouse = (state: RootState) => state.experienceMouse;
