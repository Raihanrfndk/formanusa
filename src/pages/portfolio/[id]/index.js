import Image from "next/image";
import { portfolios } from "@/data/portfolio";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PortfolioDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) return null; // prevent undefined error

  const person = portfolios.find((p) => p.id === Number(id));

  if (!person) {
    return <div className="p-6">Portfolio not found</div>;
  }

  return (
    <div className="bg-white text-black">
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
          <h1 className="text-6xl font-bold mb-4">Profile</h1>
        </div>
      </section>

      <div className="p-6 max-w-5xl mx-auto">
        <div className="flex gap-6">
          <div className="w-80 h-fit border p-6 mt-[70px] text-center">
            <div className="w-40 h-40 mx-auto mt-[-70px] mb-4 overflow-hidden">
              <Image
                src={person.image}
                alt={person.name}
                width={160}
                height={160}
                className="object-cover"
              />
            </div>

            <h1 className="text-2xl font-bold">{person.name}</h1>
            <p className="text-gray-600 mt-1">📍 {person.location}</p>
            <p className="mt-1">💼 {person.experience}</p>
            <p className="mt-1">👍 {person.rating}</p>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {person.skills?.slice(0, 5).map((s, i) => (
                <span key={i} className="px-3 py-1 border rounded-md text-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 outline-1 p-5">
            <h2 className="text-3xl font-bold">Skills</h2>
            <div className="bg-[#6b4a3c] h-1 mt-1 mb-3"></div>
            <div className="flex flex-wrap gap-2 mb-6">
              {person.skills.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border rounded-md bg-gray-100"
                >
                  {s}
                </span>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-3">Projects</h2>
            <div className="bg-[#6b4a3c] h-1 mt-1 mb-3"></div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {person.projects?.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`proj-${i}`}
                  width={400}
                  height={260}
                  className="rounded-md object-cover"
                />
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-3">Feedback</h2>
            <div className="bg-[#6b4a3c] h-1 mt-1 mb-3"></div>
            <div className="bg-[#6b4a3c] text-white p-5 rounded-md">
              {person.feedback?.map((fb, i) => (
                <div key={i} className="mb-6">
                  <p className="font-bold">{fb.name}</p>
                  <p className="text-sm mt-1">{fb.comment}</p>
                  <div className="mt-2 inline-block bg-white text-yellow-500 px-3 py-1 rounded-full">
                    {"⭐".repeat(fb.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => router.back()}
            className="bg-amber-700 px-8 py-3 rounded-full text-white"
          >
            BACK
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
