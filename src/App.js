import Award3D from "./components/components/Award3D";
import Header from "./components/components/Header";
import Title from "./components/components/Title";
import BlogPage from "./components/pages/BlogPage";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";

import global from "./resources/global.json";
import LandingPage from "./components/pages/LadingPage";
import LandingPageGradient from "./components/pages/LandingPageGradient";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Header />
				<LandingPage />
			</>
		),
	},
	{
		path: "/edizione-2022",
		element: (
			<>
				<Header />
				<LandingPageGradient />
			</>
		),
	},
	{
		path: "/blog",
		element: (
			<>
				<Header />
				<BlogPage />
			</>
		),
	},

	{
		path: "/team-2023",
		element: (
			<>
				<Header />
			</>
		),
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
