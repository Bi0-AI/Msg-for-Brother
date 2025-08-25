"use client";

import { useState } from "react";

export default function Message() {
  const [showMessage, setShowMessage] = useState(false);
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const correctPassword = "habiba123";

  const handleClick = () => {
    if (password === correctPassword) {
      setAuthorized(true);
      setShowMessage(true);
    } else {
      alert("ভাই, পাসওয়ার্ড ভুল হয়েছে।");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100 p-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-900 text-center">
        ভাইয়া, একটি বার্তা তোমার  জন্য
      </h1>

      {!authorized && (
        <div className="flex flex-col items-center gap-4">
          <input
            type="password"
            placeholder="পাসওয়ার্ড দিন"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 px-6 py-3 border-2 border-blue-400 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 text-xl placeholder-gray-500"
          />
          <button
            onClick={handleClick}
            className="px-10 py-4 bg-blue-600 text-white rounded-2xl hover:bg-pink-500 cursor-pointer hover:scale-150 transform transition duration-300 shadow-lg text-lg font-semibold"
          >
            বার্তা দেখুন
          </button>
        </div>
      )}

      {showMessage && (
        <div className="mt-10 p-10 bg-white shadow-2xl rounded-4xl max-w-4xl text-center text-gray-900 text-3xl md:text-3xl leading-relaxed tracking-wide">
          <span className="font-bold text-orange-600"> ভাইয়া, আমি</span>
          <span className="font-bold text-blue-600"> চাইনিজ মেয়ে বিয়ে করতে চাই না</span>,
          <span className="font-bold text-red-700">
            আর গার্লফ্রেন্ডও বানাতে চাই না। শয়তান কাতুকুতু দেয় বানাতে , কিন্তু আমি চাইনা , আমি শুধু চাই
          </span>,
          <span className="font-bold text-green-600"> হালাল পথে চলতে</span>,
          <span className="font-bold text-purple-600"> তাই তুমি যদি আমাকে, </span>
          <span className="font-bold text-purple-600"> কাবিন করিয়ে দাও, আমি প্রতিষ্ঠিত হয়ে বিয়ে করবো ইনশাআল্লাহ, </span>
          <span className="font-bold text-yellow-600"> তাহলে আমার জন্য সবচেয়ে ভালো হয়, ঈমান টিকিয়ে রাখতে |</span>
          <span className="font-bold text-orange-600"> তোমাকে বোঝার জন্য এতটুকুই যথেষ্ট, ইনশাআল্লাহ</span>
          <span className="font-bold text-blue-700"> ( তোমার জন্যও শুভকামনা। )</span>
        </div>
      )}
    </div>
  );
}
