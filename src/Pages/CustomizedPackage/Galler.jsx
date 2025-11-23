import React from "react";
import galler from "../../assets/Gallery/galler.js"; // ✅ make sure this exports an array of images

const Galler = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center  py-16 px-4 sm:px-6 md:px-8">
      {/* ✅ Added background + vertical padding for nice spacing */}

      <h2 className="text-3xl font-semibold mb-10 text-white text-center">
        Travel Moments Gallery
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl w-full">
        {galler.map((image, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white"
          >
            <img
              src={image}
              alt={`galler-${i}`}
              className="w-full h-52 sm:h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galler;
