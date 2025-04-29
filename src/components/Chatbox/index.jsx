import React from 'react';

const Index = () => {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Chats</h2>
        <ul>
          <li className="p-3 mb-2 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer">John Doe</li>
          <li className="p-3 mb-2 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer">Jane Smith</li>
          <li className="p-3 mb-2 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer">Customer Support</li>
        </ul>
      </div>

      {/* Chatbox */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Chat Header */}
        <div className="p-4 bg-white border-b shadow">
          <h2 className="text-xl font-semibold">Chat with John Doe</h2>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-lg shadow max-w-sm">Hi, how can I help you today?</div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg shadow max-w-sm">I have a question about my order.</div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t flex">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
