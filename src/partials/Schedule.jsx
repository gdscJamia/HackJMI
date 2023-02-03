import React, { useContext } from "react";
import { DarkThemeContext } from "../App";

function Schedule(props) {
	const { isDarkTheme, setIsDarkTheme } = useContext(DarkThemeContext);

	const eventSchedule = [
		{
			interval: "20th Jan 2023",
			title: "Registration Begins",
			description: "",
		},
		{
			interval: "10th Feb 2023",
			title: "Registration Ends",
		},
		{
			interval: "11th Feb 2023",
			title: "Hackathon Begins",
		},
		{
			interval: "12th Feb 2023",
			title: "Hackathon Ends",
		},
		{
			interval: "14th Feb 2023",
			title: "Finalist Announced",
		},
		{
			interval: "15th Feb 2023",
			title: "Finalist Presentations",
		},
	];

	return (
		<section className="relative" id="schedule">
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center " data-aos="flip-right">
						<h1 className="dark:text-white h2 mb-4">Schedule</h1>
						<div className="flex flex-col  w-full md:pb-12 pb-16">
							<p className="italic text-gray-500">
								{"("} Dates are tentative and subject to change {")"}
							</p>
							{eventSchedule.map((event, index) => (
								<div>
									<div className="w-4 h-4 bg-white border-black border-2 ml-[1px] rounded-full " />
									<div
										className={`flex w-full flex-col border-l-2 dark:border-white mb-5 m-2`}>
										<div className="dark:text-gray-200 pl-4 rounded-lg text-md  opacity-50">
											{event.interval}
										</div>
										<div className="dark:text-white p-4 pb-1 text-xl rounded-lg text-black font-semibold">
											{event.title}
										</div>
										<div className="dark:text-gray-100 pl-4 pt-2">
											{event?.description}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="border" />
			</div>
		</section>
	);
}

export default Schedule;
