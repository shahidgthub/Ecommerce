import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HomeSlider = () => {
  return (
    <div className="container mx-auto py-6">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide className="border">
          <img
            src="/images/ecommerce.jpg" // ✅ from public folder
            alt="Ecommerce Slide"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" // Responsive height
          />
        </SwiperSlide>
        <SwiperSlide className="border">
          <div className="h-full flex items-center justify-center">
            <img
              src="/images/imageecommerce.jpg" // ✅ from public folder
              alt="Ecommerce Slide"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" // Responsive height
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="border">
          <div className="h-full flex items-center justify-center">
            <img
              src="/images/ecommerce2.jpg" // ✅ from public folder
              alt="Ecommerce Slide"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" // Responsive height
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
