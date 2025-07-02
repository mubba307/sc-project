'use client';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo and School Name */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <div className="flex items-center mb-2">
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
              <path fill="#fff" d="M12 2L2 7v2h20V7L12 2zm0 2.18L18.09 7H5.91L12 4.18zM4 9v8h2v-6h12v6h2V9H4zm2 8v2h12v-2H6z"/>
            </svg>
            <div className="ml-3">
              <div className="font-bold text-lg">WOODSMITH</div>
              <div className="text-sm">Regional School</div>
            </div>
          </div>
        </div>
        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-2 text-sm mb-6 md:mb-0">
          <a href="#" className="hover:underline">Programs</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Request Info</a>
          <a href="#" className="hover:underline">After Hours</a>
          <a href="#" className="hover:underline">Faculty & Staff</a>
          <a href="#" className="hover:underline">Athletics</a>
          <a href="#" className="hover:underline">Alumni</a>
          <a href="#" className="hover:underline">News & Events</a>
          <a href="#" className="hover:underline">Our School</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Visit</a>
          <a href="#" className="hover:underline">Map</a>
        </div>
        {/* Address and Social */}
        <div className="flex flex-col items-end gap-4">
          <div className="text-sm text-right">
            500 Terry Francine Street<br />
            San Francisco, CA 94158<br />
            Phone: 123-456-7890
          </div>
          <div className="flex gap-4 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300"><FaLinkedinIn /></a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="text-xs text-center mt-8 opacity-80">
        © 2035 by Woodsmith Regional School. Powered and secured by <a href="https://wix.com" className="underline hover:text-gray-300">Wix</a>
      </div>
    </footer>
  );
}