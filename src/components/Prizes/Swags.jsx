import React, { useContext } from "react";
import GOG from "../../images/sponsors/GOG.png";
import XYZ from "../../images/sponsors/xyz.png";
import XYZwhite from "../../images/sponsors/xyzwhite.png";
import m16 from "../../images/sponsors/m16labs-logo.png";
import Logo from "../../images/logo.png";
import { motion } from "framer-motion";
import { DarkThemeContext } from "../../App";
import ThemeImage from "../Image";

function Swags() {
	const { isDarkTheme } = useContext(DarkThemeContext);
	const [active, setActive] = React.useState(false);
	return (
		<div className="swags flex flex-col" data-aos="fade-down">
			<div className="flex flex-col md:flex-row items-center dark:text-white md:gap-10 gap-2 justify-center mt-2 md:pb-12 pb-16">
				<div className="md:w-1/5 w-3/4 flex flex-col justify-center items-center">
					<motion.img
						src={m16}
						className="absolute w-28 h-28 rounded-lg p-2 md:p-0 -z-10"
						initial={{
							rotateZ: -10,
							x: 0,
						}}
						whileHover={{
							rotateZ: 0,
							x: 0,
						}}
						animate={{
							y: active ? -12 : -17,
						}}
						transition={{
							duration: 0.5,
						}}
					/>
					<motion.img
						src={Logo}
						className="w-40 p-2 md:p-0 z-10"
						initial={{
							rotateZ: 10,
							x: 20,
						}}
						transition={{
							duration: 0.5,
						}}
						whileHover={{
							rotateZ: 15,
							y: -10,
							x: 30,
						}}
						onHoverStart={() => setActive(true)}
						onHoverEnd={() => setActive(false)}
					/>
					<div className="text-center md:text-left">
						<p className="dark:text-white/60">
							<strong className="text-orange-600">
								Free Hackathon Stickers!!
							</strong>{" "}
							from Hack JMI and our Sponsors.
						</p>
					</div>
				</div>
				<div className="md:w-1/5 w-3/4 flex flex-col justify-center items-center">
					<ThemeImage
						dark={XYZwhite}
						light={XYZ}
						className={"w-40  md:mb-4 md:p-5 p-3"}
					/>
					<div className="mt-6 text-center">
						<p className=" dark:text-white/60">
							Free <strong className="text-orange-600">.xyz</strong> domains
							from gen.xyz.!!
						</p>
					</div>
				</div>
				<div className="md:w-1/5 w-3/4 flex flex-col justify-center items-center">
					<img src={GOG} className="w-40 mt-5 md:mt-1 md:p-5 p-3" />
					<div className="mt-6 text-center md:text-left">
						<p className=" dark:text-white/60">
							Free discount coupon codes for{" "}
							<strong className="text-orange-600">Geeks For Geeks</strong>.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Swags;
