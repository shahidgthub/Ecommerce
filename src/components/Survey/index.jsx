import React from 'react';

const Survey = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Survey #1</h2>
      <p className="mb-6">1st January 2025 - Thank you for taking part 😍</p>
      <p className="mb-6">Please complete this document to help us improve future sessions.</p>

      <div className="space-y-6">
        {/* Example question */}
        <div>
          <p className="font-semibold mb-2">1. How did you first hear about Marvellex?</p>
          <ul className="space-y-1">
            <li>Instagram</li>
            <li>Telegram</li>
            <li>Twitter</li>
            <li>YouTube</li>
            <li>Friend/Family Referral</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">2. What initially attracted you to Marvellex?</p>
          <ul className="space-y-1">
            <li>Learning about blockchain</li>
            <li>Earning rewards</li>
            <li>Community aspect</li>
            <li>Potential investment opportunities</li>
            <li>Other</li>
          </ul>
        </div>

        {/* Continue this pattern for remaining questions... */}

        <div>
          <p className="font-semibold mb-2">15. What are 3 positive aspects you see in Marvellex so far?</p>
          <p>Type your answer here</p>
        </div>

        <div>
          <p className="font-semibold mb-2">16. What are 3 areas of improvement you suggest for Marvellex?</p>
          <p>Type your answer here</p>
        </div>

        <div>
          <p className="font-semibold mb-2">19. What is your preferred method of communication with the Marvellex community?</p>
          <ul className="space-y-1">
            <li>Telegram</li>
            <li>Discord</li>
            <li>Instagram</li>
            <li>Other</li>
          </ul>
        </div>

        <button className="mt-6 px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
      </div>
    </div>
  );
};

export default Survey;
