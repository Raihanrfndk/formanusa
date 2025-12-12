"use client";

import HeroSection from "@/components/banner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const freelancers = [
  {
    id: 1,
    name: "Farah Queen",
    location: "Bekasi, Pondok Gede",
    experience: "5 Year Experience",
    rating: "100%",
    image: "/port1.png",
    skills: [
      "Architectural Design",
      "2D Design",
      "3D Design",
      "Architecture",
      "Rendering",
    ],
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
  const router = useRouter();
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
          <h1 className="text-6xl font-bold mb-4">Portfolio</h1>
        </div>
      </section>

      <section className="bg-white min-h-screen text-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {freelancers.map((f) => (
            <div
              key={f.id}
              onClick={() => router.push(`/freelancers/${f.id}`)}
              className="cursor-pointer border p-6 rounded-md hover:shadow-lg transition"
            >
              <div className="w-full flex justify-center">
                <div className="w-40 h-40 border rounded-md overflow-hidden">
                  <Image src={f.image} width={160} height={160} alt={f.name} />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-center mt-4">{f.name}</h1>

              <div className="flex justify-center gap-1 text-gray-600">
                <span>📍</span> <p>{f.location}</p>
              </div>

              <button className="block mx-auto mt-5 bg-amber-700 text-white px-6 py-2 rounded-full">
                Book
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
