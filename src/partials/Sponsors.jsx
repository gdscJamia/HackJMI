import React, { useState, useRef, useEffect, useMemo, useContext } from "react";
import Transition from "../utils/Transition";
import ThemeImage from "../components/Image";

import Devfolio from "../images/sponsors/devfolio.png";
import Polygon from "../images/sponsors/polygon.png";
import Filecoin from "../images/sponsors/filecoin.png";
import Solana from "../images/sponsors/solana.png";
import Replit from "../images/sponsors/replit.png";
import GMC from "../images/sponsors/GMC.png";
import NS from "../images/sponsors/NS.png";
import GOG from "../images/sponsors/GOG.png";
import xyz from "../images/sponsors/xyz.png";
import xyzwhite from "../images/sponsors/xyzwhite.png";
import Replitwhite from "../images/sponsors/replitwhite.png";
import Filecoinwhite from "../images/sponsors/filecoinwhite.png";
import Devfoliowhite from "../images/sponsors/devfoliowhite.png";
import Polygonwhite from "../images/sponsors/polygonwhite.png";
import Solanawhite from "../images/sponsors/solanawhite.png";
import M16Labs from "../images/sponsors/m16labs-logo.png";
import Axure from "../images/sponsors/axure.png";
import Streamyard from "../images/sponsors/streamyard.png";

import { DarkThemeContext } from "../App";
import { Link } from "react-router-dom";

function Sponsers(props) {
	const { isDarkTheme } = useContext(DarkThemeContext);

	let sponsorData = {
		"Title Sponsor": [
			{
				dark: M16Labs,
				light: M16Labs,
				src: "https://m16labs.com/",
			},
		],
		"Platinum Sponsors": [
			{
				dark: Devfoliowhite,
				light: Devfolio,
				src: "https://devfolio.co/",
			},
			{
				dark: Polygonwhite,
				light: Polygon,
				src: "https://polygon.technology/",
			},
		],
		// "Gold Sponsors": [],
		"Silver Sponsors": [
			{
				dark: Filecoinwhite,
				light: Filecoin,
				src: "https://filecoin.io/",
			},
			{
				dark: Solanawhite,
				light: Solana,
				src: "https://solana.com/",
			},
			{
				dark: Replitwhite,
				light: Replit,
				src: "https://replit.com/",
			},
			{
				dark: Streamyard,
				light: Streamyard,
				src: "https://streamyard.com/",
			},
			{
				dark: GOG,
				light: GOG,
				src: "https://www.geeksforgeeks.org/",
			},
			{
				dark: NS,
				light: NS,
				src: "https://www.newtonschool.co/",
			},
			{
				dark: xyzwhite,
				light: xyz,
				src: "https://gen.xyz/",
			},
			{
				dark: Axure,
				light: Axure,
				src: "https://www.axure.com/",
			},
		],
		"Certificate Partners": [
			{
				dark: GMC,
				light: GMC,
				src: "https://givemycertificate.com/",
			},
		],
	};

	const SponsorStyles = {
		"Title Sponsor": "w-1/2 md:w-40",
		"Platinum Sponsors": "w-1/2 md:w-1/4 lg:w-1/5",
		"Gold Sponsors": "w-1/2 md:w-1/4 lg:w-1/5",
		"Silver Sponsors": "w-1/2 md:w-1/4 lg:w-1/5",
		"Certificate Partners": "w-1/2 md:w-1/4 lg:w-1/5",
	};

	return (
		<section className="relative" id="sponsors">
			{/* Section background (needs .relative class on parent and next sibling elements) */}

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<h1 className="dark:text-white h2 mb-4" data-aos="zoom-in">
							Sponsors
						</h1>
						<div
							className="my-5 flex justify-center items-center gap-2"
							data-aos="zoom-in">
							<p className="text-gray-600">Want To Sponsor Us?</p>
							<a
								href="https://drive.google.com/file/d/1rygr-fCBemNPIAhNjEM8bg3mOGGT99Zr/view?usp=sharing"
								target="_blank"
								className="dark:text-white font-semibold hover:scale-105 transition-all">
								Click Here
							</a>
						</div>
						{Object.keys(sponsorData).map((key) => (
							<div className="w-full flex flex-col items-center mt-5">
								<div className="flex w-full flex-row items-center justify-center mb-2">
									<hr className={`w-20 m-2 dark:text-white`} />
									<h1 className="dark:text-white h4 my-5 text-xl md:text-2xl">
										{key}
									</h1>
									<hr className={`w-20 m-2 dark:text-white`} />
								</div>
								<div className="flex flex-wrap justify-center items-center gap-4">
									{sponsorData[key].map((sponsor) => {
										return (
											<button
												className={`w-1/3 
												${SponsorStyles[key]}
											p-2`}
												data-aos="fade-up"
												onClick={() => {
													window.open(sponsor.src, "_blank");
												}}>
												<ThemeImage
													dark={sponsor.dark}
													light={sponsor.light}
													className={"w-full rounded-md"}
												/>
											</button>
										);
									})}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="border" />
			</div>
		</section>
	);
}

export default Sponsers;
