import React from "react";
import { useSelector } from "react-redux/es/exports";
import WordContent from "./WordContent";
import WordCounter from "./WordCounter";
import WordForm from "./WordForm";

function WordContainer() {
	const wordList = useSelector((state) => state.word.wordList);
	const lang = useSelector((state) => state.word.langueage);
	return (
		<>
			<WordContent words={wordList} lang={lang} />
			<WordCounter />
			<WordForm />
		</>
	);
}

export default WordContainer;
