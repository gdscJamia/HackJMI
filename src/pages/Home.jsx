import React, { useEffect, useState } from "react";
import ThemeImage from "../components/Image";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import About from "../partials/About";
import Tracks from "../partials/Tracks";
import Footer from "../partials/Footer";
import Schedule from "../partials/Schedule";
import Sponsors from "../partials/Sponsors";
import Register from "../partials/Register";
import FAQ from "../partials/Faq";

import {FaDiscord,FaWhatsapp,FaInstagram} from "react-icons/fa"

import JMI from "../images/brands/jmi.png";
import JMIwhite from "../images/brands/jmiwhite.png";
import CountdownTimer from "../partials/CountdownTimer";
import Prizes from "../partials/Prizes";
import Contact from "../partials/Contact";
import CommunityPartner from "../partials/CommunityPartner";

export const DarkThemeContext = React.createContext({
	isDarkTheme: false,
});

const footerData = [
	{
		link : "https://bit.ly/hackjmi-discord",
		icon : FaDiscord
	},
	{
		link : "https://www.instagram.com/hackjmi/",
		icon : FaInstagram
	},
	{
		link : "https://chat.whatsapp.com/F6k9ATiCBqUJJgQTE8TAyi",
		icon : FaWhatsapp
	}
]

function Home() {
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
		<DarkThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
			<div
				className="dark:bg-black transition-all flex flex-col min-h-screen overflow-hidden"
				id="">
				{/*  Site header */}
				<Header UpdateTheme={() => setIsDarkTheme(!isDarkTheme)} />

				{/*  Page content */}
				<main className="flex-grow">
					{/*  Page sections */}
					<HeroHome theme={isDarkTheme} />
					<CountdownTimer />
					<About />
					<Tracks />
					<Schedule />
					<Prizes />
					<Sponsors />
					<CommunityPartner />
					<Register />
					<FAQ />
					<Contact />
					{/* < />  */}
				</main>

				{/*  Site footer */}
				{/* <Footer /> */}
				<div className="b-color p-5 flex flex-col md:flex-row gap-2 justify-between items-center mt-16 border-t-2 ">
					<p className="dark:text-white">HACK JMI</p>

					<p className="theme-text flex justify-center dark:text-white">
						Made with ❤️ by
						<span className="text-orange-500 ml-2">HACK JMI Team</span>
					</p>
					<p
						className="items-center flex gap-4"
					>
						{footerData.map((item,index) => {
							return (<div
								key={index}
							>
								<a
									href={item.link}
								>
									<item.icon 
										className="w-8 h-8 text-black dark:text-white"
									/>
								</a>
							</div>
							)							
						})}

						<div>
							<a href="https://jmi.ac.in">
								<ThemeImage
									dark={JMIwhite}
									light={JMI}
									className={"w-10"}
								/>
							</a>
						</div>
					</p>
				</div>
			</div>
		</DarkThemeContext.Provider>
	);
}

export default Home;
