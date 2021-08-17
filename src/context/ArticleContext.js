import React, { useState, useEffect, useContext } from "react";
import { getAllArticles } from "../helpers/articlesCRUD";

const ArticlesContext = React.createContext();
const CurrentArticleContext = React.createContext();

export const useArticlesData = () => {
	return useContext(ArticlesContext);
};

export const useCurrentArticle = () => {
	return useContext(CurrentArticleContext);
};

export const ArticlesProvider = ({ children }) => {
	const [articlesResults, setArticlesResults] = useState([]);
	const [currArticle, setCurrArticle] = useState(null);

	useEffect(() => {
		getAllArticles(setArticlesResults);
	}, []);

	return (
		<ArticlesContext.Provider value={articlesResults}>
			<CurrentArticleContext.Provider currArticle={currArticle} setCurrArticle={setCurrArticle}>
				{children}
			</CurrentArticleContext.Provider>
		</ArticlesContext.Provider>
	);
};
