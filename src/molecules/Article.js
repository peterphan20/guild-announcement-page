import React from "react";
import { Link } from "react-router-dom";

import Image from "../atoms/Image";

const Article = ({ article }) => {
	return (
		<div key={article.article_id} className="mb-2">
			<Link to={`/articles/${article.article_id}`}>
				<Image src={article.img_url} alt="article banner" />
				<h1 className="bg-indigo-600 text-md text-gray-100 font-text py-7 px-5">{article.title}</h1>
			</Link>
		</div>
	);
};

export default Article;
