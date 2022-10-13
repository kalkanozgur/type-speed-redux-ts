import React from "react";
import Footer from "./components/Footer";
import WordContainer from "./components/WordContainer";

function App() {
	return (
		<div className="flex flex-col w-full box-border h-full items-center mt-10 ">
			<WordContainer />
			<Footer />
		</div>
	);
}

export default App;
