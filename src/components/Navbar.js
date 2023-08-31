import React from "react";

const Navbar = () => {
    
  return (
    <div className="flex items-center p-4 justify-between absolute z-[100] w-full">
      <h1 className="text-red-700 text-4xl font-bold cursor-pointer">
        HULU
      </h1>
      <div>
        <button className= "text-white pr-4">Log In</button>
        <button className= "bg-red-600 text-white px-6 py-2 rounded cursor-pointer"> Sing up</button>
      </div>
    </div>
  );
};

export default Navbar;
