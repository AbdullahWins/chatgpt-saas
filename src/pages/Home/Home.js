import React, { useContext } from "react";
import Card from "../../components/Shared/Card";
import cover1 from "../../assets/cover/3.png";
import cover2 from "../../assets/cover/8.jpg";
import cover3 from "../../assets/cover/4.png";
import cover4 from "../../assets/cover/6.jpg";
import cover5 from "../../assets/cover/9.png";
import cover6 from "../../assets/cover/2.jpg";
import cover7 from "../../assets/cover/10.jpg";
import cover8 from "../../assets/cover/7.png";
import cover9 from "../../assets/cover/5.jpg";
import cover10 from "../../assets/cover/1.png";
import cover11 from "../../assets/cover/11.png";
import cover12 from "../../assets/cover/12.png";
import cover13 from "../../assets/cover/13.png";
import cover14 from "../../assets/cover/14.png";
import cover15 from "../../assets/cover/15.png";
import cover16 from "../../assets/cover/16.png";
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
      img: cover1,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Product Description",
      moduleDescription:
        "Generate unique product descriptions to catch attention!",
      moduleRoute: "/product",
      img: cover2,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Cold Email",
      moduleDescription:
        "Generate cold rmail templates instantly without any hussle!",
      moduleRoute: "/cold",
      img: cover3,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Job Description Helper",
      moduleDescription: "Generate job descriptions using AI assistant!",
      moduleRoute: "/job",
      img: cover4,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Social Media Adverts",
      moduleDescription: "Write engaging social media adverts to boost sales!",
      moduleRoute: "/social",
      img: cover5,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Ai Lawyer",
      moduleDescription:
        "Your own AI powered artificial lawyer at your service!",
      moduleRoute: "/ai",
      img: cover6,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Unique Value Propositions",
      moduleDescription: "Know the selling points of your product/service!",
      moduleRoute: "/unique",
      img: cover7,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Problem-Agitate-Solution (PAS)",
      moduleDescription:
        "Get quick but in-depth Problem-Agitate-Solution of anything!",
      moduleRoute: "/problem",
      img: cover8,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Headlines and Descriptions",
      moduleDescription:
        "Can't think of a good headline and description? AI got you covered!",
      moduleRoute: "/headlines",
      img: cover9,
      resetOutput: resetOutput,
    },
    {
      moduleName: "AIDA Framework",
      moduleDescription: "The best AI powered AIDA Framework on the internet!",
      moduleRoute: "/aida",
      img: cover10,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Ai Doctor",
      moduleDescription: "Do you have a medical concern? Book in an appointment with the Ai Doctor!",
      moduleRoute: "/doc",
      img: cover11,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Chef",
      moduleDescription: "Hungry? Why not ask our in-house chef for some yummy suggestions!",
      moduleRoute: "/chef",
      img: cover12,
      resetOutput: resetOutput,
    },
    {
      moduleName: "IT Support",
      moduleDescription: "Do you have an technical issue with your computer or any other device, software or hardware? Consult the in-house IT Expert.",
      moduleRoute: "/itsupport",
      img: cover13,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Psychologist",
      moduleDescription: "Have someone listen to the thoughts that keep you up at night. Get some peace of mind and step in to the shrink's office.",
      moduleRoute: "/psychologist",
      img: cover14,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Dream Interpreter",
      moduleDescription: "Did you have a weird dream last night? Come find out what it means.",
      moduleRoute: "/dreamer",
      img: cover15,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Career Counselor",
      moduleDescription: "Need some help deciding on the next step to take in your professional life? Talk to our on-hand career counselor.",
      moduleRoute: "/career",
      img: cover16,
      resetOutput: resetOutput,
    },
  ];

  return (
    <div className="bg-white pb-20 md-pb-0">
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
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
        {moduleList?.map((module, i) => {
          return <Card key={i} module={module}></Card>;
        })}
      </section>
    </div>
  );
};

export default Home;
