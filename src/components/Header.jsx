import React from 'react';
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className='header-parent'>
          {/* Header chap qismi */}
          <div className='header-left'>
            <img src='/Group 20.svg' alt='logo' />
            <nav>
              <a href='#'>Home</a>
              <a href='#'>Menu</a>
              <a href='#'>Services</a>
              <a href='#'>Offers</a>
            </nav>
          </div>

          {/* Header ong qismi  */}
          <div className='header-right'>
            <img src='/Vector.svg' alt='search' />
            <button>
              <img src='/Call.svg' alt='call' />
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
