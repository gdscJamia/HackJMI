import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sim4 from "../assets/topteams/sim4.jpg";
import Nerds from "../assets/topteams/nerds.jpg";
import Dev from "../assets/topteams/devansh.jpg";
import Exterminators from "../assets/topteams/exterminators.jpg";
import GreedyDev from "../assets/topteams/yoga.jpg";
import Paradox from "../assets/topteams/paradox.jpg";
import Phoenics from "../assets/topteams/phoenix.jpg";
import Promaniacs from "../assets/topteams/promaniacs.jpg";
import Superdev from "../assets/topteams/superdev.jpg";
import Ensemble from "../assets/topteams/ensemble.jpg"


const topteams=[
    {
        name: "SIM4",
        logo: Sim4,
        projectname: "Accident Alert System",
        projectlink: "https://devfolio.co/submissions/accident-alert-system-e55f"
    },
    {
        name: "Pro Maniacs",
        logo: Promaniacs,
        projectname: "Nerds",
        projectlink: "https://devfolio.co/submissions/glucobot-7d8e"
    },
    {
        name: "Phoenics",
        logo: Phoenics,
        projectname: "Paisa Planner",
        projectlink: "https://devfolio.co/projects/paisa-planner-49a1"
    },
    {
        name: "Devansh",
        logo:Dev,
        projectname: "Take The Fund",
        projectlink: "https://devfolio.co/submissions/takethefund-779f"
    },
    {
        name: "Greedy Devs",
        logo: GreedyDev,
        projectname: "AI Yoga Assistent",
        projectlink: "https://devfolio.co/projects/ai-yoga-assistant-dad7"
    },
    {
        name: "Paradox",
        logo:Paradox,
        projectname: "Gesto",
        projectlink: "https://devfolio.co/projects/gesto-15bc"
    },
    {
        name: "Exterminators",
        logo: Exterminators,
        projectname: "SkillBook",
        projectlink: "https://devfolio.co/projects/skillbook-19c9"
    },
    {
        name: "SuperDev",
        logo: Superdev,
        projectname: "Maths",
        projectlink: "https://devfolio.co/projects/mathsmonitoring-airtemperature-and-humidity-system-cfde"
    },
    {
        name: "Nerds",
        logo:Nerds,
        projectname: "Nerds",
        projectlink: "https://devfolio.co/submissions/nerds-9430"
    },
    {
        name: "The_A_Team",
        logo: Ensemble,
        projectname: "Ensemble",
        projectlink: "https://devfolio.co/submissions/nerds-9430"
    }
]

function TopTeams() {
    const responsive=[
        {
          breakpoint: 3000,
          settings: {
            slidesToShow:3,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2.6,
          }
        },
        {
            breakpoint: 420,
            settings: {
              slidesToShow: 1.5,
            }
          }
      ]
  return (
    <div>
		<section className="relative" id="prizes">
        <div className="max-w-3xl mx-auto text-center mb-10">
			<h1 className="dark:text-white h2 mb-4">Top Teams</h1>
        </div>
        <Slider
              draggable
              responsive={responsive}
              autoplay
              infinite={true}
              speed={1000}
              autoplaySpeed={2000}
              slidesToScroll={1}
              className='px-5 md:px-20 mb-20'
              pauseOnHover={false}
        >
            {topteams.map((team,index)=>(
                <div key={index} className='flex item-center justify-center'>
                <div className='w-50 lg:mx-10 sm:mx-4 mx-2 rounded-md '>
                <a href={team.projectlink} target="_blank">
                    <img src={team.logo} alt="" className='w-full rounded-t-md'/>
                </a>
                    <div className='flex flex-col rounded-b-md dark:bg-gray-900 bg-gray-200 mt-2'>
                        <div className='p-2 md:p-4 text-sm font-semibold md:text-base h-20'>
                        <p className='dark:text-white uppercase'>{team.name}</p>
                        <a href={team.projectlink} target="_blank" className='text-orange-600'>{team.projectname}</a>
                        </div>
                    </div>
                </div>
                <div></div>
                </div>
               
            ))}
        </Slider>
        </section>
    </div>
  )
}

export default TopTeams