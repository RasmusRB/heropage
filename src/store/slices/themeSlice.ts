import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ColorScheme = "light" | "dark";

interface ThemeState {
  colorScheme: ColorScheme;
  primaryColor: string;
  secondaryColor: string;
}

const initialState: ThemeState = {
  colorScheme: "light",
  primaryColor: "#00A499",
  secondaryColor: "#5DBBB4",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setColorScheme: (state, action: PayloadAction<ColorScheme>) => {
      state.colorScheme = action.payload;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
    },
    toggleColorScheme: (state) => {
      state.colorScheme = state.colorScheme === "light" ? "dark" : "light";
    },
  },
});

export const {
  setColorScheme,
  setPrimaryColor,
  setSecondaryColor,
  toggleColorScheme,
} = themeSlice.actions;
export default themeSlice.reducer;
