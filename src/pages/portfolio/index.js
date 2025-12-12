import HeroSection from "@/components/banner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const freelancers = [
  {
    name: "Farah Queen",
    location: "Bekasi, Pondok Gede",
    experience: "5 Year Experience",
    rating: "100%",
    image: "/img/port1.png",
    skills: [
      "Architectural Design",
      "2D Design",
      "3D Design",
      "Architecture",
      "Rendering",
    ],
  },
  {
    name: "Randy Lestari",
    location: "Depok, Bojongari",
    experience: "2 Year Experience",
    rating: "95%",
    image: "/img/randy.png",
    skills: [
      "Architectural Design",
      "2D Design",
      "3D Design",
      "Architecture",
      "Rendering",
    ],
  },
  {
    name: "Kiwil Apem",
    location: "Tangerang, Karawaci",
    experience: "4 Year Experience",
    rating: "100%",
    image: "/img/kiwil.png",
    skills: [
      "Architectural Design",
      "2D Design",
      "3D Design",
      "Architecture",
      "Rendering",
    ],
  },
  {
    name: "Menuun Sari",
    location: "Jakarta Selatan, Lenteng Agung",
    experience: "5 Year Experience",
    rating: "100%",
    image: "/img/menun.png",
    skills: [
      "Architectural Design",
      "2D Design",
      "3D Design",
      "Architecture",
      "Rendering",
    ],
  },
  {
    name: "Acumalaka",
    location: "Bogor, Tanah Sareal",
    experience: "6 Year Experience",
    rating: "100%",
    image: "/img/acumalaka.png",
    skills: [
      "Architectural Design",
      "2D Design",
      "3D Design",
      "Architecture",
      "Rendering",
    ],
  },
  {
    name: "Randy Orton",
    location: "Jakarta Barat, Rawa Belong",
    experience: "5 Year Experience",
    rating: "100%",
    image: "/img/orton.png",
    skills: [
      "Architectural Design",
      "2D Design",
      "3D Design",
      "Architecture",
      "Rendering",
    ],
  },
];

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <section
        className="relative w-full h-85 flex flex-col justify-between"
        style={{
          backgroundImage: "url('/banner.png')", // place your background image in public/
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for darker contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-[75%] px-20 text-white">
          <h1 className="text-6xl font-bold mb-4">Forma Nusa</h1>
        </div>
      </section>

      <section className="bg-white min-h-screen text-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {freelancers.map((f, index) => (
            <div
              key={index}
              className="border p-6 rounded-md shadow-sm bg-white max-w-sm mx-auto"
            >
              {/* Image */}
              <div className="w-full flex justify-center">
                <div className="w-40 h-40 overflow-hidden border rounded-md">
                  <Image
                    src={f.image}
                    alt={f.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Name */}
              <h1 className="text-2xl font-bold text-center mt-4">{f.name}</h1>

              {/* Location */}
              <div className="flex justify-center items-center mt-1 gap-1 text-gray-600">
                <span>📍</span>
                <p>{f.location}</p>
              </div>

              {/* Experience + Rating */}
              <div className="flex justify-center items-center gap-3 mt-2 text-gray-700">
                <div className="flex items-center gap-1">
                  <span>💼</span>
                  <p>{f.experience}</p>
                </div>

                <div className="flex items-center gap-1 border px-2 py-1 rounded-md text-sm">
                  <span>👍</span>
                  <p>{f.rating}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {f.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="flex justify-center mt-6">
                <button className="px-6 py-2 rounded-full bg-amber-700 text-white hover:bg-amber-800">
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
