import React from 'react';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom'; // Import Outlet here

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar (left side) */}
      <aside className="w-84 p-4 md:block hidden bg-white shadow-600">
        <Sidebar />
      </aside>

      {/* Right side: Topbar + Dynamic Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow">
          <Topbar />
        </header>

        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <Outlet /> {/* THIS WILL RENDER the page like MyAccount, MyMember */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
