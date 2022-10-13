import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkWord } from "../../context/wordsSlice";

function WordForm() {
	const dispatch = useDispatch();
	const [text, setText] = useState("");
	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		console.log(text);
		e.preventDefault();

		dispatch(checkWord(text));
		setText("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					autoFocus
					type="text"
					name="textInput"
					id="textInput"
					className="p-2 rounded-xl bg-slate-800 pl-4"
					value={text}
					onChange={handleChange}
				/>
			</form>
			{text}
		</div>
	);
}

export default WordForm;
