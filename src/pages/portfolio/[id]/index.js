import Image from "next/image";
import { freelancers } from "@/data/freelancers";

export default function FreelancerDetail({ params }) {
  const person = freelancers.find((f) => f.id == params.id);

  if (!person) return <p>Data not found</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* TOP PROFILE SECTION */}
      <div className="flex gap-6">
        <div className="border p-6 rounded-md w-80 text-center">
          <div className="w-40 h-40 mx-auto mb-4 border rounded-md overflow-hidden">
            <Image
              src={person.image}
              width={160}
              height={160}
              alt={person.name}
            />
          </div>

          <h1 className="text-2xl font-bold">{person.name}</h1>
          <p className="text-gray-600 mt-1">📍 {person.location}</p>
          <p className="mt-1">💼 {person.experience}</p>
          <p className="mt-1">👍 {person.rating}</p>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {person.skills.slice(0, 5).map((skill, i) => (
              <span key={i} className="px-3 py-1 border rounded-md text-sm">
                {skill}
              </span>
            ))}
          </div>

          <button className="mt-5 bg-amber-700 text-white px-6 py-2 rounded-full">
            Book
          </button>
        </div>

        {/* RIGHT SIDE DETAIL */}
        <div className="flex-1">
          {/* SKILLS */}
          <h2 className="text-3xl font-bold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {person.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 border rounded-md text-sm bg-gray-100"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* PROJECTS */}
          <h2 className="text-3xl font-bold mb-3">Projects</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {person.projects.map((img, i) => (
              <Image
                key={i}
                src={img}
                width={400}
                height={260}
                alt="project"
                className="rounded-md"
              />
            ))}
          </div>

          {/* FEEDBACK */}
          <h2 className="text-3xl font-bold mb-3">Feedback</h2>
          <div className="bg-[#6b4a3c] text-white p-5 rounded-md">
            {person.feedback.map((fb, i) => (
              <div key={i} className="mb-6">
                <p className="font-bold flex items-center gap-2">
                  <span className="w-4 h-4 bg-teal-400 rounded-full"></span>
                  {fb.name}
                </p>
                <p className="text-sm mt-1">{fb.comment}</p>

                <div className="mt-2 bg-white text-yellow-500 px-3 py-1 rounded-full inline-block">
                  {"⭐".repeat(fb.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => history.back()}
        className="mt-10 block mx-auto bg-amber-700 px-10 py-3 rounded-full text-white"
      >
        BACK
      </button>
    </div>
  );
}
