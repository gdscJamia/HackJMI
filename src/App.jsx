import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Team from "./pages/Team";
import { useState } from "react";

const queryClient = new QueryClient();

export const DarkThemeContext = React.createContext({
	isDarkTheme: false,
	setIsDarkTheme: () => {},
});

function App() {
	const location = useLocation();

	useEffect(() => {
		AOS.init({
			once: true,
			disable: "phone",
			duration: 700,
			easing: "ease-out-cubic",
		});
	});

	useEffect(() => {
		document.querySelector("html").style.scrollBehavior = "auto";
		window.scroll({ top: 0 });
		document.querySelector("html").style.scrollBehavior = "";
	}, [location.pathname]); // triggered on route change

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://apply.devfolio.co/v2/sdk.js";
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const [isDarkTheme, setIsDarkTheme] = useState(
		document.documentElement.classList.contains("dark")
	);

	useEffect(() => {
		if (isDarkTheme) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkTheme]);

	useEffect(() => {
		if (document.documentElement.classList.contains("dark")) {
			setIsDarkTheme(true);
		} else {
			setIsDarkTheme(false);
		}
	}, []);

	return (
		<>
			<DarkThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
				<QueryClientProvider client={queryClient}>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/team" element={<Team />} />
					</Routes>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</DarkThemeContext.Provider>
		</>
	);
}

export default App;
