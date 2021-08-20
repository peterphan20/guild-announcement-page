import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SignInForm from "../pages/SignInForm";
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
		path: "/sign-in",
		exact: true,
		component: SignInForm,
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
