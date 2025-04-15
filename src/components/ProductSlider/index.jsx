import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductItem from '../ProductItem';

const ProductSlider = () => {
  return (
    <div className="w-full px-4 py-6">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        <SwiperSlide>
          <div className="max-w-[220px] w-full mx-auto">
            <ProductItem title="Product 1" image="/images/p1.jpg" />
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
};

export default ProductSlider;
