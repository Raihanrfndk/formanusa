import Image from "next/image";

export default function LatestWorksSection() {
  const works = [
    {
      img: "/joglo-modern.png", // put in /public
      desc: `Kami memadukan kemegahan arsitektur Joglo khas Jawa dengan sentuhan kontemporer yang elegan. 
      Desain ini mempertahankan atap tradisional yang ikonik, namun mengintegrasikannya dengan material modern 
      seperti kaca dan baja, menciptakan hunian yang anggun, terbuka, dan tetap kaya akan warisan budaya.`,
    },
    {
      img: "/sunda-modern.png",
      desc: `Mengambil inspirasi dari bentuk atap 'Julang Ngapak' yang melebar dan tinggi khas Sunda, 
      kami menciptakan desain yang mempromosikan sirkulasi udara optimal dan pencahayaan alami. 
      Dengan interpretasi modern, desain ini menggabungkan material alami dengan struktur kontemporer, 
      menghasilkan rumah yang asri, sejuk, dan menyatu dengan lingkungan.`,
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      {/* Section Title */}
      <h1 className='text-5xl font-bold flex justify-center pb-10'>See Our Latest Works</h1>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-6xl mx-auto">
        {works.map((work, index) => (
          <div key={index} className="flex flex-col items-center text-center md:text-left space-y-6">
            <div className="w-full h-[420px] overflow-hidden rounded-md">
              <Image
                src={work.img}
                alt={`Work ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <p className="text-gray-800 text-sm md:text-base leading-relaxed max-w-lg">
              {work.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
