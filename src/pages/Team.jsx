import React from "react";
import Header from "../partials/Header";
import { useQuery } from "@tanstack/react-query";
import { TeamService, getTeams } from "../components/api/Teams";
import { TeamTypes } from "../utils/constant";
import { useContext } from "react";
import { DarkThemeContext } from "../App";
import { motion } from "framer-motion";
import { useState } from "react";
import TeamsList from "../partials/TeamsList";

function Team() {
	const { isDarkTheme, setIsDarkTheme } = useContext(DarkThemeContext);
	const { data = new TeamService() } = useQuery({
		queryKey: ["getTeam"],
		queryFn: getTeams,
	});
	const [selectedTags, setSelectedTags] = useState([TeamTypes.All]);

	return (
		<div>
			<Header
				UpdateTheme={() => {
					setIsDarkTheme(!isDarkTheme);
				}}
			/>

			<div className="flex flex-col items-center pt-20 dark:bg-black min-h-screen">
				<TeamsList teams={data} />
			</div>
		</div>
	);
}

export default Team;
