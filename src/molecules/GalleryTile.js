import React from "react";

const GalleryTile = ({ articles }) => {
	const renderedImg = () => {
		articles.map((article) => {
			return (
				<div className="relative" style={{ paddingBottom: `${(1 / (16 / 9)) * 100}%` }}>
					<div className="absolute inset-0">
						<img
							src={article.img_url}
							className="w-full h-full object-cover"
							alt="article banner"
						/>
					</div>
				</div>
			);
		});
	};

	return <div>{renderedImg()}</div>;
};

export default GalleryTile;
