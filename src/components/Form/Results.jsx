import "./form.css";

function Results({}) {
	return (
		<>
			<div className="slider_wrapper">
				<div className="slider">
					<div className="container-wrapper">
						{/* <div className="div-block">
							<a href="#" className="next-button w-button">
								Next
							</a>
						</div> */}
						<div className="result-wrapper">
							<p id="ResultYes" className="paragraph">
								<span className="result_icon">👍</span>
								<br />
								Most of permits get’s approve within two inspections
							</p>
							<p id="ResultNo" className="paragraph">
								<span className="result_icon">✋</span>
								<br />
								This project might have some challenges
							</p>
						</div>
						<div className="recomendations_wrapper">
							<div className="recomendation_item">
								<div className="recomendation_circle" />
								<p>Lorem ipsum dolor sit amet</p>
							</div>
							<div className="recomendation_item">
								<div className="recomendation_circle" />
								<p>Lorem ipsum dolor sit amet</p>
							</div>
							<div className="recomendation_item">
								<div className="recomendation_circle" />
								<p>Lorem ipsum dolor sit amet</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Results;
