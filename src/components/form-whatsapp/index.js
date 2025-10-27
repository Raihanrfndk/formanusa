"use client";
import { useState } from "react";

export default function FormData() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [projectType, setProjectType] = useState([]);
  const [otherProject, setOtherProject] = useState("");

  const [designStyle, setDesignStyle] = useState([]);
  const [budget, setBudget] = useState("");

  const phoneNumber = "6281294195658"; // ganti nomor admin

  const handleCheck = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const msg = `Halo saya berminat untuk bertanya lebih lanjut mengenai jasa ini. Berikut adalah informasi saya :

Nama: ${name}
Telepon: ${phone}
Jenis Proyek: ${projectType.join(", ")}
Lainnya: ${otherProject || "-"}
Gaya Desain: ${designStyle.join(", ")}
Anggaran: ${budget || "-"}`;

    const encode = encodeURIComponent(msg);
    const url = `https://wa.me/${phoneNumber}?text=${encode}`;

    window.open(url, "_blank");
  };

  return (
    <div
      className="min-h-screen bg-white text-black flex justify-start pl-30 py-10 bg-no-repeat bg-right bg-contain"
      style={{ backgroundImage: "url('/batik-oval.png')" }}
    >
      <form
        onSubmit={sendToWhatsApp}
        className="w-full max-w-lg space-y-6 px-4"
      >
        <h2 className="text-center text-2xl font-bold">Form Data</h2>

        {/* Nama */}
        <div>
          <label>Nama :</label>
          <input
            className="border w-full p-2 rounded bg-[#A6714E] text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Telepon */}
        <div>
          <label>No. Telepon :</label>
          <input
            className="border w-full p-2 rounded bg-[#A6714E] text-white"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Jenis Proyek */}
        <div>
          <label className="font-semibold">Jenis Proyek :</label>
          {[
            "Desain Rumah Baru",
            "Desain Renovasi Rumah Lama",
            "Desain Rumah Adat Modern",
            "Desain Villa / Homestay",
          ].map((item) => (
            <div key={item}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item, projectType, setProjectType)}
              />{" "}
              {item}
            </div>
          ))}
          <label className="mt-2 block">Lainnya:</label>
          <input
            className="border w-full p-2 rounded bg-[#A6714E] text-white"
            value={otherProject}
            onChange={(e) => setOtherProject(e.target.value)}
          />
        </div>

        {/* Gaya Desain */}
        <div>
          <label className="font-semibold">Gaya Desain :</label>
          {["Jawa", "Sunda", "Minang", "Bali", "Belum Tahu / Campuran"].map(
            (item) => (
              <div key={item}>
                <input
                  type="checkbox"
                  onChange={() =>
                    handleCheck(item, designStyle, setDesignStyle)
                  }
                />{" "}
                {item}
              </div>
            )
          )}
        </div>

        {/* Anggaran */}
        <div>
          <label className="font-semibold">Anggaran :</label>
          {[
            "< Rp.500 juta",
            "Rp.500 juta - Rp.1 Miliar",
            "Rp.1 Miliar - Rp.2 Miliar",
            "> Rp.2 Miliar",
          ].map((item) => (
            <div key={item}>
              <input
                type="radio"
                name="budget"
                onChange={() => setBudget(item)}
              />{" "}
              {item}
            </div>
          ))}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#A6714E] hover:bg-[#5f412d] text-white  font-semibold w-full p-3 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
