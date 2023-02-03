import React, { useMemo, useEffect } from "react";
import { TeamTypes } from "../utils/constant";
import { useState } from "react";
import { TeamService } from "../components/api/Teams";
import { motion } from "framer-motion";
import TeamCard from "../components/Teams/TeamCard";
import Select from "react-select";
import { AnimatePresence } from "framer-motion";

const excludeTags = [TeamTypes.Judge];

function TeamsList({ teams = new TeamService() }) {
	const [selectedTags, setSelectedTags] = useState([TeamTypes.Speaker]);
	const teamTabs = [
		{
			name: "All",
			tag: TeamTypes.All,
		},
		{
			name: "Speakers",
			tag: TeamTypes.Speaker,
		},
		{
			name: "Organizing Team",
			tag: TeamTypes.Organizing,
		},
		{
			name: "Technical Team",
			tag: TeamTypes.Technical,
		},
		{
			name: "Design Team",
			tag: TeamTypes.Design,
		},
		{
			name: "Social Media & Content Team",
			tag: TeamTypes.Social_Media_And_Content,
		},
		{
			name: "Outreach Team",
			tag: TeamTypes.Outreach,
		},
	];

	console.log(teams);

	const handleTagClick = (tag) => {
		setSelectedTags([tag]);
		// if (selectedTags.includes(tag)) {
		// 	setSelectedTags(selectedTags.filter((_tag) => _tag !== tag));
		// } else {
		// 	if (tag === TeamTypes.All) {
		// 		setSelectedTags([tag]);
		// 		return;
		// 	}
		// 	setSelectedTags((prev) => {
		// 		return [...prev.filter((_tag) => _tag !== TeamTypes.All), tag];
		// 	});
		// }
	};

	const tabsData = useMemo(() => {
		return [
			{
				title: "Our Judges",
				data: teams.teams.get(TeamTypes.Judge) ?? [],
				TeamCardProps: {
					className: {
						root: "md:h-96 m-3",
					},
				},
				className: {
					teamCard: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-5",
				},
			},
			{
				title: "Mentors",
				data: teams.teams.get(TeamTypes.Mentor) ?? [],
				TeamCardProps: {
					className: {
						root: "md:h-96 m-3",
					},
				},
				className: {
					teamCard: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-5",
				},
			},
			{
				title: "Our Team",
				data:
					teams.list
						.filter((member) => {
							if (selectedTags.includes(TeamTypes.All)) return true;
							return selectedTags.some((tag) => member.types.includes(tag));
						})
						.filter(
							(member) => !excludeTags.some((tag) => member.types.includes(tag))
						) ?? [],
				className: {
					teamCard:
						"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5",
				},
				extraComponent: () => {
					return (
						<div>
							<Select
								className="w-64"
								options={teamTabs.map((tab) => {
									return {
										label: tab.name,
										value: tab.tag,
									};
								})}
								value={{
									label: teamTabs.find((tab) => tab.tag === selectedTags[0])
										.name,
									value: selectedTags[0],
								}}
								onChange={(selected) => {
									setSelectedTags([selected.value]);
								}}
							/>
						</div>
					);
				},
			},
		];
	}, [selectedTags]);

	console.log(tabsData);

	return (
		<div className="w-full  md:px-20 py-10">
			{tabsData.map((tab, _i) => {
				return (
					<div className="my-5 py-5" key={_i}>
						<h1 className="h2 text-center dark:text-white pb-4">{tab.title}</h1>
						{tab.extraComponent && tab.extraComponent()}
						<div className={tab.className.teamCard}>
							<AnimatePresence>
								{tab.data.map((team, i) => {
									return (
										<motion.div
											key={i}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}>
											<TeamCard
												key={team.id}
												name={team.name}
												designation={team.designation}
												onTagClick={handleTagClick}
												tags={team.types}
												photo={team.photo.url}
												className={tab?.TeamCardProps?.className}
											/>
										</motion.div>
									);
								})}
							</AnimatePresence>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default TeamsList;
