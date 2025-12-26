import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className='bg-rose-400  flex justify-center rounded-r-full rounded-l-full'>
      <ul className='flex   gap-20 p-1 font-bold text-xl'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/scroll'>Scroll</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
