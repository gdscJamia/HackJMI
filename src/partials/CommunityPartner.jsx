import React from 'react'
import { CgCommunity } from "react-icons/cg";
import communitypartnerData from '../data/components.data';


function CommunityPartner() {
  return (
    <section className="relative" id="community-partners">
        	<div
				className="max-w-3xl mx-auto flex flex-col justify-center items-center text-center pb-12 md:pb-16 md:pt-16">
			<CgCommunity className="w-16 h-16 text-orange-600/50 dark:text-white/30 mb-2" />
		    <h1 className="dark:text-white h3 mb-4">Community Partners</h1>
			<div>
			<button
				className="btn btn-primary mt-4 bg-orange-600 hover:scale-95
								hover:shadow-xl hover:shadow-orange-600/10 hover:bg-orange-700
								transition-all my-5
								text-white"
				onClick={() => {
					window.open("https://bit.ly/hackjmi-partner", "_blank");
			    }}
            >
				Fill Community Partner Form
			</button>
            <div
                className="flex md:gap-6 gap-3 m-1 items-center justify-center mt-10"
            >
                {communitypartnerData.map((item,index) => {
                    return (
                        <div>
                            <img
                                className="w-40 rounded-md self-center shadow-xl dark:shadow-white/10"
                                src={item.src} 
                            />
                        </div>
                    )
                })}
            </div>
		</div>
	</div>
	<div className="border" />
    </section>
  )
}

export default CommunityPartner