import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#F8D488] px-8 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        {/* Dropdown */}
        <div className="relative">
          <button
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="px-2 py-2 text-blue-800 font-medium focus:outline-none"
          >
            About
          </button>
          {open && (
            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="absolute left-0 mt-2 w-40 bg-[#F8D488] shadow-lg z-10"
            >
              <a href="#" className="block px-4 py-2 text-blue-800 hover:bg-yellow-200">Our School</a>
              <a href="#" className="block px-4 py-2 text-blue-800 hover:bg-yellow-200">Faculty &amp; Staff</a>
              <a href="#" className="block px-4 py-2 text-blue-800 hover:bg-yellow-200">Alumni</a>
            </div>
          )}
        </div>
        <a href="#" className="text-blue-800 font-medium">Admission</a>
        <a href="#" className="text-blue-800 font-medium">Learning</a>
        <a href="#" className="text-blue-800 font-medium">News &amp; Events</a>
        <a href="#" className="text-blue-800 font-medium">Contact</a>
      </div>
      <div className="flex items-center space-x-2">
        <svg width="20" height="20" fill="none" className="text-blue-800">
          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
          <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 17c1.5-2 4.5-2 6 0" stroke="currentColor" strokeWidth="2"/>
        </svg>
        <a href="#" className="text-blue-800 font-medium">Log In</a>
      </div>
    </nav>
  );
}