import React, { useContext } from "react";
import { AiContext } from "../../contexts/AiContext";

const AiLawyer = () => {
  const { output, processRequest, isLoading, setIsLoading } =
    useContext(AiContext);

  const handleClick = () => {
    const input = document.getElementById("input")?.value;
    const prompt = "Pretend to be a Lawyer, give suggestion about";
    setIsLoading(true);
    processRequest(prompt, input);
  };

  return (
    <div className="h-screen max-w-3xl mx-auto flex flex-col justify-between gap-4 bg-gray-300">
      <section className="flex flex-col gap-4 p-4">
        <h1 className="text-xl font-bold text-center text-white bg-red-500 p-4">
          <span>
            <i className="fa-solid fa-square-rss"></i>
          </span>
          --AI Lawyer--
          <span>
            <i className="fa-solid fa-square-rss"></i>
          </span>
        </h1>
        <hr />
        <div className="flex gap-2">
          <input
            className={`p-3 w-full rounded-sm border-solid border-2 border-red-200 ${
              isLoading ? "hidden" : "flex"
            }`}
            placeholder="Briefly describe what the situation is about"
            name="blog-input"
            id="input"
          ></input>
          <button
            disabled={isLoading}
            className={`btn hover:bg-red-300 rounded-sm px-4 ${
              isLoading ? "bg-red-700 w-full" : "bg-red-400"
            }`}
            onClick={handleClick}
          >
            {isLoading ? (
              <p>
                <span>
                  <i className="fa-solid fa-gear fa-spin"></i>
                </span>
                <span> Generating Lawful Response</span>
                <span>
                  <i className="fa-solid fa-gear fa-spin"></i>
                </span>
              </p>
            ) : (
              <p>
                <span>
                  <i className="fa-solid fa-gear"></i>
                </span>
                <span> Generate </span>
                <span>
                  <i className="fa-solid fa-gear"></i>
                </span>
              </p>
            )}
          </button>
        </div>
        <div>
          <p className="font-bold text-xl text-center py-2">
            {isLoading ? (
              <i className="fa-solid fa-arrow-down fa-beat-fade"></i>
            ) : (
              <i className="fa-solid fa-arrow-down"></i>
            )}
          </p>
        </div>
        <textarea
          className="p-2 rounded-md border-solid border-2 border-red-200"
          placeholder=""
          defaultValue={output}
          cols="10"
          rows="10"
        ></textarea>
      </section>
    </div>
  );
};

export default AiLawyer;
