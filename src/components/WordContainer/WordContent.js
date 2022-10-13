import React from "react";

function WordContent({ words, lang }) {
	console.log(words);
	return (
		<div className="p-4 box-border bg-slate-800 w-7/12 rounded-2xl">
			<article className="">
				{words.map((word) =>
					lang === "turkish" ? (
						<span
							key={word.word.id}
							className={`${word.isCorrect === false ? "" : "bg-green-600"}`}
						>
							{word.word.english}{" "}
						</span>
					) : (
						<span
							key={word.word.id}
							className={`${word.isCorrect === false ? "" : "bg-green-600"}`}
						>
							{word.word.turkish}{" "}
						</span>
					)
				)}
			</article>
		</div>
	);
}

export default WordContent;
