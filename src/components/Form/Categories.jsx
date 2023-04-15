import "./form.css"

function Categories({ nextFormButton }) {
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
								<label className="radio-button-field cat w-radio">
									<input
										type="radio"
										id="radio-3"
										name="Type"
										defaultValue="Radio"
										data-name="Type"
										className="w-form-formradioinput radio-button w-radio-input"
									/>
									<span
										className="radio-button-label w-form-label"
										htmlFor="radio-3"
									>
										Building permits
									</span>
								</label>
								<label className="radio-button-field cat w-radio">
									<input
										type="radio"
										id="radio-3"
										name="Type"
										defaultValue="Radio"
										data-name="Type"
										className="w-form-formradioinput radio-button w-radio-input"
									/>
									<span
										className="radio-button-label w-form-label"
										htmlFor="radio-3"
									>
										Zoning permits
									</span>
								</label>
								<label className="radio-button-field cat w-radio">
									<input
										type="radio"
										id="radio-3"
										name="Type"
										defaultValue="Radio"
										data-name="Type"
										className="w-form-formradioinput radio-button w-radio-input"
									/>
									<span
										className="radio-button-label w-form-label"
										htmlFor="radio-3"
									>
										Environmental permits
									</span>
								</label>
								<label className="radio-button-field cat w-radio">
									<input
										type="radio"
										id="radio-3"
										name="Type"
										defaultValue="Radio"
										data-name="Type"
										className="w-form-formradioinput radio-button w-radio-input"
									/>
									<span
										className="radio-button-label w-form-label"
										htmlFor="radio-3"
									>
										Electrical permits
									</span>
								</label>
								<label className="radio-button-field cat w-radio">
									<input
										type="radio"
										id="radio-3"
										name="Type"
										defaultValue="Radio"
										data-name="Type"
										className="w-form-formradioinput radio-button w-radio-input"
									/>
									<span
										className="radio-button-label w-form-label"
										htmlFor="radio-3"
									>
										Plumbing permits
									</span>
								</label>
								<label className="radio-button-field cat w-radio">
									<input
										type="radio"
										id="radio-3"
										name="Type"
										defaultValue="Radio"
										data-name="Type"
										className="w-form-formradioinput radio-button w-radio-input"
									/>
									<span
										className="radio-button-label w-form-label"
										htmlFor="radio-3"
									>
										Mechanical permits
									</span>
								</label>
								<label className="radio-button-field cat w-radio">
									<input
										type="radio"
										id="radio-3"
										name="Type"
										defaultValue="Radio"
										data-name="Type"
										className="w-form-formradioinput radio-button w-radio-input"
									/>
									<span
										className="radio-button-label w-form-label"
										htmlFor="radio-3"
									>
										Fire permits
									</span>
								</label>
								<label className="radio-button-field cat w-radio">
									<input
										type="radio"
										id="radio-3"
										name="Type"
										defaultValue="Radio"
										data-name="Type"
										className="w-form-formradioinput radio-button w-radio-input"
									/>
									<span
										className="radio-button-label w-form-label"
										htmlFor="radio-3"
									>
										Health permits
									</span>
								</label>
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
								<input
									type="text"
									className="text-field w-input"
									maxLength={256}
									name="name-2"
									data-name="Name 2"
									placeholder="Search"
									id="name-2"
								/>
								<div className="search_container">
									<p className="serach-record">
										<strong>Envir</strong>onmental permits
									</p>
									<p className="serach-record">
										<strong>Envir</strong>onmental permits
									</p>
									<p className="serach-record">
										<strong>Envir</strong>onmental permits
									</p>
									<p className="serach-record">
										<strong>Envir</strong>onmental permits
									</p>
									<p className="serach-record">
										<strong>Envir</strong>onmental permits
									</p>
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

export default Categories;
