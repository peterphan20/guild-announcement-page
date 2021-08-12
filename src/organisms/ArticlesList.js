import React from "react";
import Article from "../molecules/Article";

const ArticlesList = ({ articles }) => {
	return (
		<div className="flex flex-col justify-center items-center px-3">
			<Article articles={articles} />
			<button className="font-headers font-semibold border-b-2 border-indigo-200 px-3 py-1 mt-7 mb-7">
				LOAD MORE
			</button>
		</div>
	);
};

export default ArticlesList;
