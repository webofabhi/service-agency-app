import React from "react";
import { PROJECTS } from "../constants";
const Project = () => {
  return (
    <section id="projects" className="bg-emerald-50 mx-auto px-4 py-12 md:px-8">
      <div>
        <h2 className="my-8 text-center justify-center text-4xl font-semibold tracking-tighter">
          Projects
        </h2>
      </div>
      <div className="space-y-16">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:flex-row-reverse md:space-x-8"
          >
            <div className="w-full p-8 md:w-1/2">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full rounded-3xl shadow-lg"
              />
            </div>
            <div className="w-full p-8 md:w-1/2">
              <h3 className="mb-2 text-lg text-emerald-950">{project.year}</h3>
              <h2 className="mb-2 text-2xl font-semibold text-emerald-950">
                {project.title}
              </h2>
              <p className="mb-4 text-3xl lg:text-4xl text-gray-500">
                {project.description}
              </p>
              <p className="mb-4 text-lg text-emerald-950 lg:text-2xl">
                {project.details}
              </p>
              <table className="min-w-full text-lg lg:text-xl">
                <tbody>
                  <tr>
                    <td className="px-6 py-4 font-medium text-emerald-950">
                      Investment
                    </td>

                    <td className="px-6 py-4 text-emerald-950">
                      {project.figures.investment}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-emerald-950">
                      Duration
                    </td>

                    <td className="px-6 py-4 text-emerald-950">
                      {project.figures.duration}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-emerald-950">
                      Outcomes
                    </td>

                    <td className="px-6 py-4 text-emerald-950">
                      {project.figures.outcome}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
