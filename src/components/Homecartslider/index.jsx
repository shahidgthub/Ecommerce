import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // include Navigation module
import 'swiper/css';
import 'swiper/css/navigation'; // ✅ include navigation styles
import 'swiper/css/pagination';
import { IoIosStarOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";



const Homecartslider = () => {
  return (
    <div className="relative px-4 container mx-auto"> {/* Optional padding for spacing */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation // ✅ enable navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
  <div className="bg-white h-[180px] w-[180px] flex flex-col items-center justify-center rounded shadow">
    <img
      src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
      alt="Smart Tablet"
      className="w-[110px] h-[110px] object-contain mb-2"
    />
    <h1 className="text-center text-sm font-semibold">Smart Tablet</h1>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="bg-white h-[180px] w-[180px] flex flex-col items-center justify-center rounded shadow">
    <img
      src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/12-cz_categoryimagelist.jpg"
      alt="Smart Tablet"
      className="w-[110px] h-[110px] object-contain mb-2"
    />
    <h1 className="text-center text-sm font-semibold">

Crepe T-Shirt</h1>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="bg-white h-[180px] w-[180px] flex flex-col items-center justify-center rounded shadow">
    <img
      src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/13-cz_categoryimagelist.jpg"
      alt="Smart Tablet"
      className="w-[110px] h-[110px] object-contain mb-2"
    />
    <h1 className="text-center text-sm font-semibold">

    
leather watch</h1>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="bg-white h-[180px] w-[180px] flex flex-col items-center justify-center rounded shadow">
    <img
      src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/14-cz_categoryimagelist.jpg"
      alt="Smart Tablet"
      className="w-[110px] h-[110px] object-contain mb-2"
    />
    <h1 className="text-center text-sm font-semibold">

    
Rolling Diamond</h1>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="bg-white h-[180px] w-[180px] flex flex-col items-center justify-center rounded shadow">
    <img
      src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/15-cz_categoryimagelist.jpg"
      alt="Smart Tablet"
      className="w-[110px] h-[110px] object-contain mb-2"
    />
    <h1 className="text-center text-sm font-semibold">

    
Wooden Chair</h1>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="bg-white h-[180px] w-[180px] flex flex-col items-center justify-center rounded shadow">
    <img
      src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/16-cz_categoryimagelist.jpg"
      alt="Smart Tablet"
      className="w-[110px] h-[110px] object-contain mb-2"
    />
    <h1 className="text-center text-sm font-semibold">

    
Snacker Shoes</h1>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="bg-white h-[180px] w-[180px] flex flex-col items-center justify-center rounded shadow">
    <img
      src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/17-cz_categoryimagelist.jpg"
      alt="Smart Tablet"
      className="w-[110px] h-[110px] object-contain mb-2"
    />
    <h1 className="text-center text-sm font-semibold">

    
Purse</h1>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="bg-white h-[180px] w-[180px] flex flex-col items-center justify-center rounded shadow">
    <img
      src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/18-cz_categoryimagelist.jpg"
      alt="Smart Tablet"
      className="w-[110px] h-[110px] object-contain mb-2"
    />
    <h1 className="text-center text-sm font-semibold">

    
Xbox Controlle</h1>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="bg-white h-[180px] w-[180px] flex flex-col items-center justify-center rounded shadow">
    <img
      src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/17-cz_categoryimagelist.jpg"
      alt="Smart Tablet"
      className="w-[110px] h-[110px] object-contain mb-2"
    />
    <h1 className="text-center text-sm font-semibold">

    
Purse</h1>
  </div>
</SwiperSlide>



        

      </Swiper>
    </div>
  )
}

export default Homecartslider;
