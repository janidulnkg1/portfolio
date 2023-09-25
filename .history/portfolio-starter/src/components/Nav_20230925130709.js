import React from 'react';

//importing icons

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipBoardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';

const Nav = () => {
  return (
  <nav className='fixed bottom-2 lg:bottom-8'>
    <div className="container mx-auto">
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 text-white/50'>
          <Link>
          <BiHomeAlt />
          </Link>
        </div>

    </div>

  </nav>
  );
};

export default Nav;
