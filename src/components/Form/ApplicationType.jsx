import "./form.css"

function ApplicationType({ nextFormButton }) {
	
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
								<label className="radio-button-field w-radio">
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
								</label>
								<label className="radio-button-field w-radio">
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
										Comercial
									</span>
								</label>
								<div className="div-block-2">
									<label className="field-label">Who is submitting</label>
									<select
										id="field"
										name="field"
										data-name="Field"
										className="w-select"
									>
										<option value="">Select one...</option>
										<option value="Owner">Home Owner</option>
										<option value="Contractor">Contractor</option>
									</select>
								</div>
							</form>
							<div className="w-form-done">
								<div>Thank you! Your submission has been received!</div>
							</div>
							<div className="w-form-fail">
								<div>Oops! Something went wrong while submitting the form.</div>
							</div>
						</div>
						<div className="div-block">
							<button onClick={() => nextFormButton()} className="next-button w-button">
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ApplicationType;
