import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import UserDetailsProvider from "./context/UserDetailsProvider";
import { routes } from "./routes";

const App = () => {
	return (
		<UserDetailsProvider>
			<Router>
				<Header />
				<Switch>
					{routes.map((route, idx) => {
						return <Route {...route} key={idx} />;
					})}
				</Switch>
				<Footer />
			</Router>
		</UserDetailsProvider>
	);
};

export default App;
