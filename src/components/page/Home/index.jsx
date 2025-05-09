import React from 'react';
import HomeSlider from '../../HomeSlider';
import Homecartslider from '../../Homecartslider';
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from '../../AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductSlider from '../../ProductSlider';


const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
    <div className="font-semibold bg-orange-50 py-6">
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
     {/* product data */}
     <section className='container mx-auto  py-8'>
        <div className='flex items-center justify-between'>
          <div className='left'>
          <h1 className='text-[20px] font-bold'> Populars Products</h1>
          <p className='text-[20px] font-semibold'>Do not miss the current offer untill the end of March</p>

      </div>
      <div className='right w-[60%]'>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Fashion" />
        <Tab label=" Electronic" />
        <Tab label="Bags" />
        <Tab label="Footwear " />
        <Tab label="Grocerie" />
        <Tab label="Beauty " />
        <Tab label="Wealness" />
        <Tab label="Jewellery" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
        
      </Tabs>
      </div>
      </div>
    </section>
    <ProductSlider/>
    {/* new section border inside data*/}
    <section className='bg-white p-16 pt-10 '>
      <div className='container mx-auto w-[70%] m-auto'>
        <div className='w-full freeshiping p-6 border-2 border-red-500 justify-between flex lg:flexno-wrap flex-wrap lg:items-start items-center'>
          <div className='item-center flex gap-5'>
            <TbTruckDelivery className='text-[32px]'/>
            <span className='text-2xl font-bold'>Free Shipping</span>
          </div>
          <div><p className='text-[16px] font-semibold'>Free Delivery Now On Your First Order and over $200</p></div>
<p className='text-[18px] font-bold'>- Only $200*</p>
        </div> 

      </div>

    </section>
   
    {/* Banner */}
    <section className='container mx-auto  bg-gray-100'>
    <AdsBannerSlider/>
    </section>
    </>
  );
};

export default Home;
