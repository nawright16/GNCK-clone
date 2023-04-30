import React, { useState, useRef, useEffect, Component } from "react";
import { BsFillCaretDownFill } from 'react-icons/bs';
import { BsFillCaretUpSquareFill } from 'react-icons/bs'
// import Dashboard from "../Dashboard/Dashboard"
import Modal from "../Modal/Modal";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const ref = useRef();
    useEffect(() => {
      const handler = (event) => {
        if (
          navbarOpen &&
          ref.current &&
          !ref.current.contains(event.target)
        ) {
          setNavbarOpen(false);
        }
      };
      document.addEventListener('mousedown', handler);
      return () => {
        document.removeEventListener('mousedown', handler);
      };
    }, [navbarOpen]);


return (
    <nav ref={ref} className="navbar">
        <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
            {navbarOpen ? (<BsFillCaretUpSquareFill style={{ width: '32px', height: '32px' }} />) : (<BsFillCaretDownFill style={{ width: '32px', height: '32px' }} />)}
        </button>
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : <Modal />}`}>
        </ul>

    </nav>
);

};

export default Navbar;