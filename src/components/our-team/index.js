"use client";
import Image from "next/image";
import React, { useState } from "react";

const OurTeam = () => {
  const teams = [
    {
      img: "/raihan.png",
      name: "Raihan Rifandika | CEO",
      desc: "Raihan adalah pendiri dan CEO Forma Nusa. Dengan latar belakang Business Analytics dan manajemen proyek digital, ia memimpin visi Forma Nusa untuk menghubungkan arsitek profesional dengan klien melalui teknologi yang efisien.",
    },
    {
      img: "/kenzhi.png",
      name: "Kenzhi Baltasar | CFO",
      desc: "Kenzhi bertanggung jawab atas perencanaan dan pengelolaan keuangan Forma Nusa, memastikan keberlanjutan finansial dan efisiensi biaya jangka panjang.",
    },
    {
      img: "/aloysius.png",
      name: "Aloysius Probo | COO",
      desc: "Aloysius mengawasi operasional harian dan memastikan proyek berjalan efisien. Dengan kemampuan manajerial yang kuat, ia fokus pada optimalisasi kerja dan kualitas hasil desain.",
    },
    {
      img: "/nicki.png",
      name: "Nicki Steven | CTO",
      desc: "Nicky memimpin pengembangan teknologi Forma Nusa, memastikan platform arsitektur digital kami berjalan lancar, inovatif, dan aman bagi pengguna.",
    },
    {
      img: "/renjiro.png",
      name: "Renjiro Yodianto | CMO",
      desc: "Renjiro bertanggung jawab atas strategi pemasaran dan pengembangan brand Forma Nusa, dengan fokus pada kampanye digital kreatif dan kemitraan strategis.",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < teams.length - 3) setIndex(index + 3);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 3);
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0) nextSlide();
    else prevSlide();
  };

  return (
    <>
      <h1 className="text-5xl font-bold pl-10 pb-5">Our Team :</h1>

      <div
        className="overflow-hidden bg-[#A6714E] px-10 py-10"
        onWheel={handleScroll}
      >
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(index / 3) * 100}%)` }}
        >
          {teams.map((t, i) => (
            <div
              key={i}
              className="min-w-[30%] flex flex-col items-center text-center px-4"
            >
              <Image
                src={t.img}
                alt={t.name}
                width={200}
                height={200}
                className="rounded-lg mb-3"
              />
              <h1 className="font-bold text-lg">{t.name}</h1>
              <p className="text-xs">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={prevSlide}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default OurTeam;
