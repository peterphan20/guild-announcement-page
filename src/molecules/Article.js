import React from "react";
import { Link } from "react-router-dom";

const Article = ({ articles }) => {
	const renderedArticles = () =>
		articles.map((article) => {
			return (
				<div key={article.article_id} className="w-full h-full mb-2">
					<Link to={`/articles/${article.article_id}`}>
						<div className="relative" style={{ paddingBottom: `${(1 / (16 / 9)) * 100}%` }}>
							<div className="absolute inset-0">
								<img
									src={article.img_url}
									className="w-full h-full object-cover"
									alt="article banner"
								/>
							</div>
						</div>
						<h1 className="bg-indigo-600 text-md text-gray-100 font-text py-7 px-5 tracking-wide overflow-wrap:break-word ">
							{article.title}
						</h1>
					</Link>
				</div>
			);
		});

	return <div>{renderedArticles()}</div>;
};

export default Article;
