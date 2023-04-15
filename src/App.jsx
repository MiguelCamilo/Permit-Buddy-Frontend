import { useState } from "react";

import Welcome from "./components/Form/Welcome";
import ApplicationType from "./components/Form/ApplicationType";
import Categories from "./components/Form/Categories";
import Results from "./components/Form/Results";

import "./App.css";

function App() {
	const [currentSlide, setCurrentSlide] = useState(1);

	const nextFormButton = () => {
		setCurrentSlide(currentSlide + 1);
	};

	return (
		<>
			{/* <Welcome /> */}
			{/* <ApplicationType /> */}
			{currentSlide === 1 && <Welcome nextFormButton={nextFormButton} />}
			{currentSlide === 2 && (
				<ApplicationType
					nextFormButton={nextFormButton}
					currentSlide={currentSlide}
					setCurrentSlide={setCurrentSlide}
				/>
			)}
			{currentSlide === 3 && <Categories nextFormButton={nextFormButton} />}
			{currentSlide === 4 && <Results />}
		</>
	);
}

export default App;
