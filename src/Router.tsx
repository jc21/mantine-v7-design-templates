import { lazy, Suspense } from "react";

import { Loader } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));

function Router() {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default Router;
