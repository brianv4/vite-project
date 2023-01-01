import React from "react";

function HeroSection() {
  return (
    <div className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 dark:text-transparent font-semibold">Hi, I'am Brian Vidyanjaya</h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-500 dark:text-gray-300">Hello, My name is Brian Vidyanjaya, you can call me brayen. I'm a frontend developer. I'm 22 years old and I live in Probolinggo, East Java.</p>
        <a href="#works" className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:text-md">
          Look me
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
