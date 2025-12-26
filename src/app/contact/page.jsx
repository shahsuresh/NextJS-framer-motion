"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const page = () => {
  const cardRef = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = cardRef.current;
      if (!element) return;
      // set
      gsap.set(element, { x: 100, opacity: 0 });

      //to
      gsap.to(element, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={cardRef} className='flex flex-col gap-5 items-center  '>
      <h1 className='text-2xl font-bold '>GSAP ANIMATION</h1>
      <div className='flex flex-col items-center w-100 h-80 bg-amber-50'>
        <h2 className='text-2xl font-bold text-gray-950 font-mono text-center'>
          Suresh Shah
        </h2>
        <Image alt='image' width={230} height={230} src={"/heart.png"}></Image>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md w-[90%]'>
          Click Me
        </button>
      </div>
    </div>
  );
};

export default page;
