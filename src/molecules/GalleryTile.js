import React from "react";
import Image from "../atoms/Image";

const GalleryTile = ({ image }) => {
	return (
		<div>
			<Image src={image.url} alt={image.alt} />
		</div>
	);
};

export default GalleryTile;
