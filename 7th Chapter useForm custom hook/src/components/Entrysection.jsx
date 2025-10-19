import React from "react";

const Entrysection = ({ data }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-2 mt-10">
      <h1 className="text-4xl font-extrabold px-5">Users:</h1>
      <div className="flex gap-4 p-4 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 items-center">
        {data.map((info, idx) => (
          <div key={idx} className="shadow-lg flex-shrink-0 border-2 rounded-2xl px-8 flex flex-col justify-center gap-8 text-lg h-max py-10">
            <p>Name: {info.name}</p>
            <p>Email: {info.email}</p>
            <p>Password: {info.password}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};


export default Entrysection;
