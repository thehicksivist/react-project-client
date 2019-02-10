import React from 'react';

const Location = () => {
	return (
		<div className="location_wrapper">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.2347531285764!2d152.91630131487196!3d-27.08589298305332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b93f407a7b70951%3A0x8cd2d3a195dc2697!2s5+Pitkin+Ave%2C+Bellmere+QLD+4510!5e0!3m2!1sen!2sau!4v1549109800381"
				width="100%"
				height="700px"
				frameBorder="0"
				allowFullScreen
				title="Map"
			/>

			<div className="location_tag">
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;
