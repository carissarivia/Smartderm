import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import BackgroundImage from '../assets/background.jpg'; // Pastikan jalur ini benar

const Home = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" id="home" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Selamat Datang di SmartDerm!</h1>
        <p className="mb-8 text-center max-w-2xl">
          Selamat datang di SmartDerm, platform canggih yang dirancang untuk membantu Anda mendeteksi dan 
          menganalisis berbagai jenis kanker kulit secara akurat dan cepat. Dengan memanfaatkan teknologi 
          Artificial Intelligence (AI) terkini, kami menawarkan solusi inovatif untuk memantau kesehatan 
          kulit Anda.
        </p>
        <ScrollLink to="analysis" smooth={true} duration={500} offset={-50} className="bg-blue-500 px-6 py-3 rounded-full cursor-pointer text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Coba Sekarang
        </ScrollLink>
      </div>
    </div>
  );
};

export default Home;
