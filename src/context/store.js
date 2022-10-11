import { configureStore } from "@reduxjs/toolkit";
import wordsSlice from "./wordsSlice";

export const store = configureStore({
	reducer: {
		word: wordsSlice,
	},
});
