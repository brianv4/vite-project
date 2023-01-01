import React from "react";

function ExperienceItem({ title, icon, description }) {
  return (
    <div className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5 mb-5">
      <h1 className="text-gray-800 dark:text-gray-200 mb-2 font-extrabold text-xl">{icon}</h1>
      <div className="font-semibold text-lg text-gray-600 dark:text-gray-400 mb-2">{title}</div>
      <p className="text-md text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default ExperienceItem;
