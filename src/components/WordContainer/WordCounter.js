import React from "react";
import { useSelector } from "react-redux";

function WordCounter() {
	const correct = useSelector((state) => state.word.correct);
	const incorrect = useSelector((state) => state.word.incorrect);
	const logData = useSelector((state) => state.word.logData);
	return (
		<div>
			<div>Correct: {correct}</div>

			<div>Incorrect: {incorrect} </div>
			<div>data: {JSON.stringify(logData)}</div>
		</div>
	);
}

export default WordCounter;
