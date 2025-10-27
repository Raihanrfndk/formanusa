import Link from "next/link";
import React from "react";

const ServiceFooter = () => {
  return (
    <div
      className="text-white mb-10 gap-5 w-screen h-auto flex flex-col justify-center items-center py-10"
      style={{
        backgroundImage: "url('/batik-footer.png')",
      }}
    >
      <h1 className="text-4xl font-bold">Saatnya Wujudkan Rumah Impian Anda</h1>
      <h3 className="text-sm">
        Konsultasi gratis dengan arsitek berpengalaman. Tanpa komitmen, tanpa
        biaya tersembunyi.
      </h3>
      <Link href="/form">
        <button className="bg-[#a47d53] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#8c6c48] transition">
          Mulai Konsultasi
        </button>
      </Link>
    </div>
  );
};

export default ServiceFooter;
