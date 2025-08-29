import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Language = "da" | "en";

interface LanguageState {
  currentLanguage: Language;
  availableLanguages: Language[];
}

const initialState: LanguageState = {
  currentLanguage: "da",
  availableLanguages: ["da", "en"],
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload;
    },
    toggleLanguage: (state) => {
      state.currentLanguage = state.currentLanguage === "da" ? "en" : "da";
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
