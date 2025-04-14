import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const AdsBannerSlider = () => {
  return (
    <div className="relative w-full px-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper !pb-10" // Adds bottom padding for the dots
      >
        <SwiperSlide><div className="bg-gray-200 p-8 text-center"><img src=''/>https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg</div></SwiperSlide>
        <SwiperSlide><div className="bg-gray-200 p-8 text-center"><img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="bg-gray-200 p-8 text-center">img src='https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg'</div></SwiperSlide>
        <SwiperSlide><div className="bg-gray-200 p-8 text-center">Slide 4</div></SwiperSlide>
        <SwiperSlide><div className="bg-gray-200 p-8 text-center">Slide 5</div></SwiperSlide>
      </Swiper>

      {/* Tailwind override for pagination position */}
      <style>
        {`
          .swiper-pagination {
            @apply mt-4 text-center;
          }
        `}
      </style>
    </div>
  );
}

export default AdsBannerSlider;
