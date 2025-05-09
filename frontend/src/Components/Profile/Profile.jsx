import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../../Redux/action.js";
import { Link } from "react-router-dom";

export const Profile = () => {
  const data = useSelector((state) => state.mernQuize.QuizData);
  const [count, setCount] = useState(0);
  const userName = useSelector((state) => state.mernQuize.userName);

  return (
    <div className="margin-auto shadow-2xl h-96 w-11/12 ml-16 ">
      <h1 className="ml-44 mt-10">
        <strong className="text-teal-500 text-2xl pl-32 font-extrabold italic">
        Click on Attemp Quiz to start the Quiz...
        </strong>{" "}
        
      </h1>
      <div className="flex w-4/5 mb-56 ml-64 mt-16">
        <h1 className="ml-8 w-1/2 mt-32 text-2xl text-sky-600  ">
          {" "}
          Welcome! {userName}👋
        </h1>
        <div className="border-red-500 absolute  bg-teal-300 rounded-2xl border-2 mb-8 p-1 pl-2  pr-2 ">
        <Link to="/">
          <button className="text-xl font-bold rounded-md">Attempt Quiz</button>
        </Link>
      </div>
      </div>
      
    </div>
  );
};
