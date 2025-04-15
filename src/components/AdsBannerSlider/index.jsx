import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const AdsBannerSlider = () => {
  return (
    <div className="relative w-full pt-12 px-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper pb-10"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative text-center">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg"
              alt="Banner 1"
              className="w-full"
            />
            <div className="absolute right-10 top-1/4 text-left">
              <h1 className="text-2xl font-bold py-2">S22 Samsung<br />Smartphone</h1>
              <span className="text-[18px] font-semibold text-orange-500 block">$250.00</span>
              <p className="text-[18px] font-semibold underline cursor-pointer">Shop Now</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative text-center">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg"
              alt="Banner 2"
              className="w-full"
            />
            <div className="absolute right-10 top-1/4 text-left">
              <h1 className="text-2xl font-bold py-2">Armchair Mad<br/>
              By shopstic</h1>
              <span className="text-[18px] font-semibold text-orange-500 block">$190.00</span>
              <p className="text-[18px] font-semibold underline cursor-pointer">Shop Now</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative text-center">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg"
              alt="Banner 3"
              className="w-full"
            />
            <div className="absolute right-10 top-1/4 text-left">
              <h1 className="text-2xl font-bold py-2">Noise Wireless<br/>
              Headphones</h1>
              <span className="text-[18px] font-semibold text-orange-500 block">
              $129.00</span>
              <p className="text-[18px] font-semibold underline cursor-pointer">Shop Now</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative text-center">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg"
              alt="Banner 1"
              className="w-full"
            />
            <div className="absolute right-10 top-1/4 text-left">
              <h1 className="text-2xl font-bold py-2">S22 Samsung<br />Smartphone</h1>
              <span className="text-[18px] font-semibold text-orange-500 block">$250.00</span>
              <p className="text-[18px] font-semibold underline cursor-pointer">Shop Now</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="relative text-center">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg"
              alt="Banner 3"
              className="w-full"
            />
            <div className="absolute right-10 top-1/4 text-left">
              <h1 className="text-2xl font-bold py-2">Noise Wireless<br/>
              Headphones</h1>
              <span className="text-[18px] font-semibold text-orange-500 block">
              $129.00</span>
              <p className="text-[18px] font-semibold underline cursor-pointer">Shop Now</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
