"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Cutscene() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500); // tampil 2.5 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Wrapper fullscreen */}
          <div className="relative w-full h-screen flex items-center justify-center">
            {/* Gambar fullscreen */}
            <Image
              src="/cutscenes.png"
              alt="Cutscene Logo"
              fill
              className="object-cover opacity-50"
              priority
            />

            {/* Overlay teks di tengah gambar */}
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold text-center px-4">
              SOLUSI DESAIN RUMAH & INTERIOR BERNUANSA NUSANTARA
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
