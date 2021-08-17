import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import GalleryTile from "../molecules/GalleryTile";
import { useArticlesData } from "../context/ArticleContext";

const Gallery = () => {
	const articlesData = useArticlesData();

	const renderedImages = articlesData.map((article, idx) => (
		<GalleryTile article={article} key={idx} />
	));

	return (
		<section className="w-full h-full px-4">
			<span id="gallery" className="block relative -top-24" />
			<h1 className="flex justify-center font-headers font-semibold border-b-2 border-indigo-200 px-3 py-1 mt-7 mb-7">
				Gallery
			</h1>
			<Carousel showThumbs={false}>{renderedImages}</Carousel>
		</section>
	);
};

export default Gallery;
