import React, { useContext } from "react";
import Card from "../../components/Shared/Card";
import { AiContext } from "../../contexts/AiContext";

const Home = () => {
  const { setOutput } = useContext(AiContext);
  const resetOutput = () => {
    const output = "";
    setOutput(output);
  };

  const moduleList = [
    {
      moduleName: "Blog Writing Tool",
      moduleDescription: "Write SEO friendly blogs that people actually reads!",
      moduleRoute: "/blog",
      resetOutput: resetOutput,
    },
    {
      moduleName: "Product Description",
      moduleDescription:
        "Generate unique product descriptions to catch attention!",
      moduleRoute: "/product",
      resetOutput: resetOutput,
    },
    {
      moduleName: "Cold Email",
      moduleDescription:
        "Generate cold rmail templates instantly without any hussle!",
      moduleRoute: "/cold",
      resetOutput: resetOutput,
    },
    {
      moduleName: "Job Description Helper",
      moduleDescription: "Generate job descriptions using AI assistant!",
      moduleRoute: "/job",
      resetOutput: resetOutput,
    },
    {
      moduleName: "Social Media Adverts",
      moduleDescription: "Write engaging social media adverts to boost sales!",
      moduleRoute: "/social",
      resetOutput: resetOutput,
    },
    {
      moduleName: "Ai Lawyer",
      moduleDescription:
        "Your own AI powered artificial lawyer at your service!",
      moduleRoute: "/ai",
      resetOutput: resetOutput,
    },
    {
      moduleName: "Unique Value Propositions",
      moduleDescription: "Know the selling points of your product/service!",
      moduleRoute: "/unique",
      resetOutput: resetOutput,
    },
    {
      moduleName: "Problem-Agitate-Solution (PAS)",
      moduleDescription:
        "Get quick but in-depth Problem-Agitate-Solution of anything!",
      moduleRoute: "/problem",
      resetOutput: resetOutput,
    },
    {
      moduleName: "Headlines and Descriptions",
      moduleDescription:
        "Can't think of a good headline and description? AI got you covered!",
      moduleRoute: "/headlines",
      resetOutput: resetOutput,
    },
    {
      moduleName: "AIDA Framework",
      moduleDescription: "The best AI powered AIDA Framework on the internet!",
      moduleRoute: "/aida",
      resetOutput: resetOutput,
    },
  ];

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
      <section className="grid grid-cols-5 gap-6 p-6">
          {moduleList?.map((module, i) => {
            return <Card key={i} module={module}></Card>;
          })}
      </section>
    </div>
  );
};

export default Home;
