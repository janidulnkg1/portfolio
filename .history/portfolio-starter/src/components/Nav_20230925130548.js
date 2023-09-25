import React from 'react';

//importing icons

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipBoardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';

const Nav = () => {
  return (
  <nav className='fixed bottom-2 lg:bottom-8'>
    <div classNAme="container mx-auto">
        <div clasNam>
          <Link>
          <BiHomeAlt />
          </Link>
        </div>

    </div>

  </nav>
  );
};

export default Nav;
