import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useComponentSize } from "../../hooks/useComponentSize";
import { designationMap } from "../../utils/constant";

function TeamCard({ name, tags, photo, designation, onTagClick, className }) {
	const cardRef = useRef(null);
	const cardSize = useComponentSize(cardRef);
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`h-48 md:h-72 ${className?.root} overflow-hidden md:rounded-md`}
			ref={cardRef}   
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<motion.img
				src={photo}
				className="absolute object-cover md:rounded-md"
				alt="team"
				style={{
					width: cardSize.width,
					height: cardSize.height,
				}}
				initial={{}}
				animate={{
					filter: isHovered ? "brightness(0.5)" : "brightness(1)",
				}}
			/>
			<motion.div
				className="z-10 p-3 
                flex flex-col justify-center items-center group bg-black/60 text-white md:rounded-md"
				style={{
					width: cardSize.width,
					height: cardSize.height,
				}}
				animate={{
					y: isHovered ? "0%" : "-100%",
					backdropFilter: isHovered ? "blur(4px)" : "blur(0px)",
				}}
				transition={{
					duration: 0.2,
				}}>
				<h1 className="md:text-lg tracking-wide font-thin">{name}</h1>
				<p className="text-sm font-light tracking-wide opacity-50">
					{designation}
				</p>

				<div className="md:mt-5 flex items-start flex-wrap gap-1 md:gap-5">
					{tags.map((tag) => (
						<button
							className="text-sm bg-white/20 font-light rounded-md p-1 px-2 hover:bg-white/50"
							onClick={() => {
								onTagClick(tag);
							}}>
							{designationMap[tag]}
						</button>
					))}
				</div>
			</motion.div>
		</div>
	);
}

export default TeamCard;
