"use client";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Apa saja yang termasuk dalam jasa design ini?",
      a: "Kami menyediakan jasa desain arsitektur eksterior, gambar kerja, konsultasi, dan rekomendasi material.",
    },
    {
      q: "Apakah layanan ini termasuk desain interior ?",
      a: "Ya, desain interior dapat kami kerjakan sesuai kebutuhan klien.",
    },
    {
      q: "Bagaimana Proses Kerja Kami ?",
      a: "Dimulai dari konsultasi, desain konsep, revisi, hingga finalisasi gambar siap bangun.",
    },
    {
      q: "Berapa lama waktu pengerjaan desain?",
      a: "Rata-rata pengerjaan 2-6 minggu tergantung kompleksitas proyek.",
    },
    {
      q: "Apakah desain yang dibuat bisa digunakan untuk IMB/PBG?",
      a: "Ya, kami dapat menyiapkan gambar teknis sesuai kebutuhan perizinan.",
    },
    {
      q: "Bagaimana sistem pembayaran di proyek desain ini?",
      a: "Pembayaran dilakukan bertahap sesuai progres pekerjaan.",
    },
    {
      q: "Apakah bisa request gaya tertentu dalam desain nusantara ?",
      a: "Sangat bisa! Kami berpengalaman dalam desain gaya lokal budaya Indonesia.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-white text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Frequently Ask Question
      </h1>

      <div className="w-full max-w-3xl space-y-2">
        {faqs.map((item, index) => (
          <div key={index} className="bg-[#A6714E] text-white rounded">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 py-3 text-left font-semibold flex justify-between items-center"
            >
              <span>
                {index + 1}. {item.q}
              </span>
              <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
            </button>

            {openIndex === index && (
              <div className="px-4 py-4 text-sm bg-[#8d593e]">{item.a}</div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => history.back()}
        className="mt-10 bg-[#A6714E] hover:bg-[#774e3a] text-white px-8 py-2 rounded-full"
      >
        BACK
      </button>
    </div>
  );
}
