import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="w-full bg-white px-6 md:px-20 pb-20">
      {/* Section Title */}
      <h1 className='text-5xl font-bold flex justify-center pb-10'>Gallery</h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Left Column (Large Images) */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full h-[400px]">
            <Image
              src="/g1.png"
              alt="Gallery 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-[180px]">
              <Image
                src="/g2.png"
                alt="Gallery 2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-full h-[180px]">
              <Image
                src="/g3.png"
                alt="Gallery 3"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Column (Stacked Images) */}
        <div className="flex flex-col gap-6 md:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-[300px]">
              <Image
                src="/g4.png"
                alt="Gallery 4"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-full h-[300px]">
              <Image
                src="/g5.png"
                alt="Gallery 5"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="relative w-full h-[280px]">
            <Image
              src="/g6.png"
              alt="Gallery 6"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="pt-5 flex justify-center">
        <button className="bg-[#8b684a] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#7a5b3f] transition w-60">
            See More
          </button>
      </div>
    </section>
  );
}
