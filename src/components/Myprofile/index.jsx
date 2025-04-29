import React, { useState } from 'react';
import MyInformation from '../Myinformation'; // ✅ Match this name
import Survey from '../Survey';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      {/* Tabs */}
      <div className="mb-6">
        <button
          className={`px-4 py-2 mr-4 rounded ${activeTab === 'info' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('info')}
        >
          My Information
        </button>

        <button
          className={`px-4 py-2 rounded ${activeTab === 'survey' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('survey')}
        >
          Survey #1
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'info' ? <MyInformation /> : <Survey />}
      </div>
    </div>
  );
};

export default ProfileTabs;
