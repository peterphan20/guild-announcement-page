import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./organisms/Header";
import { ArticlesContext } from "./context/ArticleContext";
import { routes } from "./routes";

const App = () => {
	const [selectedArticle, setSelectedArticle] = useState(null);

	return (
		<ArticlesContext.Provider value={[selectedArticle, setSelectedArticle]}>
			<Router>
				<Header />
				<Switch>
					{routes.map((route, idx) => {
						return <Route {...route} key={idx} />;
					})}
				</Switch>
			</Router>
		</ArticlesContext.Provider>
	);
};

export default App;
