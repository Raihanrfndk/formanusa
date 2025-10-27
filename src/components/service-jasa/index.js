import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceJasa = () => {
  return (
    <>
      <div className="flex flex-row ">
        <div className="w-1/2 flex p-10">
          <Image alt="jasa" src={"/jasa.png"} width={1280} height={1280} />
        </div>
        <div className="w-1/2 flex flex-col px-10 justify-center">
          <h1 className="text-4xl font-bold">Jasa Renovasi Rumah</h1>
          <p className="font-bold py-10">
            Nusa Design adalah platform arsitektur digital yang menghubungkan
            Anda dengan arsitek spesialis rumah tradisional Indonesia. Kami
            menghadirkan solusi desain yang memadukan kearifan budaya Nusantara
            dengan kebutuhan hidup modern, didukung teknologi konsultasi online
            dan manajemen proyek transparan — mulai dari perencanaan konsep
            hingga realisasi rumah yang mencerminkan jati diri Indonesia.
          </p>
          <Link href="/form">
            <button className="w-1/4 bg-[#a47d53] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#8c6c48] transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row ">
        <div className="w-1/2 flex flex-col px-5 gap-5 justify-center">
          <div className="text-4xl">
            <h1 className="font-bold flex justify-center">Jasa Design Rumah</h1>
          </div>
          <div className="flex flex-row gap-5 bg-[#a47d53] text-white px-8 py-3 rounded-lg">
            <div className="flex items-center w-1/10">
              <Image
                alt="confused"
                src={"/confused.png"}
                width={100}
                height={100}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">
                Bingung Mau Mulai Dari Mana?
              </h1>
              <p className="text-xs font-bold">
                Memiliki keinginan membangun atau merenovasi rumah, namun tidak
                tahu langkah yang tepat untuk memulai perencanaan yang matang.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 bg-[#a47d53] text-white px-8 py-3 rounded-lg">
            <div className="flex items-center w-1/10">
              <Image alt="scale" src={"/scale.png"} width={60} height={80} />
            </div>
            <div>
              <h1 className="text-xl font-bold">
                Susah Menemukan Arsitek Yang Tepat?
              </h1>
              <p className="text-xs font-bold">
                Mencari arsitek yang benar-benar memahami visi Anda, terutama
                untuk desain rumah dengan karakter nusantara yang autentik.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 bg-[#a47d53] text-white px-8 py-3 rounded-lg">
            <div className="flex items-center w-1/10">
              <Image
                alt="warning"
                src={"/warning.png"}
                width={80}
                height={80}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">Takut Hasil Mengecewakan?</h1>
              <p className="text-xs font-bold">
                Kekhawatiran bahwa hasil akhir tidak sesuai ekspektasi atau
                arsitek tidak dapat menterjemahkan keinginan dengan baik.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex p-10">
          <Image alt="jasa" src={"/jasa2.png"} width={1280} height={1280} />
        </div>
      </div>

      <div className="flex flex-row ">
        <div className="w-1/2 flex p-10">
          <Image alt="jasa" src={"/jasa3.png"} width={1280} height={1280} />
        </div>
        <div className="w-1/2 flex flex-col px-10 justify-center">
          <h1 className="text-4xl font-bold">Jasa Design Villa</h1>
          <p className="font-bold py-10">
            Filosofi & Konsep: Diilhami oleh filosofi Tri Hita Karana, villa ini
            dirancang untuk menciptakan harmoni antara manusia, alam, dan
            spiritualitas. Mengutamakan ruang terbuka, sirkulasi udara optimal,
            dan pemanfaatan cahaya alami. Elemen Budaya: Penerapan bale bengong
            (gazebo santai) modern, kolam refleksi sebagai elemen air penenang,
            dan penggunaan material lokal seperti batu paras, kayu jati, dan
            atap sirap/alang-alang sintetis. Daya Tarik: Menawarkan privasi dan
            kemewahan resor bintang lima dengan suasana homey dan eksotis. Ideal
            untuk tujuan sewa harian (short-term rental).
          </p>
          <Link href="/form">
            <button className="w-1/4 bg-[#a47d53] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#8c6c48] transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceJasa;
