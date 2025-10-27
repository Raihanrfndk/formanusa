import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
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
          <p className="text-lg max-w-2xl mb-6">
            We help you develop your dream Traditional – Modern Indonesian House
          </p>
          <Link href="/ourservice">
            <button className="bg-[#a47d53] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#8c6c48] transition">
              Services
            </button>
          </Link>
        </div>
      </section>

      {/* Bottom Info Section */}
      <div className="relative z-10 bg-[#b58d68]/95 text-white py-6 px-10 grid grid-rows-1 gap-6">
        {/* ROW 1: Three Columns */}
        <div className="grid grid-cols-3 items-start gap-6">
          {/* Binus */}
          <div className="flex flex-col items-center text-left">
            <Image
              src="/logo-binus.png"
              alt="Binus University"
              width={70}
              height={70}
              className="mb-2 object-fit w-20 h-20 rounded-lg"
            />
            <p className="text-xs font-bold">
              Bina Nusantara University | School of Information System |
              Business Analytics | Jakarta Barat, Kemanggisan
            </p>
          </div>

          {/* UN Action Campaign */}
          <div className="flex flex-col items-center text-left">
            <Image
              src="/logo-ac.png"
              alt="UN SDG"
              width={70}
              height={70}
              className="mb-2 object-fit w-20 h-20 rounded-lg"
            />
            <p className="text-xs font-bold">
              SDG 11: Sustainable Cities and Communities | SDG 8: Decent Work
              and Economic Growth | SDG 9: Industry, Innovation and
              Infrastructure
            </p>
          </div>

          {/* Tongkol Group */}
          <div className="flex flex-col items-center text-left">
            <Image
              src="/logo-tongkol.png"
              alt="Tongkol Group"
              width={70}
              height={70}
              className="mb-2 object-fit w-20 h-20 rounded-lg"
            />
            <p className="text-xs font-bold">
              Sponsored by Tongkol Group | Best Student Award | Cumlaude Award
            </p>
          </div>
        </div>
      </div>
      {/* Bottom banner image */}
      <div
        className="w-full h-auto py-2 px-3 bg-cover bg-center flex flex-col justify-center items-end"
        style={{ backgroundImage: "url('/bottom-banner.png')" }}
      >
        <div className="flex justify-center">
          <div className="bg-[#8b684a] text-white px-6 py-4 rounded-md flex items-center gap-3 shadow-md">
            <Phone size={20} />
            <span className="font-semibold text-sm">+62 812 9419 5658</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
