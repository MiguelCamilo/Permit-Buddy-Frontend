import { useState } from "react";

import Welcome from "./components/Form/Welcome";
import ApplicationType from "./components/Form/ApplicationType";
import Categories from "./components/Form/Categories";
import Results from "./components/Form/Results";

import "./App.css";

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [form,setForm] = useState({})

  const nextFormButton = () => {
    setCurrentSlide(currentSlide + 1);
	}

  return (
    <>
      {/* <Welcome /> */}
      {/* <ApplicationType /> */}
      {currentSlide === 1 && <Welcome nextFormButton={nextFormButton} />}
      {currentSlide === 2 && <ApplicationType nextFormButton={nextFormButton}  form={form}  setForm={setForm} />}
      {currentSlide === 3 && <Categories nextFormButton={nextFormButton} form={form}  setForm={setForm}  />}
      {currentSlide === 4 && <Results  form={form}  setForm={setForm}  />}
    </>
  );
  
}

export default App;
