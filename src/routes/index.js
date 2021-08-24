import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Login from "../pages/Login";
import SignUpForm from "../pages/SignUpForm";
import ArticlePage from "../pages/ArticlePage";
import UserDashboard from "../pages/UserDashboard";
import CreateArticlePage from "../pages/CreateArticlePage";

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
		path: "/sign-up",
		exact: true,
		component: SignUpForm,
	},
	{
		path: "/articles/:articleID",
		exact: true,
		component: ArticlePage,
	},
	{
		path: "/create-article-page",
		exact: true,
		component: CreateArticlePage,
	},
	{
		path: "/user-dashboard",
		exact: true,
		component: UserDashboard,
	},
];
