import React from 'react';
import CarissaImage from '../assets/carissa.png'; // Adjust paths accordingly
import NaufalImage from '../assets/opal.jpg';

const AboutUsPage = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">About Us</h1>
      <div className="flex justify-center items-center mb-6">
        <div className="w-1/4 border-b-2 border-gray-300"></div>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-8">
        <div className="max-w-xs text-center">
          <img src={CarissaImage} alt="Carissa Arivia" className="rounded-full w-40 h-40 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-blue-600">Carissa Arivia</h2>
          <p>2257301027</p>
        </div>
        <div className="max-w-xs text-center">
          <img src={NaufalImage} alt="Naufal Khairy" className="rounded-full w-40 h-40 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-blue-600">Naufal Khairy</h2>
          <p>2257301101</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-8 text-center bg-white bg-opacity-80 p-4 rounded-lg">
        <p className="text-gray-700">
          Halaman web ini dibuat sebagai bagian dari pemenuhan tugas mata kuliah Data Mining dan Framework. Tujuan dari proyek ini adalah untuk menerapkan konsep dan teknik yang telah dipelajari selama perkuliahan, serta untuk mengembangkan keterampilan praktis dalam pengelolaan dan analisis data menggunakan berbagai framework yang relevan.
        </p>
      </div>
    </main>
  );
};

export default AboutUsPage;
