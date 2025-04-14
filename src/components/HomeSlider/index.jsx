import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // 👈 Add Autoplay here
import 'swiper/css';
import 'swiper/css/navigation';

const HomeSlider = () => {
  return (
    <div className="max-w-5xl py-6">
      <Swiper
        modules={[Navigation, Autoplay]} // 👈 Include Autoplay
        navigation
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // Keep autoplay even after interactions
        }}
        loop={true} // Optional: makes the slider loop
      >
        <SwiperSlide>
          <div className='relative flex items-center'>
            <img
              src='https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg'
              alt="Ecommerce Slide"
              className='w-full'
            />
            <div className='absolute right-4 top-1/3 transform -translate-y-1/2 text-white  bg-opacity-50 p-4 rounded'>
              <p className='text-sm'>Big Saving Days Sale</p>
              <h1 className='text-2xl font-bold'>Women Solid Round Green T-Shirt</h1>
              <h2 className='text-lg'>Starting At Only $59.00</h2>
              <button className='mt-2 px-4 py-2 bg-orange-500 text-white rounded'>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative'>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg"
              alt="Ecommerce Slide"
              className='w-full'
            />
            <div className='absolute lg:right-4 right-6 lg:top-1/3 top-1/2 transform -translate-y-1/2 text-white  bg-opacity-50 lg:p-4 p-2 rounded'>
              <p className='text-sm'>Big Saving Days Sale</p>
              <h1 className='lg:text-2xl font-bold'>Women Solid Round Green T-Shirt</h1>
              <h2 className='lg:text-lg'>Starting At Only $59.00</h2>
              <button className='mt-2 px-4 py-2 bg-orange-500 text-white rounded'>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
