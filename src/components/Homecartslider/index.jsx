import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // include Navigation module
import 'swiper/css';
import 'swiper/css/navigation'; // ✅ include navigation styles
import 'swiper/css/pagination';

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
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='p-3 bg-white rounded-sm shadow'>
            <img
              src='https://m.media-amazon.com/images/I/7134QsQw0dL._AC_UL320_.jpg'
              alt="Product"
              className='w-full h-auto object-contain'
            />
          </div>
        </SwiperSlide>

        {/* Add more slides if needed */}
        <SwiperSlide>
          <div className='p-3 bg-white rounded-sm shadow'>
            <img
              src='https://m.media-amazon.com/images/I/41HHATpAemL._AC_UL320_.jpg'
              alt="Product"
              className='w-full h-auto object-contain'
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='p-3 bg-white rounded-sm shadow'>
            <img
              src='https://m.media-amazon.com/images/I/61DoaHzLngL._AC_UL320_.jpg'
              alt="Product"
              className='w-full h-auto object-contain'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-3 bg-white rounded-sm shadow'>
            <img
              src='https://m.media-amazon.com/images/I/812e+u9IvaL._AC_UL320_.jpg'
              alt="Product"
              className='w-full h-auto object-contain'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-3 bg-white rounded-sm shadow'>
            <img
              src='https://m.media-amazon.com/images/I/812e+u9IvaL._AC_UL320_.jpg'
              alt="Product"
              className='w-full h-auto object-contain'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-3 bg-white rounded-sm shadow'>
            <img
              src='https://m.media-amazon.com/images/I/81q-zIZcWkL._AC_UL320_.jpg'
              alt="Product"
              className='w-full h-auto object-contain'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-3 bg-white rounded-sm shadow'>
            <img
              src='https://m.media-amazon.com/images/I/71zVzFkWbeL._AC_UL320_.jpg'
              alt="Product"
              className='w-full h-auto object-contain'
            />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Homecartslider;
