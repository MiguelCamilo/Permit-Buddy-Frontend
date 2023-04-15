import { useState} from "react";

import "./form.css";

export default function Welcome({ nextFormButton }) {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [data, setData] = useState("")

	// const handleForm = (e) => {
	// 	e.preventDefault()
	
	// 	const formData = {  }

	// 	fetch("https://permit-buddy-api.web.app/form", {
	// 		method: "POST",
	// 		headers: {
	// 		  "Content-type": "application/json;charset=UTF-8",
	// 		},
	// 		body: JSON.stringify(formData),
	// 	  })
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setData(data)
	// 		});
	// 	}

	return (
		<>
			<div className="slider_component">
				<div className="slider_wrapper">
					<div className="slider">
						<div className="container-wrapper">
							<h1 className="text-4xl font-bold">Welcome!</h1>
							<div id="Form" className="w-form">
								<form								
									id="email-form"
									name="email-form"
									data-name="Email Form"
									method="get"
									className="form"
								>
									<label htmlFor="name">Name</label>
									<input
										value={name}
										onChange={e => setName(e.target.value)}
										type="text"
										className="w-input"
										maxLength={256}
										name="name"
										data-name="Name"
										placeholder=""
										id="name"
									/>
									<label htmlFor="email">Email Address</label>
									<input
										value={email}
										onChange={e => setEmail(e.target.value)}
										type="email"
										className="w-input"
										maxLength={256}
										name="email"
										data-name="Email"
										placeholder=""
										id="email"
										required=""
									/>
									{/* <button type="submit">Submit</button> */}
								</form>
								<div className="w-form-done">
									<div>Thank you! Your submission has been received!</div>
								</div>
								<div className="w-form-fail">
									<div>
										Oops! Something went wrong while submitting the form.
									</div>
								</div>
							</div>
							<div className="div-block">
								<button onClick={() => nextFormButton()} href="#" className="next-button">
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
