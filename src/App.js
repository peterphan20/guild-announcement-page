import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./organisms/Header";
import GuildAnnouncementPage from "./pages/GuildAnnouncementPage";
import AboutsPage from "./pages/AboutsPage";
import Login from "./pages/Login";

const App = () => {
	return (
		<div className="bg-gray-100">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={GuildAnnouncementPage} />
					<Route path="/aboutUs" component={AboutsPage} />
					<Route path="/login" component={Login} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
