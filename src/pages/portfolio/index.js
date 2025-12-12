// app/portfolio/page.jsx
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { portfolios } from "@/data/portfolio";

export default function PortfolioList() {
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

      <section className="bg-white min-h-screen text-black p-6">
        <h1 className="text-4xl font-bold mb-[90px]">Portfolio</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {portfolios.map((p) => (
            <div
              key={p.id}
              onClick={() => router.push(`/portfolio/${p.id}`)} // route -> /portfolio/[id]
              className="cursor-pointer border p-6 rounded-md hover:shadow-lg transition"
            >
              <div className="w-full flex mt-[-70px] justify-center">
                <div className="w-40 h-40 overflow-hidden">
                  <Image
                    src={p.image}
                    width={160}
                    height={160}
                    alt={p.name}
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-center mt-4">
                {p.name}
              </h2>
              <p className="text-center text-gray-600">📍 {p.location}</p>
              <p className="text-center text-gray-600">💼 {p.experience}</p>
              <p className="text-center text-gray-600 ">👍 {p.rating}</p>

              <div className="flex justify-center mt-4">
                <button className="px-6 py-2 rounded-full bg-amber-700 text-white">
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
}
