import { useState } from "react";

import Welcome from "./components/Form/Welcome";
import ApplicationType from "./components/Form/ApplicationType";
import Categories from "./components/Form/Categories";
import Results from "./components/Form/Results";

import "./App.css";

const defaultForm = {
   alterExteriorSelected:"ALTER - EXTERIOR",
    alterInteriorSelected: "ALTER - INTERIOR",
     reRoofSelected: "RE-ROOF/REPAIR",
     newSelecte: "NEW",
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [form,setForm] = useState(defaultForm)

	const nextFormButton = () => {
		setCurrentSlide(currentSlide + 1);
	};

	return (
		<>
			{/* <Welcome /> */}
			{/* <ApplicationType /> */}
			{currentSlide === 1 && <Welcome nextFormButton={nextFormButton} form={form}  setForm={setForm} />}
			{currentSlide === 2 && (
				<ApplicationType
					nextFormButton={nextFormButton}
					currentSlide={currentSlide}
					setCurrentSlide={setCurrentSlide}
          form={form}  setForm={setForm}
				/>
			)}
			{currentSlide === 3 && <Categories nextFormButton={nextFormButton} 
       form={form}  setForm={setForm} />}
			{currentSlide === 4 && <Results   form={form}  setForm={setForm} />}
		</>
	);
}

export default App;
