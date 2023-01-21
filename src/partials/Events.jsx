import { useQuery } from '@tanstack/react-query';
import dayjs from '../utils/day';
import { gql } from 'graphql-request';
import React from 'react';
import { hygraph } from '../utils/hygraph';
import { BiCalendar, BiLocationPlus } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import EventsCard from '../components/Events/Card';

function Events() {

  const {data,loading,error} = useQuery({
    queryKey: ["events-data"],
    queryFn: async () => await hygraph.request(
      gql`
      {
        events {
          content
          createdAt
          id
          name
          publishedAt
          time
          updatedAt
          url
          venue
          post {
            id
            url
          }      
        }
      }      `
    )
  });


  const events= [
    {
      name: "Introductory Session",
      date: "22 January",
      time: "2:00 PM",
      details: "All Details About Session"
    },
    {
      name: "Introductory Session",
      date: "22 January",
      time: "2:00 PM",
      details: "All Details About Session"
    }
  ]
  return (
    <section className='relative' id="Events">
      {loading && "Loading... Please Wait"}
      {error && "Error Occured"}
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 my-8">
        <div className="dark:bg-black transition-all flex flex-col items-center mb-10" data-aos="fade-up">
          {/* Section  */}
					<div className="max-w-3xl mx-auto text-center w-full">
            <h1 className="dark:text-white h2 mb-6">Events</h1>
            {data?.events.map((event)=>(
              <EventsCard 
                event={event}
              />
            ))}
          </div>
        </div>
				<div className="border" />
      </div>
    </section>
  )
}

export default Events