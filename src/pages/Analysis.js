import React, { useState } from 'react';
import analysisIllustration from '../assets/image.png';
import UploadIcon from '../assets/upload_icon.png';
import InfoIcon from '../assets/info_icon.png'; // Add your info icon here
import { Oval } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Analysis = () => {
  const [uploadedImage, setUploadedImage] = useState(analysisIllustration);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('');
  const [title, setTitle] = useState('Analisis Kulit');
  const [description, setDescription] = useState('Solusi inovatif untuk deteksi dini kanker kulit dengan menggunakan teknologi kecerdasan buatan. Melalui penggunaan algoritma canggih, kami dapat memproses gambar kulit untuk mengidentifikasi potensi tanda-tanda kanker kulit, seperti melanoma atau karsinoma sel basal.');
  const [imageBorderClass, setImageBorderClass] = useState('');
  const [buttonText, setButtonText] = useState('Upload Gambar');
  const [buttonIcon, setButtonIcon] = useState(UploadIcon);
  const [buttonLink, setButtonLink] = useState('#');

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setImageBorderClass('border-4 border-blue-500 rounded-lg');

      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('https://9455-104-154-21-202.ngrok-free.app/predict', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);

        if (json.success) {
          setTitle(`Hasil Prediksi: ${json.label}`);
          setDescription(` ${json.description}`);
          setResult(<div className="text-2xl font-bold text-green-700">Hasil Prediksi : {json.confidence}% </div>);
          setButtonText('Selengkapnya');
          setButtonIcon(InfoIcon);
          setButtonLink(json.link);
        } else {
          setStatus(<div className="text-red-500 flex items-center"><FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />File gagal diproses!</div>);
          setTitle('Error');
          setDescription('Prediksi tidak dikenali.');
          setResult(<div className="text-2xl font-bold text-red-700">Error: {json.error || 'Prediksi tidak dikenali'}</div>);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        setStatus(<div className="text-red-500 flex items-center"><FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />Error: {error.message}</div>);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleButtonClick = () => {
    if (buttonText === 'Selengkapnya') {
      window.location.href = buttonLink;
    }
  };

  return (
    <div className="p-8 flex flex-col items-center bg-white min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className={`relative flex-shrink-0 ${imageBorderClass}`}>
          <img
            src={uploadedImage}
            alt="Analysis Illustration"
            className="max-w-md mx-auto"
          />
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center">
              <Oval color="#00BFFF" height={50} width={50} />
            </div>
          )}
        </div>
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">{title}</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {description}
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="upload-button"
          />
          <label
            htmlFor="upload-button"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 cursor-pointer flex items-center justify-center"
            style={{ width: 'fit-content' }}
            onClick={handleButtonClick}
          >
            <img src={buttonIcon} alt="Button Icon" className="h-5 w-5 mr-2" />
            {buttonText}
          </label>
        </div>
      </div>
      <div id="status" className="mt-4 text-center">{status}</div>
      <div id="hasil" className="mt-4 text-center">{result}</div>
    </div>
  );
};

export default Analysis;
