import React from "react";
import services from "../data/experience";
import SectionTitle from "./SectionTitle";
import ExperienceItem from "./ExperienceItem";
import experience from "../data/experience";

function Experience() {
  return (
    <div className="py-12">
      <SectionTitle>Pengalaman Kerja</SectionTitle>
      {experience.map((experience) => (
        <ExperienceItem key={experience.title} title={experience.title} icon={experience.icon} description={experience.description} />
        ))}
    </div>
  );
}

export default Experience;
