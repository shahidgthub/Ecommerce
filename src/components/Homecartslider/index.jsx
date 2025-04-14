import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const items = [
  {
    title: "Smart Tablet",
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
  },
  {
    title: "Crepe T-Shirt",
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/12-cz_categoryimagelist.jpg"
  },
  {
    title: "Leather Watch",
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/13-cz_categoryimagelist.jpg"
  },
  {
    title: "Rolling Diamond",
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/14-cz_categoryimagelist.jpg"
  },
  {
    title: "Wooden Chair",
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/15-cz_categoryimagelist.jpg"
  },
  {
    title: "Snacker Shoes",
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/16-cz_categoryimagelist.jpg"
  },
  {
    title: "Purse",
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/17-cz_categoryimagelist.jpg"
  },
  {
    title: "Xbox Controller",
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/18-cz_categoryimagelist.jpg"
  }
];

const Homecartslider = () => {
  return (
    <div className="relative px-4 container mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation
        grabCursor={true}
        centeredSlides={true} // default for mobile
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
            centeredSlides: false,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white h-[180px] w-full flex flex-col items-center justify-center rounded shadow hover:shadow-md transition">
              <img
                src={item.image}
                alt={item.title}
                className="w-[110px] h-[110px] object-contain mb-2"
              />
              <h1 className="text-center text-sm font-semibold">{item.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Homecartslider;
