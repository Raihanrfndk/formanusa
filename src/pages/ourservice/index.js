import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceBanner from "@/components/service-banner";
import ServiceContact from "@/components/service-contact";
import ServiceFooter from "@/components/service-footer";
import ServiceJasa from "@/components/service-jasa";
import React from "react";

const ServicePage = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <ServiceBanner />
      <ServiceContact />
      <ServiceJasa />
      <ServiceFooter />
      <Footer />
    </div>
  );
};

export default ServicePage;
