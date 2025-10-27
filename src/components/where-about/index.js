"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const WhereAbout = () => {
  const containerRef = useRef(null);

  // Variables for drag scroll
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  // Center image first load
  useEffect(() => {
    const el = containerRef.current;
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
  }, []);

  // Mouse Down
  const handleMouseDown = (e) => {
    const el = containerRef.current;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setStartY(e.pageY - el.offsetTop);
    setScrollLeft(el.scrollLeft);
    setScrollTop(el.scrollTop);
    el.style.cursor = "grabbing";
  };

  // Mouse Move
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const el = containerRef.current;
    const x = e.pageX - el.offsetLeft;
    const y = e.pageY - el.offsetTop;
    const walkX = x - startX;
    const walkY = y - startY;
    el.scrollLeft = scrollLeft - walkX;
    el.scrollTop = scrollTop - walkY;
  };

  // Stop drag
  const stopDrag = () => {
    setIsDragging(false);
    if (containerRef.current) containerRef.current.style.cursor = "grab";
  };

  return (
    <div className="flex flex-row gap-10 px-20 py-20">
      <div className="w-1/2 flex flex-col gap-4 justify-center">
        <h1 className="text-7xl font-bold">Whereabout</h1>
        <h2 className="font-semibold opacity-70">
          Jl. Kapten Tendean No.10, Mampang Prpt., Jakarta Selatan
        </h2>
      </div>

      {/* ✅ Draggable Scrollable Map */}
      <div
        ref={containerRef}
        className="overflow-auto rounded-lg border"
        style={{ width: "600px", height: "300px", cursor: "grab" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        <div
          style={{ width: "1500px", height: "1000px", position: "relative" }}
        >
          <Image
            src="/map-full.png"
            alt="map"
            fill
            className="object-contain select-none pointer-events-none"
            draggable="false"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default WhereAbout;
