import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true
	};

	return (
		<div className="row">
			<div
				className="carrousel_wrapper col-12 col-md-12 col-sm-12"
				style={{ height: `60vw`, width: `${window.innerWidth}px` }}
			>
				<Slider {...settings}>
					<div className="container-fluid">
						<div
							className="carrousel_image img-fluid"
							style={{
								background: `url(https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549779685/Five%20Star/slide_one_c.png)`,
								width: `${window.innerWidth}px`,
								height: '60vw'
							}}
						/>
					</div>
					<div className="container-fluid">
						<div
							className="carrousel_image img-fluid"
							style={{
								background: `url(https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549779689/Five%20Star/slide_two_c.png)`,
								width: `${window.innerWidth}px`,
								height: '60vw'
							}}
						/>
					</div>
					<div className="container-fluid">
						<div
							className="carrousel_image img-fluid"
							style={{
								background: `url(https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549779775/Five%20Star/slide_three_c.png)`,
								width: `${window.innerWidth}px`,
								height: '60vw'
							}}
						/>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default Carousel;
