import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';
import 

const Nav = () => {
  return (
    <Router>
      <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div className="container mx-auto">
          <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2x1 text-white/50'>
            <Link to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
              <BiHomeAlt />
            </Link>
            <Link to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BiUser />
            </Link>
            <Link to='services' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BsClipboardData />
            </Link>
            <Link to='work' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BsBriefcase />
            </Link>
            <Link to='contact' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BsChatSquare />
            </Link>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Nav;
