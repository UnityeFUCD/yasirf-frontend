import Footer from "@/pages/Shared/Footer";
import Navbar from "@/components/Navbar";
import { Outlet, ScrollRestoration, useLocation } from "react-router";

function MainLayout() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/team" || 
    location.pathname === "/application-form-1" ||
    location.pathname === "/application-form-2" ||
    location.pathname === "/job-details" ||  
    location.pathname === "/job-application-form" ||
    location.pathname === "/about"  ||
    location.pathname === "/app-games"
    location.pathname === "/join-our-team" 

  return (
    <div>
      <ScrollRestoration />
      <div className="font-Rajdhani w-full h-full relative bg-background">
        {!hideLayout && (
          <div className="absolute top-0 z-20 w-full">
            <Navbar />
          </div>
        )}
        <div className="w-full">
          <Outlet />
        </div>
        {!hideLayout && <Footer />}
      </div>
    </div>
  );
}

export default MainLayout;
