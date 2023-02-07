import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import AIDA from "../components/Modules/AIDA";
import AiLawyer from "../components/Modules/AiLawyer";
import AiDoctor from "../components/Modules/AiDoctor";
import ITSupport from "../components/Modules/ITSupport";
import Psychologist from "../components/Modules/Psychologist";
import Dreamer from "../components/Modules/Dreamer";
import Career from "../components/Modules/Career";
import Chef from "../components/Modules/Chef";
import BlogPost from "../components/Modules/BlogPost";
import ColdEmail from "../components/Modules/ColdEmail";
import HeadlinesAndDescriptions from "../components/Modules/HeadlinesAndDescriptions";
import JobDescription from "../components/Modules/JobDescription";
import PAS from "../components/Modules/PAS";
import ProductDescription from "../components/Modules/ProductDescription";
import SocialMediaAdvert from "../components/Modules/SocialMediaAdvert";
import UniqueValueProposition from "../components/Modules/UniqueValueProposition";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <BlogPost></BlogPost>,
      },
      {
        path: "/product",
        element: <ProductDescription></ProductDescription>,
      },
      {
        path: "/cold",
        element: <ColdEmail></ColdEmail>,
      },
      {
        path: "/social",
        element: <SocialMediaAdvert></SocialMediaAdvert>,
      },
      {
        path: "/job",
        element: <JobDescription></JobDescription>,
      },
      {
        path: "/ai",
        element: <AiLawyer></AiLawyer>,
      },
      {
        path: "/unique",
        element: <UniqueValueProposition></UniqueValueProposition>,
      },
      {
        path: "/problem",
        element: <PAS></PAS>,
      },
      {
        path: "/headlines",
        element: <HeadlinesAndDescriptions></HeadlinesAndDescriptions>,
      },
      {
        path: "/aida",
        element: <AIDA></AIDA>,
      },
      {
        path: "/doc",
        element: <AiDoctor></AiDoctor>,
      },
      {
        path: "/chef",
        element: <Chef></Chef>,
      },
      {
        path: "/itsupport",
        element: <ITSupport></ITSupport>,
      },
      {
        path: "/psychologist",
        element: <Psychologist></Psychologist>,
      },
      {
        path: "/dreamer",
        element: <Dreamer></Dreamer>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },

  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);
