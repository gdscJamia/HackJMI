import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";


function Features() {
	const tabs = useRef(null);



	return (
		<section className="relative" id="about">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className="b-color absolute inset-0 bg-gray-100 pointer-events-none mb-16"
				aria-hidden="true"></div>
			<div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<h1 className="theme-text h2 mb-4">About Us</h1>
						<p className="text-xl text-gray-600">
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
							cupidatat.
						<h1 className="h2 mb-4">About Us</h1>
						<p className="text-md text-gray-600 text-justify">
							With the coding infatuation high in your nerves, brace yourself to
							witness and participate in a
							<strong>"48-hour long hackathon"</strong>,{" "}
							<strong>Hack JMI</strong>, brought to you under the collaboration
							of <strong>IEEE JMI</strong> with the much revered{" "}
							<strong>GDSC JMI</strong> and the{" "}
							<strong>HASHes Coding Club</strong>. The entrancing challenge will
							provide students the opportunity to mess with real-world problems
							by re-moulding them into something lucrative. "The simpler, the
							merrier. The sufficient, the efficient." <br /> <br /> The
							participants are required to form a team of 1-4 members (from the
							same college) in order to take part in the contest and to draw
							effective and efficient solutions to the given problems.
						</p>
					</div>
				</div>

				<div className="border" />
			</div>
		</section>
	);
}

export default Features;
