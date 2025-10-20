import React from "react";
import { BASE_URL } from "../js/config";
import { useDELETE } from "../hooks/useDELETE";

const EntryCard = ({ info,refetch }) => {

    const url=BASE_URL;
    const { handleDelete }=useDELETE(url,info,refetch)

  return (
    <div className="shadow-lg flex-shrink-0 border-2 rounded-2xl px-10 flex flex-col justify-center gap-8 text-lg h-max py-10 min-w-1/3">
      <p>
        <span className="font-bold">Name: </span>
        {info.name}
      </p>
      <p>
        <span className="font-bold">Email:</span> {info.email}
      </p>
      <p>
        <span className="font-bold">Password:</span> {info.password}
      </p>
      <button onClick={handleDelete} className="bg-red-600 self-end text-white p-2 rounded-lg cursor-pointer active:scale-90 duration-100 transition-all">Delete</button>
    </div>
  );
};

export default EntryCard;
