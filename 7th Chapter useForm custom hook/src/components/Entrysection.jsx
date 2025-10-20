import React from "react";
import EntryCard from "./EntryCard";

const Entrysection = ({ data,refetch }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-2 mt-10">
      <h1 className="text-4xl font-extrabold px-5">Users:</h1>
      <div className="flex gap-4 p-4 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 items-center">
        {data.map((info, idx) => (
          <EntryCard refetch={refetch} key={idx} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Entrysection;
