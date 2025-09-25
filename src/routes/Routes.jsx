import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/error/Error";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Home from "@/pages/Home/Home";
import Team from "@/pages/Application/Team";
import Applicationregistration from "@/pages/Application/Applicationregistration";
import JoinourTeam from "@/pages/joinourteam/JoinourTeam";
import SelectedGame from "@/pages/SelectedGame/SelectedGame";
import Applicationform1 from "@/pages/Application/Applicationform1";
import Applicationform2 from "@/pages/Application/Applicationform2";
import Jobdetails from "@/pages/JobDetails/Jobdetails";
import Jobapplicationform from "@/pages/Jobapplicationform/Jobapplicationform";
import ExpandedOffering from "@/pages/ExpandedOffering/ExpandedOffering";
import OfferDetails from "@/pages/OfferDetails/OfferDetails";
import About from "@/pages/About/About"; 
import Legalpage from "@/pages/Legalpage/Legalpage";
import Checkout from "@/pages/Checkout/Checkout";
import AppGame from "@/pages/App&Games/AppGame";
import Resources from "@/pages/Resources/Resources";
import Resourcedetails from "@/pages/Resource-details/Resourcedetails";
import Support from "@/pages/Support/Support";
import Support2 from "@/pages/Support-2/Support2";
import Support3 from "@/pages/Support-3/Support3";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/selected-game",
        element: <SelectedGame />,
      },
      {
        path: "/expanded-offerings",
        element: <ExpandedOffering />,
      },
      {
        path: "/offer-details",
        element: <OfferDetails />,
      },
      {
        path: "/application-registration",
        element: <Applicationregistration />,
      },
      {
        path: "/join-our-team",
        element: <JoinourTeam />,
      },
      {
        path: "/application-form-1",
        element: <Applicationform1 />,
      },
      {
        path: "/application-form-2",
        element: <Applicationform2 />,
      },
      {
        path: "/job-details",
        element: <Jobdetails />,
      },
      {
        path: "/job-application-form",
        element: <Jobapplicationform />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/app-games",
        element: <AppGame/>
      },
      {
        path: "/legal-page",
        element: <Legalpage/>
      },
      {
        path: "/resource",
        element: <Resources/>
      },
      {
        path: "/resource-details",
        element: <Resourcedetails/>
      },
      {
        path: "/support",
        element: <Support/>
      },
      {
        path: "/support-2",
        element: <Support2/>
      },
      {
        path: "/support-3",
        element: <Support3/>
      }
    ],
  },
]);
