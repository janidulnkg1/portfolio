import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';

const Nav = () => {
  return (
    <Router>
      <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div className="container mx-auto">
          <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2x1 text-white/50'>
            <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' to="/home">
              <BiHomeAlt />
            </Link>
            <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'  to="/about">
              <BiUser />
            </Link>
            <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'  to="/services">
              <BsClipboardData />
            </Link>
            <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'  to="/work">
              <BsBriefcase />
            </Link>
            <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'  to="/contact">
              <BsChatSquare />
            </Link>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Nav;
