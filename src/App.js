import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./organisms/Header";
import { routes } from "./routes";

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					{routes.map((route, idx) => {
						return <Route {...route} key={idx} />;
					})}
				</Switch>
			</Router>
		</>
	);
};

export default App;
