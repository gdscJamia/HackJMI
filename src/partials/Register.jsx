import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";



function Register() {
	return (
		<section className="relative" id="register">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className="b-color absolute inset-0 bg-gray-100 pointer-events-none mb-16"
				aria-hidden="true"></div>
			<div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<h1 className="theme-text h2 mb-4">Register</h1>
						<p className="text-gray-600 w-full text-left">
							<div
								className="apply-button self-center"
								data-hackathon-slug="YOUR-HACKATHON-SLUG"
								data-button-theme="light"></div>

							<div className="italic">Coming Soon</div>
							{/* <strong>To register, follow these steps:</strong>
							<ol className="flex flex-col gap-2 mt-4">
								<li>1. Click the "Apply with Devfolio" button below</li>
								<li>
									2. Create an account on devfolio. If you already have an
									account, sign in.
								</li>
								<li>3. Complete your application and submit for review.</li>
								<li>
									4. If you have a team, register your team on Devfolio and add
									team members.
								</li>
								<li>
									5. Manage your team and submissions on your Devfolio hackathon
									dashboard.
								</li>
							</ol> */}
						</p>
					</div>
				</div>

				<div className="border" />
			</div>
		</section>
	);
}

export default Register;
