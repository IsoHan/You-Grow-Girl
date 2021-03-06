import React from "react";

import Image from "react-bootstrap/Image";

const HomeCard = ({ image, text }) => {
	return (
		<div className="homecard font-links">
			<Image src={image} alt="" className="homecard-img" />
			<p></p>
			<br />
			<p className="font-links">{text}</p>
		</div>
	);
};

export default HomeCard;
