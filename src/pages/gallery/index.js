import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="w-full h-auto text-black"
        style={{ backgroundImage: "url('/bg-batik.png')" }}
      >
        <div className="flex flex-col justify-center items-center bg-[#F2D4AA] mx-20">
          <h1 className="font-bold text-5xl pt-10">Our Gallery</h1>

          {/* Row 1 */}
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center p-20">
              <h1 className="text-xl font-bold">Modern-Bali Tropical Heaven</h1>
              <Image
                alt="gallery1"
                src={"/gallery1.png"}
                width={1280}
                height={1280}
              />
            </div>
            <div className="flex flex-col justify-center p-10 gap-5">
              <h1 className="text-xl font-bold">
                Keagungan Joglo dalam Garis Modern
              </h1>
              <p>
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

          {/* Row 2 */}
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center p-10 gap-5">
              <h1 className="text-xl font-bold">
                Jawa-Kontemporer Joglo Elegance
              </h1>
              Desain dua lantai yang mengadaptasi bentuk atap Joglo yang ikonik
              (biasanya pada area utama atau pendopo) dengan struktur beton dan
              kaca modern. Bagian lantai dua seringkali dilengkapi balkon dengan
              railing kayu minimalis. Elemen tradisional seperti soko guru
              (tiang utama) diterjemahkan dalam bentuk pilar tinggi yang megah.
              Perpaduan material kayu jati yang hangat dengan dinding berwarna
              netral dan bersih menghasilkan tampilan klasik yang gagah namun
              tetap relevan. <p></p>
            </div>
            <div className="flex flex-col justify-center items-center p-20">
              <h1 className="text-xl font-bold">
                Jawa-Kontemporer Joglo Elegance
              </h1>
              <Image
                alt="gallery2"
                src={"/gallery2.png"}
                width={1280}
                height={1280}
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center p-20">
              <h1 className="text-xl font-bold">
                Minangkabau Modern Minimalis
              </h1>
              <Image
                alt="gallery3"
                src={"/gallery3.png"}
                width={1280}
                height={1280}
              />
            </div>
            <div className="flex flex-col justify-center p-10 gap-5">
              <h1 className="text-xl font-bold">
                Rancangan Atap Tanduk yang Berani
              </h1>
              <p>
                Fasad rumah minimalis yang kuat dipertegas dengan adaptasi
                bentuk atap Gadang (rumah adat Minangkabau) yang melengkung
                tajam (gonjong). Adaptasi ini tidak meniru keseluruhan bentuk
                atap, melainkan mengambil siluetnya sebagai aksen arsitektural
                yang unik. Dinding beton dengan finishing yang halus
                dikombinasikan dengan panel kayu gelap dan bingkai jendela
                vertikal, menciptakan kontras yang dramatis dan modern. Desain
                ini cocok untuk klien yang menginginkan pernyataan arsitektur
                yang berani dan berbudaya.
              </p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center p-10 gap-5">
              <h1 className="text-xl font-bold">
                Dinamika Atap Tradisional di Lahan Kota
              </h1>
              <p>
                Desain urban yang mengambil inspirasi dari bentuk atap
                berjenjang atau lengkung dari rumah adat Batak Karo. Bentuk atap
                yang bertingkat dan tinggi ini diterjemahkan dengan material
                modern seperti genteng metal atau kayu sirap. Bagian fasad
                menggunakan perpaduan batu alam dan kisi-kisi kayu (secondary
                skin) untuk mengurangi panas matahari. Tampilan keseluruhannya
                kokoh dan vertikal, memberikan kesan elegan yang menembus batas
                waktu, sempurna untuk lahan perkotaan yang terbatas.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-20">
              <h1 className="text-xl font-bold">
                Batak-Karo Atap Berjenjang Urban
              </h1>
              <Image
                alt="gallery4"
                src={"/gallery4.png"}
                width={1280}
                height={1280}
              />
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center p-20">
              <h1 className="text-xl font-bold">
                Nusantara Minimalis Aksen Ukir
              </h1>
              <Image
                alt="gallery5"
                src={"/gallery5.png"}
                width={1280}
                height={1280}
              />
            </div>
            <div className="flex flex-col justify-center p-10 gap-5">
              <h1 className="text-xl font-bold">
                Kesederhanaan Bentuk dengan Kekayaan Detail
              </h1>
              <p>
                Rumah modern minimalis dengan dominasi warna putih, abu-abu, dan
                garis-garis tegas yang bersih. Unsur Nusantara hadir sebagai
                focal point melalui detail yang kaya, seperti pintu masuk utama
                kayu berukir gaya Jepara/Toraja atau panel-panel kayu berornamen
                di area teras. Konsep ini menyeimbangkan kesederhanaan minimalis
                dengan keragaman seni ukir lokal, memastikan rumah terlihat
                modern, tetapi tetap memiliki jiwa dan cerita dari budaya
                Indonesia.
              </p>
            </div>
          </div>

          {/* Row 6 */}
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center p-10 gap-5">
              <h1 className="text-xl font-bold">
                Perpaduan Abadi Bali dan Kontemporer
              </h1>
              <p>
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
            <div className="flex flex-col justify-center items-center p-20">
              <h1 className="text-xl font-bold">Modern-Bali Tropical Heaven</h1>
              <Image
                alt="gallery6"
                src={"/gallery6.png"}
                width={1280}
                height={1280}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
