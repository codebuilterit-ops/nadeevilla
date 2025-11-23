import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Note: Keeping slick-carousel imports here, but still recommend moving them 
// to the root file (e.g., main.jsx) if issues persist.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "../../Components/Hero";
import Title from "../../Components/Title";
import SubTitle from "../../Components/SubTitle";
import AboutLankaHome from "../About/AboutLankaHome";
import Trending from "../../Components/Trending";
import Packages from "../../Components/Packages";
import Video from "./VideoSection";
import Gallery from "../Gallery/Gallery";


import heroVideo1 from "../../assets/HomepageImages/hero2.mp4";
import heroVideo2 from "../../assets/HomepageImages/hero1.mp4";




const Home = () => {
  const location = useLocation();

  // Scroll to section if navigation state exists
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <div className="bg-gray-800">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
    
      <div id="special-selection" >
          <Title text1={"About"} text2={"Us"} />
        <AboutLankaHome />
      </div>

      {/* Trending Hotels Section - Wrapped in a specific container */}
       <Title text1={"Our"} text2={"Hotel"} />
      <div className="w-full relative"> {/* Added wrapper div */}
        <Trending />
      </div>

      {/* Packages Section - Wrapped in a specific container */}
     
      <div id="packages-section" className="w-full relative"> {/* Added wrapper div */}
        <Packages />
      </div>

      {/* Video Section */}
      <Video heroVideo={heroVideo2} />

      {/* Gallery Section */}
      <Title text1={"Gallery"} text2={"Section"} />
      <div id="gallery-section">
        <Gallery />
      </div>

      <Video heroVideo={heroVideo1} />
    </div>
  );
};

export default Home;