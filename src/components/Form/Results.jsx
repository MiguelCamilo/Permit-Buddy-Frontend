import "./form.css";

function Results({form}) {
	// const ownerSelected = "owner";
	// const alterExteriorSelected = "ALTER - EXTERIOR";
	// const alterInteriorSelected = value === "ALTER - INTERIOR";
	// const reRoofSelected = value === "RE-ROOF/REPAIR";
	// const newSelected = value === "NEW"; 

	return (
		<>
			<div className="slider_wrapper">
				<div className="slider">
					<div className="container-wrapper">
					<div className="result-wrapper">
							{ form.id === "ResultYes" && (
								<p id="ResultYes" className="paragraph">
									<span className="result_icon">👍</span>
									<br />
									Most of permits get’s approve within two inspections
								</p>
							)}
							{ fomr.id === "ResultNo" && (
								<p id="ResultNo" className="paragraph">
									<span className="result_icon">✋</span>
									<br />
									This project might have some challenges
								</p>
							)}
						</div>
						<div className="recomendations_wrapper">
							{ form.id === "ResultNo" && form.ownerSelected && (
								<div className="recomendation_item">
									<div className="recomendation_circle" />
									<p>The job you requested may require a licensed contractor</p>
								</div>
							)}
							{ form.id === "ResultNo" && form.alterExteriorSelected == "ALTER - EXTERIOR" && (
								<div className="recomendation_item">
									<div className="recomendation_circle" />
									<p>Hire licensed and experienced contractors who are familiar with local regulations and codes. Ensure that the alterations do not compromise the safety or structural integrity of the building.</p>
								</div>
							)}
							{ form.id === "ResultNo" && form.alterInteriorSelected && (
								<div className="recomendation_item">
									<div className="recomendation_circle" />
									<p>Hire licensed and experienced contractors who are familiar with local regulations and codes. Ensure that the alterations do not compromise the safety or structural integrity of the building.</p>
								</div>
							)}
							{ form.id === "ResultNo" && form.reRoofSelected && (
								<div className="recomendation_item">
									<div className="recomendation_circle" />
									<p>Hire a professional roofing contractor who is licensed and experienced in roofing installation and repair.
										Use high-quality roofing materials that are suitable for the local climate and building codes.
										Ensure that the roof installation or repair meets the building codes and regulations.</p>
								</div>
							)}
							{ form.id === "ResultNo" && form.newSelected && (
								<div className="recomendation_item">
									<div className="recomendation_circle" />
									<p>Hire licensed and experienced contractors who are familiar with local regulations and codes. Ensure that the alterations do not compromise the safety or structural integrity of the building.</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Results;
