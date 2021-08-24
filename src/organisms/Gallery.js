import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import GalleryTile from "../molecules/GalleryTile";
import { imageURLList } from "../assets";

const renderedImage = imageURLList.map((image, idx) => {
	return <GalleryTile key={idx} image={image} />;
});

const Gallery = () => {
	return (
		<section className="w-full h-full px-4">
			<span id="gallery" className="block relative -top-24" />
			<h1 className="flex justify-center font-headers font-semibold border-b-2 border-indigo-200 px-3 py-1 mt-7 mb-7">
				Gallery
			</h1>
			<Carousel showThumbs={false}>{renderedImage}</Carousel>
		</section>
	);
};

export default Gallery;
