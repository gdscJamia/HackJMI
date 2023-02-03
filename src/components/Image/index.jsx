import React, { useContext } from "react";
import { DarkThemeContext } from "../../App";

function ThemeImage({ dark, light, className, ref }) {
	const { isDarkTheme } = useContext(DarkThemeContext);

	return (
		<React.Fragment>
			{isDarkTheme ? (
				<img src={dark} className={className} ref={ref} />
			) : (
				<img src={light} className={className} ref={ref} />
			)}
		</React.Fragment>
	);
}

export default ThemeImage;
