import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ArticlesContext } from "../context/ArticleContext";

import Image from "../atoms/Image";

const Article = ({ article }) => {
	// eslint-disable-next-line
	const [selectedArticle, setSelectedArticle] = useContext(ArticlesContext);

	return (
		<Link
			to={`/articles/${article.article_id}`}
			className="w-full h-full mb-3"
			onClick={() => setSelectedArticle(article.article_id)}
		>
			<Image src={article.img_url} alt="article banner" />
			<h1 className="bg-gray-800 text-md font-text py-7 px-5">{article.title}</h1>
		</Link>
	);
};

export default Article;
