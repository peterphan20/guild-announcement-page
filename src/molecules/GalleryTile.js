import React from "react";

import Image from "../atoms/Image";

const GalleryTile = ({ article }) => {
	return (
		<div key={article.article_id} className="w-full h-full">
			<Image src={article.img_url} alt={article.title} />
			<p className="legend">{article.title}</p>
		</div>
	);
};

export default GalleryTile;
