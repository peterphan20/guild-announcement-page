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
		<div className="pb-5 px-4 w-full h-full min-h-full lg:pb-12 lg:px-56">
			<section>
				<span id="gallery" className="block relative -top-24 lg:-top-28" />
				<h1 className="flex justify-center font-headers font-semibold border-b-2 border-indigo-200 px-3 py-1 mt-7 mb-7 lg:text-3xl lg:mb-10">
					Gallery
				</h1>
				<div className="px-0 lg:px-36">
					<Carousel showThumbs={false}>{renderedImage}</Carousel>
				</div>
			</section>
		</div>
	);
};

export default Gallery;
