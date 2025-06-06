import React from 'react';

const ProfilePage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Survey Title */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-bold mb-2">Survey #1</h2>
        <h3 className="text-xl font-semibold">Profile</h3>
        <p className="mt-2 text-gray-700">Name</p>
        <p className="text-gray-500">Email</p>
      </div>

      {/* General Settings */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-bold mb-6">General Settings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">First Name</label>
            <input type="text" placeholder="Enter your first name" className="input-style" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
            <input type="text" placeholder="Enter your last name" className="input-style" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Country</label>
            <input type="text" placeholder="Enter your country" className="input-style" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">City</label>
            <input type="text" placeholder="Enter your city" className="input-style" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input type="text" placeholder="Enter your phone number" className="input-style" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Language</label>
            <input type="text" placeholder="Enter language" className="input-style" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Gender</label>
            <input type="text" placeholder="Enter gender" className="input-style" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Age</label>
            <input type="text" placeholder="Enter your age range" className="input-style" />
          </div>
        </div>

        <button className="btn-primary mt-6">Save</button>
      </div>

      {/* About Me */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-bold mb-6">About Me</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">1. What are your main interests?</label>
          <input type="text" placeholder="List your interests" className="input-style" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">2. Your birthday:</label>
          <input type="date" className="input-style" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">3. What is your profession sector?</label>
          <select className="input-style">
            <option>Select your profession</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">4. What is your trade crypto knowledge?</label>
          <select className="input-style">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Professional</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">5. What is your investment knowledge?</label>
          <select className="input-style">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Professional</option>
          </select>
        </div>

        <button className="btn-primary mt-6">Save</button>
      </div>

      {/* Double Email Verification */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-bold mb-4">Double Email Verification</h2>
        <input type="text" placeholder="Enter Verification Code" className="input-style mb-4" />
        <div>
          <button className="btn-primary">Submit</button>
          <button className="btn-secondary ml-4">Verify</button>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-bold mb-6">Change Password</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="password" placeholder="Enter Password" className="input-style" />
          <input type="password" placeholder="Enter New Password" className="input-style" />
          <input type="password" placeholder="Confirm Password" className="input-style" />
        </div>
        <button className="btn-primary mt-6">Change Password</button>
      </div>
    </div>
  );
};

export default ProfilePage;
