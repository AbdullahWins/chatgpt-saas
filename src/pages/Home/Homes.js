import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ai from "../../assets/ai.png";
import { AiContext } from "../../contexts/AiContext";

const Homes = () => {
  const { setOutput } = useContext(AiContext);

  const resetOutput = () => {
    const output = "";
    setOutput(output);
  };

  return (
    <div className="bg-white">
      <h1 className="text-xl font-bold text-center text-white bg-red-500 py-4">
        <span>
          <i className="fa-solid fa-seedling fa-beat"></i>
        </span>
        --Assistant Dashboard--
        <span>
          <i className="fa-solid fa-seedling fa-beat"></i>
        </span>
      </h1>
      {/* cards */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
        <div className="card shadow-xl">
          <figure>
            <img src={ai} alt="pd" />
          </figure>
          <div className="flex flex-col items-center justify-center text-center text-white md:p-4 bg-slate-600 rounded-b-2xl p-2">
            <div>
              <h2 className="md:text-lg">
                <span>Product Description</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Generates SEO friendly product descriptions!
              </p>
            </div>
            <div>
              <Link to="/pd">
                <button
                  className="bg-red-500 px-6 py-2 rounded-full mt-2 scale-95 hover:scale-100"
                  onClick={resetOutput}
                >
                  <p>Get Started</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure>
            <img src={ai} alt="pd" />
          </figure>
          <div className="flex flex-col items-center justify-center text-center text-white md:p-4 bg-slate-600 rounded-b-2xl p-2">
            <div>
              <h2 className="md:text-lg">
                <span>Product Description</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Generates SEO friendly product descriptions!
              </p>
            </div>
            <div>
              <Link to="/pd">
                <button
                  className="bg-red-500 px-6 py-2 rounded-full mt-2 scale-95 hover:scale-100"
                  onClick={resetOutput}
                >
                  <p>Get Started</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure>
            <img src={ai} alt="pd" />
          </figure>
          <div className="flex flex-col items-center justify-center text-center text-white md:p-4 bg-slate-600 rounded-b-2xl p-2">
            <div>
              <h2 className="md:text-lg">
                <span>Product Description</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Generates SEO friendly product descriptions!
              </p>
            </div>
            <div>
              <Link to="/pd">
                <button
                  className="bg-red-500 px-6 py-2 rounded-full mt-2 scale-95 hover:scale-100"
                  onClick={resetOutput}
                >
                  <p>Get Started</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure>
            <img src={ai} alt="pd" />
          </figure>
          <div className="flex flex-col items-center justify-center text-center text-white md:p-4 bg-slate-600 rounded-b-2xl p-2">
            <div>
              <h2 className="md:text-lg">
                <span>Product Description</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Generates SEO friendly product descriptions!
              </p>
            </div>
            <div>
              <Link to="/pd">
                <button
                  className="bg-red-500 px-6 py-2 rounded-full mt-2 scale-95 hover:scale-100"
                  onClick={resetOutput}
                >
                  <p>Get Started</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure>
            <img src={ai} alt="pd" />
          </figure>
          <div className="flex flex-col items-center justify-center text-center text-white md:p-4 bg-slate-600 rounded-b-2xl p-2">
            <div>
              <h2 className="md:text-lg">
                <span>Product Description</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Generates SEO friendly product descriptions!
              </p>
            </div>
            <div>
              <Link to="/pd">
                <button
                  className="bg-red-500 px-6 py-2 rounded-full mt-2 scale-95 hover:scale-100"
                  onClick={resetOutput}
                >
                  <p>Get Started</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure>
            <img src={ai} alt="pd" />
          </figure>
          <div className="flex flex-col items-center justify-center text-center text-white md:p-4 bg-slate-600 rounded-b-2xl p-2">
            <div>
              <h2 className="md:text-lg">
                <span>Product Description</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Generates SEO friendly product descriptions!
              </p>
            </div>
            <div>
              <Link to="/pd">
                <button
                  className="bg-red-500 px-6 py-2 rounded-full mt-2 scale-95 hover:scale-100"
                  onClick={resetOutput}
                >
                  <p>Get Started</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure>
            <img src={ai} alt="pd" />
          </figure>
          <div className="flex flex-col items-center justify-center text-center text-white md:p-4 bg-slate-600 rounded-b-2xl p-2">
            <div>
              <h2 className="md:text-lg">
                <span>Product Description</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Generates SEO friendly product descriptions!
              </p>
            </div>
            <div>
              <Link to="/pd">
                <button
                  className="bg-red-500 px-6 py-2 rounded-full mt-2 scale-95 hover:scale-100"
                  onClick={resetOutput}
                >
                  <p>Get Started</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure>
            <img src={ai} alt="pd" />
          </figure>
          <div className="flex flex-col items-center justify-center text-center text-white md:p-4 bg-slate-600 rounded-b-2xl p-2">
            <div>
              <h2 className="md:text-lg">
                <span>Product Description</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Generates SEO friendly product descriptions!
              </p>
            </div>
            <div>
              <Link to="/pd">
                <button
                  className="bg-red-500 px-6 py-2 rounded-full mt-2 scale-95 hover:scale-100"
                  onClick={resetOutput}
                >
                  <p>Get Started</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure>
            <img src={ai} alt="pd" />
          </figure>
          <div className="flex flex-col items-center justify-center text-center text-white md:p-4 bg-slate-600 rounded-b-2xl p-2">
            <div>
              <h2 className="md:text-lg">
                <span>Product Description</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Generates SEO friendly product descriptions!
              </p>
            </div>
            <div>
              <Link to="/pd">
                <button
                  className="bg-red-500 px-6 py-2 rounded-full mt-2 scale-95 hover:scale-100"
                  onClick={resetOutput}
                >
                  <p>Get Started</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure>
            <img src={ai} alt="pd" />
          </figure>
          <div className="flex flex-col items-center justify-center text-center text-white md:p-4 bg-slate-600 rounded-b-2xl p-2">
            <div>
              <h2 className="md:text-lg">
                <span>Product Description</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Generates SEO friendly product descriptions!
              </p>
            </div>
            <div>
              <Link to="/pd">
                <button
                  className="bg-red-500 px-6 py-2 rounded-full mt-2 scale-95 hover:scale-100"
                  onClick={resetOutput}
                >
                  <p>Get Started</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homes;
