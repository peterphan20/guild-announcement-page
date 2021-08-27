import React from "react";
import { Link } from "react-router-dom";

import Image from "../atoms/Image";

const Article = ({ article }) => {
	return (
		<Link
			to={`/articles/${article.article_id}`}
			className="relative col-span-6 md:col-span-1 w-full h-full mb-3"
		>
			<Image src={article.imageUrl} alt="article banner" />
			<h1 className="bg-gray-800 text-base font-text py-7 px-5 break-words">{article.title}</h1>
		</Link>
	);
};

export default Article;
