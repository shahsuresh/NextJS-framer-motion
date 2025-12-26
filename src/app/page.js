"use client";
import { easeInOut, easeOut, motion } from "motion/react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className='w-full h-full'>
      <motion.h1
        animate={{ x: 550, scale: 1.25 }}
        transition={{ delay: 1, duration: 1, ease: easeInOut }}
        className='text-3xl'
      >
        Example of Framer Motion
      </motion.h1>

      {/*//# square */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 500, rotate: 360 }}
        transition={{ delay: 1, duration: 1, ease: "backIn" }}
        whileTap={{ scale: 0.8 }}
        className='w-40 h-40 bg-red-500 border-3 border-blue-50 m-10'
      ></motion.div>

      {/*//# circle */}
      <motion.div
        whileHover={{ background: "orange" }}
        animate={{ x: 700, rotate: 360 }}
        transition={{
          delay: 2,
          duration: 3,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className='w-30 h-30 rounded-full bg-pink-400 border-6 border-t-amber-400 border-b-blue-600 border-r-green-700  m-10'
      ></motion.div>
      {/*//! moving Rectangle */}
      <motion.div
        animate={{
          x: [0, 700, 700, 0, 0],
          y: [0, 0, 100, 100, 0],
          rotate: 360,
        }}
        transition={{
          delay: 1,
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className='w-15 h-15 bg-amber-600'
      ></motion.div>

      {/*//* Draggable circle  */}
      <motion.div
        drag
        whileDrag={{ scale: 1.4 }}
        dragConstraints={{ left: 0, right: 1200, bottom: 50 }}
        className='w-6 h-6 rounded-full bg-amber-800 flex justify-center items-center'
      >
        S
      </motion.div>
      <motion.div
        className='flex justify-center items-center'
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image src={"/heart.png"} width={80} height={80} alt='heart'></Image>
      </motion.div>
    </div>
  );
};

export default page;
