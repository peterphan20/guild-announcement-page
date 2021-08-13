import React from "react";
import GalleryTile from "../molecules/GalleryTile";

const ArticlePage = ({ articles }) => {
	return (
		<div>
			<GalleryTile articles={articles} />
		</div>
	);
};

export default ArticlePage;
