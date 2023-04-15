import React, { useEffect, useState, useRef } from "react";
import "./form.css"
import Select, { components } from "react-select";
import {AppTypesOptions} from "../../data/apptype.js"
import "./autofill.css";


function Categories({ nextFormButton }) {
	const options = useRef(AppTypesOptions).current;
	const onAutoFill = (e) => {
		if (e.animationName === "onAutoFillStart") {
		  // do something
		}
		if (e.animationName === "onAutoFillCancel") {
		  // do something
		}
	  };

	  const styles = {
		input: (css, state) => ({
		  ...css,
		  "input:-webkit-autofill": {
			animationName: "onAutoFillStart"
		  },
		  "input:not(:-webkit-autofill)": {
			animationName: "onAutoFillCancel"
		  }
		})
	  };
	return (
		<>
			<div className="slider_wrapper">
				<div className="slider">
					<div className="container-wrapper">
						<h2>Categories</h2>
						<div className="form-block w-form">
							<form
								id="wf-form-Categories"
								name="wf-form-Categories"
								data-name="Categories"
								method="get"
								className="form horiz"
							>

	\

							</form>




							<div className="w-form-done">
								<div>Thank you! Your submission has been received!</div>
							</div>
							<div className="w-form-fail">
								<div>Oops! Something went wrong while submitting the form.</div>
							</div>
						</div>
						<div className="w-form">
							<form
								id="email-form-2"
								name="email-form-2"
								data-name="Email Form 2"
								method="get"
								className="form-2"
							>
										
						<label className="radio-button-field cat w-radio">
							Application Types
							<Select style={{"width" : "100%"}} components={{ Categories }} options={options} />
						</label>

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

export default Categories;
