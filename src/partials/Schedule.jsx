
import React from "react";

function Schedule(props) {
	const isdarktheme= props.theme;
	const eventSchedule = [
		{
			interval: "10th December 2022",
			title: "Registration Begins",
			description: "",
		},
		{
			interval: "27th January 2023",
			title: "Registration Ends",
		},
		{
			interval: "28th January 2023",
			title: "Hackathon Begins",
		},
		{
			interval: "29th January 2023",
			title: "Hackathon Ends",
		},
		{
			interval: "4th February 2023",
			title: "Closing Ceremony",
		},
	];

	return (
		<section className="relative" id="schedule">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className="b-color absolute inset-0 bg-gray-100 pointer-events-none mb-16"
				aria-hidden="true"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center ">
						<h1 className="theme-text h2 mb-4">Schedule</h1>

						<div className="flex flex-col  w-full md:pb-12 pb-16">
							<p className="italic text-gray-500">
								{"("} Dates are tentative and subject to change {")"}
							</p>
							{eventSchedule.map((event, index) => (
								<div>
									<div className="w-4 h-4 bg-white border-black border-2 ml-[1px] rounded-full " />
									<div className={`flex w-full flex-col border-l-2 ${isdarktheme? "border-black" : "border-white"} mb-5 mt-3 m-2`}>
										<div className="theme-text pl-4 rounded-lg text-md  opacity-50">
											{event.interval}
										</div>
										<div className="theme-text p-4 pb-1 text-xl rounded-lg text-black font-semibold">
											{event.title}
										</div>
										<div className="text-left pl-4 pt-2">
											{event?.description}
										</div>
									</div>
								</div>
							))}
						</div>
						{/* <Fragment>
							<Timeline>
								{eventSchedule.map((event, index) => (
									<Event
										interval={event.interval}
										title={event.title}
										subtitle={event.description}></Event>
								))}
							</Timeline>
						</Fragment> */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Schedule;
