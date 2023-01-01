import React from "react";

function Footer() {
  return (
    <div className="py-5 dark:bg-slate-800 bg-slate-300 text-center dark:text-gray-300 text-dark rounded-t-lg">
      <a href="#Hero" className="block text-xl md:text-2xl font-semibold">
        Brian Vidyanjaya
      </a>
      <a href="mailto:vidyanjaya35@gmail.com" className="text-sm md:text-md hover:text-indigo-500">
        vidyanjaya35@gmail.com
      </a>
      <p className="text-xs mt-2 text-gray-500">© Project Brian {new Date().getFullYear()}. All rights reserved</p>
    </div>
  );
}

export default Footer;
