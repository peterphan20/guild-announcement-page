import React from "react";

const GalleryTile = ({ articles }) => {
	const renderedImg = (articles) => {
		articles.map((article) => {
			return (
				<div key={article.article_id} className="w-full h-full mb-2">
					<h1>{article.title}</h1>
					<div className="relative" style={{ paddingBottom: `${(1 / (16 / 9)) * 100}%` }}>
						<div className="absolute inset-0">
							<img
								src={article.img_url}
								className="w-full h-full object-cover"
								alt={article.title}
							/>
						</div>
					</div>
				</div>
			);
		});
	};

	return <div>{renderedImg(articles)}</div>;
};

export default GalleryTile;
