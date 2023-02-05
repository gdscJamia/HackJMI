import { Disclosure } from "@headlessui/react";
import React, { useContext } from "react";
import { DarkThemeContext } from "../App";

function FAQ(props) {
	const { isDarkTheme } = useContext(DarkThemeContext);
	const faqData = [
		{
			question: "Is it an individual event or a team event?",
			answer:
				"Participants are to register individually. If you already have a team, please ask your teammates to register too. The team size is mandatory is to be between <strong>1-4 members</strong>.",
		},
		{
			question: "What is the registration fee?",
			answer:
				"The registration fee for the event is <strong>₹0</strong>. HACK JMI is free for all the hackers!",
		},
		{
			question: "My query is not listed here. What to do?",
			answer: `Feel free to write us an email to <a href="mailto:hackjmiteam@gmail.com"> <strong>hackjmiteam@gmail.com.</strong> </a>`,
		},
	];

	return (
		<section className="relative" data-aos="fade">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className="b-color absolute inset-0 pointer-events-none mb-16"
				aria-hidden="true"></div>
			<div className="absolute left-0 right-0 m-auto w-px p-px h-20 transform -translate-y-1/2"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center ">
						<h1 className="dark:text-white h2" id="faq">
							FAQ
						</h1>
					</div>
				</div>

				{/* FAQ */}
				{faqData.map((faq, index) => (
					<Disclosure as="div" key={index} className=" w-full my-3">
						{({ open }) => (
							<React.Fragment>
								<Disclosure.Button
									className={`p-2 flex  w-full rounded-lg
									${
										open
											? "bg-orange-300 dark:bg-gray-600"
											: "hover:bg-orange-200 dark:hover:bg-gray-900"
									} 
								`}>
									<span className="dark:text-white text-start">{faq.question}</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-6 h-6 ml-auto dark:text-white"
										style={{
											transform: open ? "rotate(180deg)" : "",
										}}>
										<path
											fillRule="evenodd"
											d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
											clipRule="evenodd"
										/>
									</svg>
								</Disclosure.Button>
								<Disclosure.Panel
									className="p-4 bg-orange-100 dark:text-white dark:bg-gray-600/30"
									dangerouslySetInnerHTML={{ __html: faq.answer }}
								/>
							</React.Fragment>
						)}
					</Disclosure>
				))}
			</div>
			<div className="border" />
		</section>
	);
}

export default FAQ;
