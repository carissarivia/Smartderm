import React from 'react';
import MachineLearningIcon from '../assets/machine_learning.png'; // Pastikan jalur ini benar
import ReactJSIcon from '../assets/react_js.png'; // Pastikan jalur ini benar
import Flowchart from '../assets/flowchart.png'; // Pastikan jalur ini benar

const About = () => {
  return (
    <div className="about-container p-8 min-h-screen flex flex-col items-center bg-white">
      <div className="w-full max-w-6xl">
        <br></br>
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">About</h1>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center space-y-12 md:space-y-0 md:space-x-12 w-full max-w-6xl">
        <div className="flex flex-col items-center text-center md:text-left md:w-1/2 space-y-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            Halaman web ini dibangun menggunakan React JS untuk antarmuka pengguna dan Machine Learning berbasis Python untuk analisis kanker kulit. Dengan memanfaatkan teknologi terkini, kami menawarkan solusi inovatif untuk memantau kesehatan kulit Anda.
          </p>
          <div className="flex space-x-8 justify-center">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 flex items-center justify-center rounded-full shadow-md">
                <img src={MachineLearningIcon} alt="Machine Learning Icon" className="w-20 h-20" />
              </div>
              <h2 className="text-xl font-bold text-blue-600 mt-4">Machine Learning</h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 flex items-center justify-center rounded-full shadow-md">
                <img src={ReactJSIcon} alt="React JS Icon" className="w-20 h-20" />
              </div>
              <h2 className="text-xl font-bold text-blue-600 mt-4">React JS</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-1/2 space-y-4">
          <p className="text-gray-500 text-sm text-center">Berikut flowchart yang kami analisa:</p>
          <img src={Flowchart} alt="Flowchart SmartDerm" className="max-w-full h-auto shadow-md rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;
