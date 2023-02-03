import React, { useContext } from "react";
import Countdown from "react-countdown";
import { DarkThemeContext } from "../App";

const renderer = ({
	days,
	hours,
	minutes,
	seconds,
	completed,
	isDarkTheme,
}) => {
	// Render a countdown
	return (
		<div className="flex md:flex-row flex-col gap-5 w-full justify-center">
			<div className="flex items-center gap-5 justify-center ">
				<span
					className={`md:text-4xl font-bold ${
						isDarkTheme ? "text-gray-100" : "text-gray-900"
					}`}>
					{days}
				</span>
				<span
					className={`
					${isDarkTheme ? "text-gray-300" : "text-gray-500"}
				`}>
					Days
				</span>
			</div>
			<div className="flex items-center gap-5 justify-center ">
				<span
					className={`md:text-4xl font-bold ${
						isDarkTheme ? "text-gray-100" : "text-gray-900"
					}`}>
					{hours}
				</span>
				<span
					className={`
					${isDarkTheme ? "text-gray-300" : "text-gray-500"}
				`}>
					Hours
				</span>
			</div>
			<div className="flex items-center gap-5 justify-center ">
				<span
					className={`md:text-4xl font-bold ${
						isDarkTheme ? "text-gray-100" : "text-gray-900"
					}`}>
					{minutes}
				</span>
				<span
					className={`
					${isDarkTheme ? "text-gray-300" : "text-gray-500"}
				`}>
					Minutes
				</span>
			</div>
			<div className="flex items-center gap-5 justify-center ">
				<span
					className={`md:text-4xl font-bold ${
						isDarkTheme ? "text-gray-100" : "text-gray-900"
					}`}>
					{seconds}
				</span>
				<span
					className={`
					${isDarkTheme ? "text-gray-300" : "text-gray-500"}
				`}>
					Seconds
				</span>
			</div>

			<div
				className={`hidden md:block self-center ${
					isDarkTheme ? "text-gray-300" : "text-gray-500"
				}`}>
				Left!
			</div>
		</div>
	);
};

function CountdownTimer() {
	const date = new Date("2023-02-11T00:00:00+05:30");

	const { isDarkTheme } = useContext(DarkThemeContext);

	return (
		<section className="relative" id="about">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className="absolute inset-0 pointer-events-none mb-16"
				aria-hidden="true"></div>
			<div className="absolute left-0 right-0 m-auto w-px p-px h-20  transform -translate-y-1/2"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<Countdown
							date={date}
							renderer={(props) =>
								renderer({
									...props,
									isDarkTheme,
								})
							}
						/>
					</div>
				</div>

				<div className="border" />
			</div>
		</section>
	);
}

export default CountdownTimer;
