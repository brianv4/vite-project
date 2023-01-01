import React from "react";

function SectionTitle({ children, id }) {
  return (
    <h1 id={id && id} className="text-3xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 dark:text-transparent">
      {children}
    </h1>
  );
}

export default SectionTitle;
