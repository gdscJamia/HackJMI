import React from "react";
import Trophy from "../../assets/icons/trophy.png";
import M16 from "../../images/sponsors/m16labs-logo.png";
import HealthCare from "../../assets/icons/healthcare.png";

function PrizesComponent() {
	return (
		<div className="prize flex flex-col" data-aos="fade-up">
			<div className="flex flex-col md:flex-row items-center dark:text-white gap-10 justify-center w-full md:pb-12 pb-16">
				<div className="md:w-1/4 w-1/3 flex flex-col justify-center items-center border-t-4 hover:border-orange-600 hover:bg-orange-100/20 border-transparent transition-all pt-6">
					<img src={Trophy} className="w-40 mb-4" />
					<h1 className="md:text-xl text-sm text-center">
						<strong>1st</strong> Prize
					</h1>
					<div className="flex flex-col justify-center items-center md:text-base text-sm">
						<p className=" dark:text-white/60">₹ 5,000</p>
					</div>
				</div>
				<div className="md:w-1/4 w-1/3 flex flex-col justify-center items-center border-t-4 hover:border-orange-600 hover:bg-orange-100/20 border-transparent transition-all pt-6">
					<img
						src={M16}
						className="w-20 rounded-md -mt-10 absolute shadow-2xl z-10"
					/>
					<img src={HealthCare} className="w-40 mb-4 opacity-50" />
					<h1 className="md:text-xl text-sm">
						Best <strong>Healthcare</strong> Project
					</h1>
					<div className="flex flex-col justify-center items-center md:text-base text-sm">
						<p className="dark:text-white/60">₹ 5,000</p>
					</div>
				</div>
				<div className="md:w-1/4 w-1/3 flex flex-col justify-center items-center border-t-4 hover:border-orange-600 hover:bg-orange-100/20 border-transparent transition-all pt-6">
					<img src={Trophy} className="w-40 mb-4" />
					<h1 className="md:text-xl text-sm text-center">
						<strong>1st</strong> Prize
					</h1>
					<div className="flex flex-col justify-center items-center md:text-base text-sm">
						<p className=" dark:text-white/60">₹ 3,000</p>
					</div>
				</div>
			</div>
			<p className="text-gray-600 dark:text-gray-200 text-center italic">
				Winners will also get INR 5k+ worth of goodies from our sponsors.
			</p>
		</div>
	);
}

export default PrizesComponent;
