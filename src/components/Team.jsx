import React from "react";
import { TEAM_MEMBERS } from "../constants";

const Team = () => {
  return (
    <section className='container mx-auto px-8 py-20' id='team'>
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Team
      </h2>
      <div className="flex flex-wrap">
        {TEAM_MEMBERS.map((member, index) => (
          <div key={index} className="mb-12 flex w-full flex-col items-center px-4 text-center md:w-1/2 lg:w-1/3 p-4">
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mb-4 shadow-lg" 
              />
            </div>
            <h3 className="lg:text-xl tracking-tighter font-semibold">{member.name}</h3>
            <p className="text-gray-600 lg:text-lg">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;