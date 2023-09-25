import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { BiHomeAlt } from 'react-icons/bi';

const Nav = () => {
  return (
    <Router>
      <nav className='fixed bottom-2 lg:bottom-8'>
        <div className="container mx-auto">
          <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 text-white/50'>
            <Link to="/home">
              <BiHomeAlt />
            </Link>
            <Link to="/profile">
              <BiHomeAlt />
            </Link>
            <Link to="/dashboard">
              <BiHomeAlt />
            </Link>
            <Link to="/chat">
              <BiHomeAlt />
            </Link>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Nav;
