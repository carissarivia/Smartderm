import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import NevusImage from '../assets/nevus.png'; // Adjust paths accordingly
import MelonemaImage from '../assets/melonema.png';
import FacialSkinCareImage from '../assets/basal.png';
import pigmentedImage from '../assets/pigmented.jpg';
const articles = [
  {
    title: 'Nevus',
    description: 'Nevus adalah bercak berwarna yang terdapat di atas permukaan kulit. Bercak berwarna ini berasal dari sel-sel melanosit, yakni pembentuk warna kulit dan rambut.',
    link: 'https://www.google.com/aclk?sa=l&ai=DChcSEwiznvCe7IqHAxUdK4MDHYDwAIAYABAAGgJzZg&co=1&ase=2&gclid=Cj0KCQjw7ZO0BhDYARIsAFttkCiFkliteizAsgv54iW3ynvtwyXC8In6dTi3Lj5CJproIwCpiF0g3LkaAuxtEALw_wcB&sig=AOD64_38Xjls1_wwAwbkdclxq_j47cvZow&q&nis=4&adurl&ved=2ahUKEwi0weme7IqHAxWNT2wGHX1uCTQQ0Qx6BAgREAE',
    image: NevusImage
  },
  {
    title: 'Melonema',
    description: 'Melanoma adalah jenis kanker kulit paling serius dan berbahaya yang berkembang dari melanosit. Melanosit merupakan sel pigmen kulit yang berperan dalam ..',
    link: 'https://www.google.com/aclk?sa=l&ai=DChcSEwiznvCe7IqHAxUdK4MDHYDwAIAYABAAGgJzZg&co=1&ase=2&gclid=Cj0KCQjw7ZO0BhDYARIsAFttkCiFkliteizAsgv54iW3ynvtwyXC8In6dTi3Lj5CJproIwCpiF0g3LkaAuxtEALw_wcB&sig=AOD64_38Xjls1_wwAwbkdclxq_j47cvZow&q&nis=4&adurl&ved=2ahUKEwi0weme7IqHAxWNT2wGHX1uCTQQ0Qx6BAgREAE',
    image: MelonemaImage
  },
  {
    title: 'Basal',
    description: 'Karsinoma sel basal adalah kanker kulit yang menyerang sel basal. Kanker kulit ini umumnya muncul di area yang sering terkena sinar matahari, seperti wa..',
    link: 'https://www.alodokter.com/karsinoma-sel-basal',
    image: FacialSkinCareImage
  },
  {
    title: 'Pigmented Benign Keratosis',
    description: 'Keratosis seboroik adalah benjolan seperti kutil yang tumbuh di permukaan kulit dan bisa bertambah seiring waktu. Kondisi ini lebih sering terjadi pada ...',
    link: 'https://www.alodokter.com/keratosis-seboroik',
    image: pigmentedImage
  }
];

const ArticlesPage = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Artikel mengenai kanker kulit</h1>
      <div className="flex justify-center items-center mb-6">
        <div className="w-1/4 border-b-2 border-gray-300"></div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{ paddingBottom: '1rem' }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto" style={{ maxWidth: '340px' }}>
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-700 mb-4">{article.description}</p>
                <Link to={article.link} className="text-blue-500 hover:underline">Lihat selengkapnya &rarr;</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default ArticlesPage;
