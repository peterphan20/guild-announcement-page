import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Login from "../pages/Login";
import ArticlePage from "../pages/ArticlePage";
import AdminDashboard from "../pages/AdminDashboard";

export const routes = [
	{
		path: "/",
		exact: true,
		component: HomePage,
	},
	{
		path: "/about-us",
		exact: true,
		component: AboutPage,
	},
	{
		path: "/login",
		exact: true,
		component: Login,
	},
	{
		path: "/articles/:id",
		exact: true,
		component: ArticlePage,
	},
	{
		path: "/admin-dashboard",
		exact: true,
		component: AdminDashboard,
	},
];
