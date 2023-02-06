import React from "react";
import { Link } from "react-router-dom";

const Card = ({ module }) => {
  const { moduleName, moduleDescription, moduleRoute, img, resetOutput } =
    module;
  return (
    <div className="card shadow-xl">
      <figure>
        <img className="h-32 w-full" src={img} alt="pd" />
      </figure>
      <div className="card-body flex flex-col items-center justify-center text-center text-white md:p-4 bg-slate-600 rounded-b-2xl p-2">
        <div>
          <h2 className="md:text-lg">
            <span>{moduleName}</span>
          </h2>
        </div>
        <div>
          <p className="text-sm text-gray-400">{moduleDescription}</p>
        </div>
        <div>
          <Link to={moduleRoute}>
            <button
              className="bg-red-500 hover:bg-red-700 px-6 py-2 rounded-full mt-2 scale-95 hover:scale-100"
              onClick={resetOutput}
            >
              <p>Get Started</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
