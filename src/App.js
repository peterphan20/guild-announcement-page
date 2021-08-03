import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import GuildAnnouncementPage from "./components/GuildAnnouncementPage";
import AboutsPage from "./components/AboutsPage";
import Login from "./components/Login";

const App = () => {
	return (
		<div className="bg-gray-100">
			<Router>
				<Navbar />
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
