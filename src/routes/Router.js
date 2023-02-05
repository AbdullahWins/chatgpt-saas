import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import AIDA from "../components/Modules/AIDA";
import AiLawyer from "../components/Modules/AiLawyer";
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
    ],
  },

  {
    path: "*",
    element: <h2>lalala</h2>,
  },
]);
