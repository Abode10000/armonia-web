import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/armonia-logo.png";

const Login: React.FC = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/services");
  };

  return (
    <div className="bg-[#F7FAFC] min-h-screen flex flex-col justify-center items-center px-4" dir="rtl">
      {/* الشعار */}
      <div className="mb-6 text-center">
        <img src={logo} alt="Armonia Logo" className="w-28 h-28 mx-auto mb-3 object-contain mix-blend-multiply" />
        <h2 className="text-3xl font-bold text-[#0A6D8B]">Armonia</h2>
        <p className="text-[#4A5568] mt-2">رحلتك نحو التعافي تبدأ هنا</p>
      </div>

      {/* أزرار التبديل */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setIsNewUser(true)}
          className={`px-6 py-2 rounded-md font-semibold ${
            isNewUser
              ? "bg-[#0A6D8B] text-white shadow-md"
              : "bg-white text-[#0A6D8B] border border-[#0A6D8B]"
          }`}
        >
          تسجيل جديد
        </button>
        <button
          onClick={() => setIsNewUser(false)}
          className={`px-6 py-2 rounded-md font-semibold ${
            !isNewUser
              ? "bg-[#0A6D8B] text-white shadow-md"
              : "bg-white text-[#0A6D8B] border border-[#0A6D8B]"
          }`}
        >
          تسجيل الدخول
        </button>
      </div>

      {/* النموذج */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md"
      >
        {isNewUser && (
          <>
            <label className="block text-[#0A6D8B] font-medium mb-1">الاسم الكامل</label>
            <input
              type="text"
              placeholder="اكتب اسمك الكامل"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#18A4B8]"
              required
            />

            <label className="block text-[#0A6D8B] font-medium mb-1">العمر</label>
            <input
              type="number"
              placeholder="مثلاً: 25"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#18A4B8]"
              required
            />
          </>
        )}

        <label className="block text-[#0A6D8B] font-medium mb-1">البريد الإلكتروني</label>
        <input
          type="email"
          placeholder="example@email.com"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#18A4B8]"
          required
        />

        <label className="block text-[#0A6D8B] font-medium mb-1">كلمة المرور</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full border border-gray-300 rounded-lg p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#18A4B8]"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0A6D8B] to-[#18A4B8] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
        >
          {isNewUser ? "إنشاء الحساب" : "تسجيل الدخول"}
        </button>
      </form>

      {/* الدعم */}
      <footer className="mt-10 text-sm text-[#4A5568] text-center">
        الدعم الفني:{" "}
        <a
          href="mailto:ai.armonia.sa@gmail.com"
          className="text-[#0A6D8B] font-semibold hover:underline"
        >
          ai.armonia.sa@gmail.com
        </a>
      </footer>
    </div>
  );
};

export default Login;
