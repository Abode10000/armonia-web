import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/armonia-logo.png";
import Footer from "../components/Footer";

const Services: React.FC = () => {
  return (
    <div className="bg-[#F7FAFC] min-h-screen text-gray-800 flex flex-col justify-between" dir="rtl">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <Link
          to="/"
          className="text-[#0A6D8B] hover:underline text-lg font-medium transition"
        >
          الرئيسية
        </Link>

        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <img src={logo} alt="Armonia Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-xl font-bold text-[#0A6D8B]">Armonia</h1>
        </Link>
      </header>

      {/* Services Section */}
      <section className="text-center py-20 px-4 flex-1">
        <h2 className="text-4xl font-extrabold text-[#0A6D8B] mb-12">خدماتنا</h2>

        <div className="flex flex-col md:flex-row justify-center gap-10 flex-wrap">
          {/* خدمة 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-10 w-96 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#0A6D8B] mb-3">
              تصحيح الحركة بالذكاء الاصطناعي
            </h3>
            <p className="text-[#4A5568] mb-6 leading-relaxed text-lg">
              تحليل فوري لحركة الجسم وتصحيح الوضعيات عبر الرؤية الحاسوبية.
            </p>
            <Link
              to="#"
              className="bg-gradient-to-r from-[#0A6D8B] to-[#18A4B8] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              استكشف الخدمة
            </Link>
          </div>

          {/* خدمة 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-10 w-96 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#0A6D8B] mb-3">
              الإرشاد الأسري الذكي
            </h3>
            <p className="text-[#4A5568] mb-6 leading-relaxed text-lg">
              استبيانات وخطط ذكية للأهالي للتعامل مع أطفالهم.
            </p>
            <Link
              to="#"
              className="bg-gradient-to-r from-[#0A6D8B] to-[#18A4B8] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              استكشف الخدمة
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
