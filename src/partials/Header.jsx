import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { useComponentSize } from "../hooks/useComponentSize";
import Logo from "../images/logo.png";
import { DarkThemeContext } from "../App";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Popover, Transition } from "@headlessui/react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const tabs = [
	{
		name: "Home",
		path: "/",
		data: [
			{
				name: "About",
				href: "#about",
			},
			{
				name: "Tracks",
				href: "#tracks",
			},
			{
				name: "Schedule",
				href: "#schedule",
			},
			{
				name: "Prizes",
				href: "#prizes",
			},
			{
				name: "Sponsors",
				href: "#sponsors",
			},
			{
				name: "Community Partner",
				href: "#community-partners",
			},
			{
				name: "Register",
				href: "#register",
			},
			{
				name: "FAQ",
				href: "#faq",
			},
		],
	},
	{
		name: "Team",
		path: "/team",
	},
];

function Header({ UpdateTheme }) {
	const [top, setTop] = useState(true);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const menuRef = useRef(null);
	const menuSize = useComponentSize(menuRef);

	const navigate = useNavigate();

	const { isDarkTheme, setIsDarkTheme } = useContext(DarkThemeContext);

	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	const [observerMap, setObserverMap] = useState({});
	const [tabData, setTabData] = useState(tabs);

	// useEffect(() => {
	// 	const observers = tabData.map((tab) => {
	// 		const section = document.querySelector(tab.href);
	// 		const observer = new IntersectionObserver(
	// 			(entries) => {
	// 				entries.forEach((entry) => {
	// 					if (entry.isIntersecting) {
	// 						setObserverMap((prev) => ({
	// 							...prev,
	// 							[tab.href]: true,
	// 						}));
	// 					} else {
	// 						setObserverMap((prev) => ({
	// 							...prev,
	// 							[tab.href]: false,
	// 						}));
	// 					}
	// 				});
	// 			},
	// 			{ threshold: 0.5 }
	// 		);
	// 		observer.observe(section);
	// 		return observer;
	// 	});

	// 	return () => {
	// 		observers.forEach((observer) => observer.disconnect());
	// 	};
	// }, [observerMap]);

	return (
		<React.Fragment>
			<div
				className=" b-color md:hidden absolute z-10 bg-black/40 transition-all"
				style={{
					top: menuSize?.height,
					height: document.body.scrollHeight - menuSize?.height,
					width: "100%",
					opacity: isNavOpen ? 1 : 0,
					pointerEvents: isNavOpen ? "all" : "none",
				}}
				onClick={() => setIsNavOpen(false)}
			/>

			<header
				className={`dark:bg-black fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
					!top && "bg-white backdrop-blur-sm shadow-lg "
				}`}
				ref={menuRef}>
				<div className="max-w-6xl mx-auto px-5 sm:px-6 ">
					<div className="flex items-center justify-between h-16 md:h-20">
						{/* Site branding */}
						<div className="flex-shrink-0 mr-4">
							{/* Logo */}
							<a href="#" className="flex gap-2" aria-label="Cruip">
								<img src={Logo} alt="Logo" className="w-14" />
							</a>
						</div>

						{/* Site navigation */}
						<nav className="md:flex flex-grow  hidden">
							<ul className="flex flex-grow justify-center flex-wrap items-center">
								{tabData.map((tab, index) => (
									<li>
										<Popover>
											{({ open, close }) => (
												<>
													<Popover.Button
														onClick={() => {
															navigate(tab.path);
														}}
														className={`
													p-2 dark:text-white
													m-2 hover:bg-black/10 rounded-md transition-all dark:hover:bg-white/10
													${open && "bg-orange-400/20"}
										`}>
														{tab.name}
													</Popover.Button>

													<Transition>
														<Popover.Panel
															className={`absolute mt-2 z-10 bg-white dark:bg-black/90 dark:text-white shadow-lg rounded-md p-4 `}>
															<div className="flex flex-col gap-2">
																{tab?.data?.map((item) => (
																	<>
																		<a
																			href={item.href}
																			className="p-2 hover:bg-black/10 rounded-md"
																			onClick={() => {
																				close();
																			}}>
																			{item.name}
																		</a>
																	</>
																))}
															</div>
														</Popover.Panel>
													</Transition>
												</>
											)}
										</Popover>
									</li>
								))}
							</ul>

							{/* theme button */}
							<button onClick={UpdateTheme}>
								{!isDarkTheme ? (
									<span
										style={{
											color: "#e69b00",
											fontSize: "35px",
											paddingLeft: "40px",
										}}>
										☀
									</span>
								) : (
									<span
										style={{
											color: "#c96dfd",
											fontSize: "35px",
											paddingLeft: "40px",
										}}>
										☽
									</span>
								)}
							</button>
						</nav>

						{/* Mobile menu button */}
						<div className="md:hidden flex items-center">
							<button onClick={UpdateTheme}>
								{!isDarkTheme ? (
									<span
										style={{
											color: "#e69b00",
											fontSize: "30px",
											paddingRight: "22px",
										}}>
										☀
									</span>
								) : (
									<span
										style={{
											color: "#c96dfd",
											fontSize: "30px",
											paddingRight: "22px",
										}}>
										☽
									</span>
								)}
							</button>
							<button onClick={() => setIsNavOpen(!isNavOpen)}>
								{!isNavOpen ? (
									<RxHamburgerMenu className="dark:text-white w-6 h-6" />
								) : (
									<AiOutlineClose className="dark:text-white w-6 h-6" />
								)}
							</button>
						</div>

						{/* Mobile menu */}

						<div
							className={`md:hidden absolute w-full bg-white dark:bg-gray-900 dark:text-white shadow-lg overflow-hidden transition-all`}
							style={{
								top: menuSize?.height,
								maxHeight: !isNavOpen ? 0 : "100vh",
							}}>
							<div className=" b-color px-2 pt-2 pb-3 sm:px-3">
								<ul className="flex flex-col flex-grow justify-end flex-wrap items-center">
									{tabData.map((tab, index) => (
										<li key={index}>
											<a
												href={tab.href}
												className={`font-medium text-gray-600 dark:text-gray-400 
												hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out
											${
												document.location.hash === tab.href &&
												"text-orange-600 dark:text-orange-600 font-semibold"
											}
										`}
												onClick={() => setIsNavOpen(false)}>
												{tab.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
}

export default Header;
