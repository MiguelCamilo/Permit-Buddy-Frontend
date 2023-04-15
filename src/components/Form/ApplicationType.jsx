import { useState } from "react";
import "./form.css";

function ApplicationType({ nextFormButton, setForm }) {
	const [homeOwner, setHomeOwner] = useState("");
	const [contractor, setContractor] = useState("");

	const handleSelectChange = (event) => {
		setForm(event.target.value);
	  };

	const nextForm = () => {
		nextFormButton()
	}

	// const [data, setData] = useState("");

	// const handleFormSubmit = (e) => {
	// 	e.preventDefault();

	// 	const formData = { homeOwner, contractor };

	// 	fetch("https://permit-buddy-api.web.app/form", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-type": "application/json;charset=UTF-8",
	// 		},
	// 		body: JSON.stringify(formData),
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setData(data);
	// 		});
	// 		setCurrentSlide(currentSlide + 1);
	// };

	return (
		<>
			<div className="slider_wrapper">
				<div className="slider">
					<div className="container-wrapper">
						<h2 className="text-4xl font-extrabold">Type</h2>
						<div className="w-form">
							<form
								id="wf-form-Type-Individual"
								name="wf-form-Type-Individual"
								data-name="Type Individual"
								method="get"
								className="form horiz"
							>
								<a href="#" className="radio-button-field w-radio">
									<img
										loading="lazy"
										src="/public/home-lg-alt.svg"
										alt=""
										className="image-2"
									/>
									<input
										type="radio"
										id="radio-3"
										name="Type"
										defaultValue="Radio"
										data-name="Type"
										className="w-form-formradioinput radio-button w-radio-input"
									/>
									<span
										className="radio-button-label w-form-label font-thin"
										htmlFor="radio-3"
									>
										Residential
									</span>
								</a>
								<a href="#" className="radio-button-field w-radio">
									<img
										loading="lazy"
										src="/public/building.svg"
										alt=""
										className="image"
									/>
									<input
										type="radio"
										id="radio-2"
										name="Type"
										defaultValue="Radio"
										data-name="Type"
										className="w-form-formradioinput radio-button w-radio-input"
									/>
									<span
										className="radio-button-label w-form-label font-thin"
										htmlFor="radio-2"
									>
										Commercial
									</span>
								</a>
								<div className="div-block-2">
									<label className="field-label">Who is submitting</label>
									<select																				
										id="field"
										name="field"
										data-name="Field"
										className="w-select"
										required
										onChange={handleSelectChange}
									>
										<option value="">Select one...</option>
										<option value={homeOwner}>Home Owner</option>
										<option value={contractor}>Contractor</option>
									</select>
								</div>
							</form>
							<div className="div-block">
									<button
										onClick={nextForm}
										className="next-button w-button"
									>
										Next
									</button>
								</div>
							<div className="w-form-done">
								<div>Thank you! Your submission has been received!</div>
							</div>
							<div className="w-form-fail">
								<div>Oops! Something went wrong while submitting the form.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ApplicationType;
