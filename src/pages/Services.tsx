import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/armonia-logo.png";

const Services: React.FC = () => {
  return (
    <div className="bg-[#F7FAFC] min-h-screen text-gray-800 flex flex-col" dir="rtl">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
        <Link
          to="/"
          className="text-[#1E90A0] hover:text-[#085A73] text-lg font-medium transition"
        >
          الرئيسية
        </Link>
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-2xl font-bold text-[#0A6D8B]">Armonia</span>
        </Link>
      </header>

      {/* Hero */}
      <section className="text-center py-14 bg-gradient-to-b from-[#E6F4F7] to-[#F7FAFC]">
        <div className="flex justify-center mb-4 bg-[#F7FAFC] rounded-full p-4">
          <img src={logo} alt="Armonia Logo" className="w-28 h-28 object-contain mix-blend-multiply" />
        </div>
        <h2 className="text-3xl font-extrabold text-[#0A6D8B] mb-2">خدماتنا</h2>
        <p className="max-w-2xl mx-auto text-[#4A5568] text-lg mb-10">
          نقدم خدمتين ذكيتين لمساعدتك على التعافي من المنزل بكل سهولة ودقة.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 py-12 flex-grow">
        {/* خدمة تصحيح الحركة */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-[#E6F4F7] hover:shadow-lg transition hover:scale-105 duration-300">
          <h3 className="text-xl font-bold text-[#0A6D8B] mb-3">تصحيح الحركة بالذكاء الاصطناعي</h3>
          <ul className="text-[#4A5568] text-right mb-5 leading-relaxed list-disc pr-6">
            <li>تشخيص عضلي هيكلي لتحديد موقع الإصابة.</li>
            <li>تحليل فوري وتصحيح الوضعيات أثناء التمرين.</li>
            <li>تمارين: Squat و Push-up.</li>
          </ul>
          <h4 className="font-semibold text-[#0A6D8B] mb-2">المميزات:</h4>
          <ul className="text-[#4A5568] list-disc pr-6 mb-5">
            <li>لوحة الأداء والتقييم الذكي بعد كل تمرين.</li>
            <li>استشارات مباشرة مع أخصائي.</li>
          </ul>
          <button className="w-full bg-gradient-to-r from-[#0A6D8B] to-[#18A4B8] text-white py-2 rounded-md hover:opacity-90 transition font-semibold">
            ابدأ الخدمة
          </button>
        </div>

        {/* خدمة الإرشاد الأسري */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-[#E6F4F7] hover:shadow-lg transition hover:scale-105 duration-300">
          <h3 className="text-xl font-bold text-[#0A6D8B] mb-3">الإرشاد الأسري الذكي</h3>
          <ul className="text-[#4A5568] text-right mb-5 leading-relaxed list-disc pr-6">
            <li>استبيان تفاعلي لتحديد احتياجات الحالة.</li>
            <li>توصيات فورية بعد النتائج مثل تعليمات أو موسيقى مخصصة.</li>
          </ul>
          <h4 className="font-semibold text-[#0A6D8B] mb-2">المميزات:</h4>
          <ul className="text-[#4A5568] list-disc pr-6 mb-5">
            <li>لوحة تقييم ذكية تعرض مدى التقدّم.</li>
            <li>إمكانية طلب استشارة مع أخصائي.</li>
          </ul>
          <button className="w-full bg-gradient-to-r from-[#0A6D8B] to-[#18A4B8] text-white py-2 rounded-md hover:opacity-90 transition font-semibold">
            ابدأ الخدمة
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#E6F4F7] py-4 text-center text-[#4A5568] text-sm">
        الدعم الفني:{" "}
        <a href="mailto:ai.armonia.sa@gmail.com" className="text-[#0A6D8B] font-semibold">
          ai.armonia.sa@gmail.com
        </a>
      </footer>
    </div>
  );
};

export default Services;
