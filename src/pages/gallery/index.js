"use client";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-6xl font-bold text-[#A6714E] py-5">Gallery</h1>
        {/* ========================== */}
        {/*           ROW 1            */}
        {/* ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-16">
          <Image
            src="/gl1.png"
            alt="Row1 Image"
            width={900}
            height={600}
            className="rounded-xl"
          />

          <div>
            <h2 className="text-2xl font-bold mb-3 text-[#A6714E]">
              Modern-Bali Tropical Haven
            </h2>
            <p className="text-black font-bold leading-relaxed">
              Rumah dua lantai yang menonjolkan atap limasan khas Bali yang
              lebar dan elegan, dipadukan dengan fasad minimalis modern.
              Penggunaan batu alam pada pilar dan dinding menciptakan kesan
              resort yang mewah. Bukaan jendela dan pintu kaca yang besar
              (maksimalisasi open space) memastikan sirkulasi udara dan cahaya
              alami yang optimal, sangat cocok untuk iklim tropis. Sentuhan
              ukiran kayu halus dan taman tropis yang asri melengkapi kesan
              damai dan eksotis.
            </p>
          </div>
        </div>

        {/* ========================== */}
        {/*           ROW 2            */}
        {/* ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {/* Foto */}
          <Image src="/gl2.png" alt="Row2 Image 1" width={600} height={400} />

          {/* Deskripsi */}
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold text-4xl text-[#A6714E] mb-2">
              Jawa-Kontemporer Joglo Elegance
            </h3>
            <p className="text-sm text-gray-700">
              Keagungan Joglo dalam Garis Modern.
            </p>
          </div>

          {/* Foto */}
          <Image src="/gl3.png" alt="Row2 Image 2" width={600} height={400} />

          {/* Deskripsi */}
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold text-4xl text-[#A6714E] mb-2">
              Minangkabau Modern Minimalis
            </h3>
            <p className="text-sm text-gray-700">
              Rancangan Atap Tanduk yang Berani.
            </p>
          </div>
        </div>

        {/* ========================== */}
        {/*           ROW 3            */}
        {/* ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Image src="/gl4.png" alt="Row3 Image 1" width={600} height={400} />

          <div className="flex flex-col justify-between">
            <h3 className="font-semibold text-4xl text-[#A6714E] mb-2">
              Sunda-Panggung Industrial Chic
            </h3>
            <p className="text-sm text-gray-700">
              Ketinggian Rumah Panggung dengan Sentuhan Industrial.
            </p>
          </div>

          <Image src="/gl5.png" alt="Row3 Image 2" width={600} height={400} />

          <div className="flex flex-col justify-between">
            <h3 className="font-semibold text-4xl text-[#A6714E] mb-2">
              Batak-Karo Atap Berjenjang Urban
            </h3>
            <p className="text-sm text-gray-700">
              Dinamika Atap Tradisional di Lahan Kota.
            </p>
          </div>
        </div>

        {/* ========================== */}
        {/*           ROW 4            */}
        {/* ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-16">
          <Image
            src="/gl1.png"
            alt="Row1 Image"
            width={900}
            height={600}
            className="rounded-xl"
          />

          <div>
            <h2 className="text-[#A6714E] text-2xl font-bold mb-3">
              Nusantara Minimalis Aksen Ukir
            </h2>
            <p className="text-black leading-relaxed font-bold">
              Desain urban yang mengambil inspirasi dari bentuk atap berjenjang
              atau lengkung dari rumah adat Batak Karo. Bentuk atap yang
              bertingkat dan tinggi ini diterjemahkan dengan material modern
              seperti genteng metal atau kayu sirap. Bagian fasad menggunakan
              perpaduan batu alam dan kisi-kisi kayu (secondary skin) untuk
              mengurangi panas matahari. Tampilan keseluruhannya kokoh dan
              vertikal, memberikan kesan elegan yang menembus batas waktu,
              sempurna untuk lahan perkotaan yang terbatas.
            </p>
          </div>
        </div>

        {/* ========================== */}
        {/*     OTHER CATALOGUE        */}
        {/* ========================== */}
        <h2 className="text-6xl font-bold text-[#A6714E] py-5 flex justify-center">
          Other Catalogue
        </h2>

        {/* Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          className="pb-10"
        >
          <SwiperSlide>
            <Image
              src="/g1.png"
              width={400}
              height={260}
              className="rounded-xl"
              alt="Catalogue"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/g2.png"
              width={400}
              height={260}
              className="rounded-xl"
              alt="Catalogue"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/g3.png"
              width={400}
              height={260}
              className="rounded-xl"
              alt="Catalogue"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/g4.png"
              width={400}
              height={260}
              className="rounded-xl"
              alt="Catalogue"
            />
          </SwiperSlide>
        </Swiper>
      </main>

      <div className="bg-[#A6714E] flex flex-row justify-between py-15 px-20">
        <div className="flex flex-col items-center">
          <h3 className="font-bold">Stay in Touch With Us!</h3>
          <h1 className="font-extrabold text-4xl">CONSULTASION</h1>
        </div>
        <Link
          href="/form"
          className="flex items-center justify-center w-1/2 bg-[#a47d53] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-white hover:text-black transition"
        >
          Mulai Konsultasi
        </Link>
      </div>

      <Footer />
    </div>
  );
}
