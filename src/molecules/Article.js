import React from "react";
import { Link } from "react-router-dom";

import Image from "../atoms/Image";

const Article = ({ article }) => {
	return (
		<Link to={`/articles/${article.article_id}`} className="w-full h-full mb-3">
			<Image src={article.img_url} alt="article banner" />
			<h1 className="bg-gray-800 text-md font-text py-7 px-5 break-words">
				{article.title}
			</h1>
		</Link>
	);
};

export default Article;
