import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#684731] text-white grid grid-cols-4 px-10 py-10">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-3xl font-bold">FormaNusa</h1>
        <h2 className="text-center">
          Kami adalah tim arsitek berpengalaman, berfokus mewujudkan desain
          hunian Kontemporer dan Rumah Adat Modern.
        </h2>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-3xl font-bold">Call</h1>
        <h2 className="text-center underline">+62 853-3083-3812</h2>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-3xl font-bold">Write Us</h1>
        <h2 className="text-center underline">formanusantara@gmail.com</h2>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-3xl font-bold">Visit Us</h1>
        <h2 className="text-center">
          Jl. Kapten Tendean No.10, Mampang Prpt., Kec. Mampang Prpt., Kota
          Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12790
        </h2>
      </div>
    </div>
  );
};

export default Footer;
