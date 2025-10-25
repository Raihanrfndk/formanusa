import { Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

const ServiceContact = () => {
  return (
    <div className="flex flex-col py-20 justify-center items-center">
      <h1 className="text-4xl font-bold">Nusa Design Architect</h1>
      <p className="font-bold py-10">
        Nusa Design : Jasa Desain Rumah Berbasis Budaya Nusantara | Kontak:
        150130 / 0822 1000 9900 | Solusi Arsitektur Rumah Tradisional Modern
      </p>
      <div className="grid grid-cols-3 gap-20">
        <div className="flex flex-col items-center">
          <Image
            className="hover:bg-black/50 p-2 transition-all rounded-lg"
            alt="ig"
            src={"/instagram.png"}
            width={60}
            height={60}
          />
          <p className="font-bold">Instagram</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="hover:bg-black/50 p-2 transition-all rounded-lg"
            alt="wa"
            src={"/whatsapp.png"}
            width={60}
            height={60}
          />
          <p className="font-bold">WhatsApp</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="hover:bg-black/50 p-2 transition-all rounded-lg"
            alt="email"
            src={"/email.png"}
            width={60}
            height={60}
          />
          <p className="font-bold">Email</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceContact;
