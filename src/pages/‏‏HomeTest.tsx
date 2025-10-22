import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/armonia-logo.png";

const HomeTest: React.FC = () => {
  return (
    <div className="bg-[#F7FAFC] min-h-screen text-gray-800 font-sans" dir="rtl">
      {/* ✅ رأس الصفحة */}
      <header className="flex justify-between items-center px-4 py-3 bg-white shadow-sm sticky top-0">
        <Link to="/" className="text-[#1E90A0] hover:text-[#085A73] text-base font-medium">
          الرئيسية
        </Link>
        <Link to="/" className="flex items-center gap-2 hover:opacity-80">
          <span className="text-xl sm:text-2xl font-bold text-[#0A6D8B]">Armonia</span>
        </Link>
      </header>

      {/* ✅ القسم الرئيسي */}
      <section className="text-center py-12 px-4 bg-gradient-to-b from-[#E6F4F7] to-[#F7FAFC]">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Armonia Logo" className="w-24 h-24 sm:w-32 sm:h-32 object-contain" />
        </div>

        {/* 🔤 العنوان الرئيسي */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A6D8B] mb-3 leading-tight">
          رحلتك نحو التعافي تبدأ هنا
        </h2>

        {/* 📄 الوصف */}
        <p className="text-[#4A5568] text-sm sm:text-lg mb-6 leading-relaxed max-w-md mx-auto">
          منصة ذكية لإعادة التأهيل والعلاج الطبيعي من المنزل. نقدم دعمًا مستمرًا وتحفيزًا متواصلًا لمساعدتك على استعادة نشاطك وثقتك بنفسك.
        </p>

        {/* 🔘 الأزرار */}
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/login"
            className="bg-gradient-to-r from-[#0A6D8B] to-[#18A4B8] text-white px-8 py-3 rounded-lg hover:opacity-90 shadow-md transition text-base sm:text-lg font-semibold"
          >
            ابدأ الآن
          </Link>

          <Link
            to="/services"
            className="bg-white text-[#0A6D8B] border border-[#0A6D8B] px-8 py-3 rounded-lg hover:bg-[#E6F4F7] shadow-sm transition text-base sm:text-lg font-semibold"
          >
            استكشف الخدمات
          </Link>
        </div>
      </section>

      {/* ✅ الرسالة والرؤية */}
      <section className="py-10 px-5 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#0A6D8B] mb-3">رسالتنا</h3>
        <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
          في Armonia، نؤمن أن كل خطوة نحو التعافي لها قيمتها. لذلك نقدم تجربة رقمية ذكية وآمنة،
          تمكّن العملاء وأسرهم من متابعة برامج إعادة التأهيل والعلاج الطبيعي من المنزل بسهولة، مع دعم
          مستمر وتحفيز متواصل.
        </p>
      </section>

      <section className="bg-[#E6F4F7] py-10 px-5 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#0A6D8B] mb-3">رؤيتنا</h3>
        <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
          نسعى لأن نصبح المنصة الرائدة عالميًا في مجال إعادة التأهيل الذكي، حيث يجتمع الذكاء
          الاصطناعي والإرشاد الأسري لدعم العملاء وأسرهم، وتحويل رحلة التعافي من تحدٍ يومي إلى تجربة
          محفّزة وملهمة.
        </p>
      </section>
    </div>
  );
};

export default HomeTest;
