'use client';
import React from 'react'
import Hero from '@/Components/Hero/Hero'
import Footer from '@/Components/footer/footer';
import Navbar from '@/Components/navbar/navbar';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};
