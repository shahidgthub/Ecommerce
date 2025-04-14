import React from 'react';
import HomeSlider from '../../HomeSlider';
import Homecartslider from '../../Homecartslider';

const Home = () => {
  return (
    <div className="font-semibold bg-orange-50 min-h-screen">
      <div className="container mx-auto">
        {/* Slider + Banners section */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:flex-nowrap flex-wrap">
          
          {/* Main slider */}
          <div className="w-full lg:w-2/3">
            <HomeSlider />
          </div>

          {/* Side banners */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2 pt-6">
            
            {/* Banner 1 */}
            <div className="relative h-[240px] overflow-hidden rounded">
  <img
    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
    alt="Samsung Gear VR Camera"
    className="w-full h-full object-cover"
  />
  <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white space-y-2">
    <h1 className="text-xl font-bold leading-tight">
      Samsung Gear<br />VR Camera
    </h1>
    <p className="text-sm">$129.00</p>
    <button className="px-3 py-1 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition">
      Shop Now
    </button>
  </div>
</div>

{/* Banner 2 */}
<div className="relative h-[240px] overflow-hidden rounded">
  <img
    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
    alt="Marcel Dining Room Chair"
    className="w-full h-full object-cover"
  />
  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white space-y-2 text-right">
    <h1 className="text-xl font-bold leading-tight">
      Marcel Dining<br />Room Chair
    </h1>
    <p className="text-sm">$129.00</p>
    <button className="px-3 py-1 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition">
      Shop Now
    </button>
  </div>
</div>

          </div>
        </div>

        {/* Product slider section */}
        <div className="mt-10">
          <Homecartslider />
        </div>
      </div>
    </div>
  );
};

export default Home;
