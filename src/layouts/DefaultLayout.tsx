import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ServicesCta from "../components/cta/ServicesCta";
import { useState } from "react";

const DefaultLayout: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  return (
    <div
      className={`relative bg-background text-onBackground min-h-screen flex flex-col ${
        isSticky ? `pt-12` : ``
      }`}
    >
      <Header isSticky={isSticky} setIsSticky={setIsSticky} />

      <Outlet />

      <div className="mt-auto">
        <ServicesCta />
        <Footer />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default DefaultLayout;
