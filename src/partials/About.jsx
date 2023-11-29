import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

function Features() {
	const tabs = useRef(null);

	return (
		<section className="relative" id="about">
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20" data-aos="zoom-out">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<h1 className="dark:text-white h2 mb-4">About Us</h1>
						<p className="md:text-xl text-gray-600 dark:text-gray-300 mt-5">
							With the coding infatuation high in your nerves, 
							brace yourself to witness and participate in a{" "}
							<strong>"48-hour long hackathon"</strong>,{" "}
							<strong>Hack JMI</strong>, brought to you by
							<strong> IEEE JMI</strong>. The entrancing challenge 
							ill provide students the opportunity to mess with real-world
							problems by remoulding them into something lucrative.
							"The simpler, the merrier. The sufficient, the efficient." 
							The participants are required to form a team of <strong>2-4</strong> members
							(from the same college) in order to take part in the contest 
							and to draw effective and efficient solutions to the given problems.
						</p>
					</div>
				</div>

				<div className="border" />
			</div>
		</section>
	);
}

export default Features;
