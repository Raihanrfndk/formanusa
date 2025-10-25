import React from "react";

const ServiceBanner = () => {
  return (
    <section
      className="relative w-full h-85 flex justify-center"
      style={{
        backgroundImage: "url('/banner-service.png')", // place your background image in public/
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="flex text-white justify-center items-center text-7xl font-bold ">
        Jasa Design Rumah
      </h1>
    </section>
  );
};

export default ServiceBanner;
