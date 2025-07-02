'use client';
import React from 'react'
import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <header>
        {/* Parallax Hero Section */}
        <div
          className="flex flex-col justify-left bg-center bg-cover" // removed h-screen and bg-fixed
          style={{
            backgroundImage: "url('/Image/woodsmithbg.jpg')",
          }}
        >
          <div className="flex flex-col md:flex-row items-center min-h-[400px] bg-black/40"> {/* added min-h instead of h-full */}
            {/* Left Side: Text */}
            <div className="flex-1 p-8">
              <h1 className="text-4xl font-bold text-orange-400 mb-8 text-left">Woodsmaith </h1>
              <h2 className="text-3xl font-bold text-gray-100 mb-4">Regional School</h2>
              <p className="text-lg text-orange-200 mb-8 text-left">Shaping Your Children's Future</p>
            </div>
            {/* Right Side: (You can add content here if needed) */}
          </div>
        </div>
      </header>
      {/* New Section */}
      <section>
        {/* Header */}
        <header className="bg-blue-700 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Welcome to Woodsmith
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold">
              Regional School
            </h2>
          </div>
        </header>
        <div className="flex">
          {/* Left Side Footer Navigation */}
          <aside className="hidden md:flex flex-col items-center justify-center w-48 py-8 border-r border-blue-200 bg-white">
            <svg width="24" height="48" fill="none" className="mb-8 text-blue-700">
              <path d="M12 8v28m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex flex-col items-center gap-10">
              {/* Academic Programs */}
              <button className="flex flex-col items-center focus:outline-none hover:text-blue-900 group">
                <svg width="40" height="40" fill="none" className="mb-2 text-blue-700 group-hover:text-blue-900" viewBox="0 0 40 40">
                  <path d="M20 8L6 14l14 6 14-6-14-6zm0 0v6m-8 8v4a8 8 0 0016 0v-4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                <span className="text-blue-700 font-semibold text-center text-sm group-hover:text-blue-900">
                  Academic<br />Programs
                </span>
              </button>
              <hr className="w-12 border-blue-200" />
              {/* Student Services */}
              <button className="flex flex-col items-center focus:outline-none hover:text-blue-900 group">
                <svg width="40" height="40" fill="none" className="mb-2 text-blue-700 group-hover:text-blue-900" viewBox="0 0 40 40">
                  <rect x="10" y="10" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 14h12M14 18h12M14 22h8" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="text-blue-700 font-semibold text-center text-sm group-hover:text-blue-900">
                  Student<br />Services
                </span>
              </button>
              <hr className="w-12 border-blue-200" />
              {/* Apply Now */}
              <button className="flex flex-col items-center focus:outline-none hover:text-blue-900 group">
                <svg width="40" height="40" fill="none" className="mb-2 text-blue-700 group-hover:text-blue-900" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="16" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 16v-4m0 16v-4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="text-blue-700 font-semibold text-center text-sm group-hover:text-blue-900">
                  Apply<br />Now
                </span>
              </button>
            </div>
          </aside>
          {/* Main Content */}
          <div className="flex-1 pl-0 md:pl-12">
            <h1 className='text-4xl font-bold text-gray-800 mb-4'>
              An outstanding secondary school for 7th-12th grade students
            </h1>
            <p className='text-gray-600 mb-4'>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <button className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300'>
              Learn More
            </button>
            {/* Right Side: Video */}
            <div className="flex-1 flex justify-center items-center p-8">
              <video
                src="/video/college.mp4"
                autoPlay
                loop
                muted
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg border p-6 flex flex-col justify-between">
              <img
                src="/image/innovation.jpg"
                alt="Innovation Meetup"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation Meetup</h3>
                <p className="text-gray-600 mb-1">Sun, 01 Apr | 500 Terry A Francois Blvd</p>
                <p className="text-gray-500 mb-4">
                  Join us for a day of innovation and networking with industry leaders and students.
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <a href="#" className="text-blue-600 underline hover:text-blue-800 px-2 py-2 rounded transition duration-300">
                  More Info
                </a>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                  Register Now
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg border p-6 flex flex-col justify-between">
              <img
                src="/image/volunteering.jpg"
                alt="Volunteering Day"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Volunteering Day</h3>
                <p className="text-gray-600 mb-1">Fri, 15 Jun | 500 Terry A Francois Blvd</p>
                <p className="text-gray-500 mb-4">
                  Help make a difference in our community by joining our volunteering activities.
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <a href="#" className="text-blue-600 underline hover:text-blue-800 px-2 py-2 rounded transition duration-300">
                  More Info
                </a>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                  Register Now
                </button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg border p-6 flex flex-col justify-between">
              <img
                src="/image/orientation.jpg"
                alt="Fall Orientation Week"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Fall Orientation Week</h3>
                <p className="text-gray-600 mb-1">Sun, 05 Aug | 500 Terry A Francois Blvd</p>
                <p className="text-gray-500 mb-4">
                  Welcome new students and get ready for an exciting academic year!
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <a href="#" className="text-blue-600 underline hover:text-blue-800 px-2 py-2 rounded transition duration-300">
                  More Info
                </a>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                  Register Now
                </button>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg border p-6 flex flex-col justify-between">
              <img
                src="/image/bookclub.jpg"
                alt="Annual Book Club"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Annual Book Club Is Back</h3>
                <p className="text-gray-600 mb-1">Thu, 20 Sept | 500 Terry A Francois Blvd</p>
                <p className="text-gray-500 mb-4">
                  Dive into new stories and share your favorites with fellow book lovers.
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <a href="#" className="text-blue-600 underline hover:text-blue-800 px-2 py-2 rounded transition duration-300">
                  More Info
                </a>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                  Register Now
                </button>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-lg border p-6 flex flex-col justify-between">
              <img
                src="/image/careerfair.jpg"
                alt="Career Fair"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Mathematics Tutoring Program</h3>
                <p className="text-gray-600 mb-1">Mon, 03 Dec | 500 Terry A Francois Blvd</p>
                <p className="text-gray-500 mb-4">
                  Improve your math skills with help from our experienced tutors.
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <a href="#" className="text-blue-600 underline hover:text-blue-800 px-2 py-2 rounded transition duration-300">
                  More Info
                </a>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest News Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-blue-800">Latest News</h2>
            <a href="#" className="text-blue-600 font-semibold hover:underline">Show More</a>
          </div>
          <div className="border-b mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="bg-yellow-200 p-8 rounded shadow flex flex-col justify-between min-h-[300px]">
              <div>
                <p className="text-gray-600 mb-2">Friday 1 June 2035</p>
                <h3 className="text-lg font-bold text-blue-800 mb-2 border-b border-blue-800 pb-1">
                  New Auditorium at Woodsmith to Launch Next Fall
                </h3>
                <p className="text-gray-700 mb-6">
                  This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.
                </p>
              </div>
              <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Read More</button>
            </div>
            {/* News Card 2 */}
            <div className="bg-yellow-200 p-8 rounded shadow flex flex-col justify-between min-h-[300px]">
              <div>
                <p className="text-gray-600 mb-2">Tuesday 1 May 2035</p>
                <h3 className="text-lg font-bold text-blue-800 mb-2 border-b border-blue-800 pb-1">
                  Woodsmith Community Summit
                </h3>
                <p className="text-gray-700 mb-6">
                  This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.
                </p>
              </div>
              <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Read More</button>
            </div>
            {/* News Card 3 */}
            <div className="bg-yellow-200 p-8 rounded shadow flex flex-col justify-between min-h-[300px]">
              <div>
                <p className="text-gray-600 mb-2">Thursday 1 March 2035</p>
                <h3 className="text-lg font-bold text-blue-800 mb-2 border-b border-blue-800 pb-1">
                  Woodsmith Receives a New Accreditation
                </h3>
                <p className="text-gray-700 mb-6">
                  This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.
                </p>
              </div>
              <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}