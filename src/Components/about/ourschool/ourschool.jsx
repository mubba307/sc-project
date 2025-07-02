'use client';
import React from 'react';

export default function MissionVision() {
  return (
    <section>
        <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center bg-[#F8D488] px-12 py-6">
        <svg width="32" height="32" className="mr-4 text-blue-700" fill="none">
          <path d="M4 16h24M20 8l8 8-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h1 className="text-4xl font-bold text-blue-700">Our School</h1>
      </div>

      {/* Yellow Paragraph */}
      <div className="bg-[#F8D488] px-12 py-8">
        <p className="text-lg text-blue-900">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or double click me to add your own content and
          make changes to the font.
        </p>
      </div>

      {/* Image and Blue Box Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/image/schoolsteps.jpg"
            alt="Students sitting on steps"
            className="w-full h-full object-cover"
            style={{ minHeight: 350, maxHeight: 500 }}
          />
        </div>
        {/* Blue Box */}
        <div className="md:w-1/2 w-full bg-blue-700 flex items-center justify-center p-10">
          <div>
            <p className="text-white text-lg mb-8">
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <a href="#" className="text-white underline text-sm hover:text-blue-200">Request Info</a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center bg-[#F8D488] px-12 py-6">
        <svg width="32" height="32" className="mr-4 text-blue-700" fill="none">
          <path d="M4 16h24M20 8l8 8-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h1 className="text-4xl font-bold text-blue-700">Mission &amp; Vision</h1>
      </div>

      {/* Yellow Paragraph */}
      <div className="bg-[#F8D488] px-12 py-8">
        <p className="text-lg text-blue-900">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or double click me to add your own content and
          make changes to the font.
        </p>
      </div>

      {/* Image and Blue Box Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/image/missionvision.jpg"
            alt="Mission and Vision"
            className="w-full h-full object-cover"
            style={{ minHeight: 350, maxHeight: 500 }}
          />
        </div>
        {/* Blue Box */}
        <div className="md:w-1/2 w-full bg-blue-700 flex items-center justify-center p-10">
          <div>
            <p className="text-white text-lg mb-8">
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <a href="#" className="text-white underline text-sm hover:text-blue-200">Plan Your Visit</a>
          </div>
        </div>
      </div>
    </div>
    
    </section>
  );
}