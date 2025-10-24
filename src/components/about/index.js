import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-16">
      {/* Left side - Stacked images */}
      <div className="relative w-full md:w-1/2 flex justify-center flex-col">
      {/* Back image */}
<div className="relative inline-block ml-0"> {/* ⬅️ geser ke kanan */}
  <div className="w-[271px] h-[282px] rounded-md overflow-hidden shadow-[-30px_-30px_0px_#A6714E]">
    <Image
      src="/home-1.png"
      alt="Rumah 1"
      width={271}
      height={282}
      className="object-cover w-full h-full"
    />
  </div>
</div>

{/* Front image */}
<div className="relative inline-block mt-[-120px] ml-20">
  <div className="w-[271px] h-[282px] rounded-md overflow-hidden shadow-[30px_30px_0px_#D9D9D9]">
    <Image
      src="/home-2.png"
      alt="Rumah 2"
      width={271}
      height={282}
      className="object-cover w-full h-full"
    />
  </div>
</div>

      </div>

      {/* Right side - Text content */}
      <div className="w-full md:w-1/2 space-y-5 text-justify">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          About Forma Nusa
        </h2>
        <p className="text-[12px] text-gray-800 leading-relaxed font-bold">
          <span className="text-[16px]">Forma Nusa</span> adalah platform arsitektur
          yang menghadirkan desain rumah bergaya <b>Modern–Tradisional Nusantara</b>.
          Kami menghubungkan klien dengan arsitek freelance terbaik dari seluruh
          Indonesia, sekaligus mengelola proyek dari konsep hingga selesai.
        </p>
        <p className="text-[12px] text-gray-800 leading-relaxed">
          Dengan pengalaman dan dedikasi tinggi, tim kami berkomitmen menciptakan hunian
          yang tidak hanya indah secara visual, tetapi juga memiliki makna budaya dan
          fungsionalitas yang berkelanjutan. Melalui platform ini, setiap proyek kami
          kelola secara menyeluruh — mulai dari konsep hingga pembangunan — dengan
          mengedepankan efisiensi, kualitas, dan sentuhan lokal yang autentik.
        </p>
        <p className="text-[12px] text-gray-800 leading-relaxed">
          Melalui perpaduan inovasi modern dan nilai budaya lokal, Forma Nusa menghadirkan
          hunian yang indah, fungsional, dan bermakna — menciptakan ruang hidup yang
          merefleksikan identitas Nusantara dengan sentuhan masa kini.
        </p>

        {/* Button */}
        <div>
          <button className="bg-[#8b684a] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#7a5b3f] transition w-60">
            FAQ
          </button>
        </div>
      </div>
    </section>
  );
}
