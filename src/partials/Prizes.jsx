import React, { useContext } from "react";
// import Trophy from "../assets/icons/winner.png";
// import GOG from "../images/sponsors/GOG.png";
// import XYZ from "../images/sponsors/xyz.png";
// import XYZwhite from "../images/sponsors/xyzwhite.png";
// import Logo from "../images/logo.png";
import { DarkThemeContext } from "../App";
import PrizesComponent from "../components/Prizes/Prizes";
import Swags from "../components/Prizes/Swags";
// import Swags from "../components/Prizes/Swags";

const state = {
	prizes: "prizes",
	swags: "swags",
};

function Prizes() {
	const { isDarkTheme } = useContext(DarkThemeContext);
	const [active, setActive] = React.useState(state.swags);

	return (
		<section className="relative" id="prizes">
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20" data-aos="flip-right">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center ">
						<h1 className="dark:text-white h2 mb-4">Prizes</h1>
						<div className="flex justify-center mb-5 mt-5">
							<button
								className={`p-2 border-b-4 dark:text-white rounded-t-md ${
									active == state.prizes &&
									"border-orange-400 bg-orange-100 dark:text-black"
								} transition-all `}
								onClick={() => setActive(state.prizes)}>
								Prizes
							</button>
							<button
								className={`p-2 border-b-4 dark:text-white rounded-t-md ${
									active == state.swags &&
									"border-orange-400 bg-orange-100 dark:text-black"
								} transition-all `}
								onClick={() => setActive(state.swags)}>
								Swags for All
							</button>
						</div>
					</div>
					{active == state.prizes ? <PrizesComponent /> : <Swags />}
				</div>
			</div>
		</section>
	);
}

export default Prizes;
