import React from 'react';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Main from '../Main';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar (always shown on the left) */}
      <aside className="w-100   p-4 md:block hidden bg-white shadow-600  ">
        <Sidebar />
      </aside>

      {/* Right section: Topbar + Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar on top right */}
        <header className=" bg-white shadow">
          <Topbar />
        </header>

        {/* Main content below Topbar */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 ">
          <Main />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
