import { createSlice } from "@reduxjs/toolkit";

const wordListJson = require("./../wordList.json");

const shuffledWords = (wordArray) => {
	const shuffledList = wordArray.sort(() => 0.5 - Math.random());
	return shuffledList.slice(0, 60).map((word) => ({ word, status: false }));
};

const initialState = {
	wordList: shuffledWords(wordListJson.words),
	timer: 60,
	correct: 0,
	incorrect: 0,
	keyCount: 0,
	language: "turkish",
};

const wordSlice = createSlice({ name: "words", initialState, reducers: {} });

export default wordSlice.reducer;
