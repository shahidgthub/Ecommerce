import React from 'react';
import HomeSlider from '../../HomeSlider';
import Homecartslider from '../../Homecartslider';
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from '../../AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductSlider from '../../ProductSlider';

// TabPanel Component
const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <div className="py-4">
          {children}
        </div>
      )}
    </div>
  );
};

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
            <div className="w-full lg:w-2/3">
              <HomeSlider />
            </div>

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

      {/* Product Data Section */}
      <section className="container mx-auto py-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="left">
            <h1 className="text-[20px] font-bold">Popular Products</h1>
            <p className="text-[20px] font-semibold">
              Do not miss the current offer until the end of March
            </p>
          </div>

          <div className="right w-full lg:w-[60%]">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              <Tab label="Fashion" />
              <Tab label="Electronic" />
              <Tab label="Bags" />
              <Tab label="Footwear" />
              <Tab label="Groceries" />
              <Tab label="Beauty" />
              <Tab label="Wellness" />
              <Tab label="Jewellery" />
              <Tab label="Item Four" />
              <Tab label="Item Five" />
              <Tab label="Item Six" />
              <Tab label="Item Seven" />
            </Tabs>

            {/* Tab Panels Content */}
            <TabPanel value={value} index={0}>
              <h2 className="text-xl font-bold">Fashion Category</h2>
              <p>This is content for Fashion Tab.</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <h2 className="text-xl font-bold">Electronic Products</h2>
              <p>This is content for Electronic Tab.</p>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <h2 className="text-xl font-bold">Bags Collection</h2>
              <p>This is content for Bags Tab.</p>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <h2 className="text-xl font-bold">Footwear Deals</h2>
              <p>This is content for Footwear Tab.</p>
            </TabPanel>
            {/* Add more TabPanels similarly for remaining tabs */}
          </div>
        </div>
      </section>

      <ProductSlider />

      {/* Free Shipping Section */}
      <section className="bg-white p-16 pt-10">
        <div className="container mx-auto w-[70%] m-auto">
          <div className="w-full freeshipping p-6 border-2 border-red-500 justify-between flex lg:flex-nowrap flex-wrap lg:items-start items-center">
            <div className="flex gap-5 items-center">
              <TbTruckDelivery className="text-[32px]" />
              <span className="text-2xl font-bold">Free Shipping</span>
            </div>
            <div>
              <p className="text-[16px] font-semibold">
                Free Delivery Now On Your First Order and over $200
              </p>
              <p className="text-[18px] font-bold">- Only $200*</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="container mx-auto bg-gray-100">
        <AdsBannerSlider />
      </section>
    </>
  );
};

export default Home;
