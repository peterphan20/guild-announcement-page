import React from "react";
import GalleryTile from "../molecules/GalleryTile";

const Gallery = ({ articles }) => {
	return (
		<div className="flex flex-col justify-center items-center px-3">
			<GalleryTile articles={articles} />
		</div>
	);
};

export default Gallery;
