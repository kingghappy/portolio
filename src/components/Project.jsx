import React from "react";
import ProjectItem from "./ProjectItem";
import towd from "../img/2d.png";
import comer from "../img/comer.jpg";
import crypto from "../img/Cryptocurrency.jpg";
import dif from "../img/different-social.jpg";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-4">
        Projects
      </h1>
      <p className="text-center py-8">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={towd} title="Movie app" />
        <ProjectItem img={comer} title="Commercial app" />
        <ProjectItem img={crypto} title="Crypto app" />
        <ProjectItem img={dif} title="Social app" />
      </div>
    </div>
  );
};

export default Project;
