import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/armonia-logo.png";

const Home: React.FC = () => {
  return (
    <div className="bg-[#F7FAFC] min-h-screen text-gray-800" dir="rtl">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
        {/* الرئيسية */}
        <Link
          to="/"
          className="text-[#1E90A0] hover:text-[#085A73] text-lg font-medium transition"
        >
          الرئيسية
        </Link>

        {/* Armonia */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-2xl font-bold text-[#0A6D8B]">Armonia</span>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-[#E6F4F7] to-[#F7FAFC]">
        {/* الشعار */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Armonia Logo" className="w-36 h-36 object-contain mix-blend-multiply" />
        </div>

        <h2 className="text-4xl font-extrabold text-[#0A6D8B] mb-4">
          رحلتك نحو التعافي تبدأ هنا
        </h2>

        <p className="max-w-2xl mx-auto text-[#4A5568] text-lg mb-10 leading-relaxed">
          منصة ذكية لإعادة التأهيل والعلاج الطبيعي من المنزل. نقدم دعمًا مستمرًا وتحفيزًا متواصلًا
          لمساعدتك على استعادة نشاطك وثقتك بنفسك.
        </p>

        {/* أزرار */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/login"
            className="bg-gradient-to-r from-[#0A6D8B] to-[#18A4B8] text-white px-10 py-3 rounded-lg 
                       hover:opacity-90 shadow-lg hover:shadow-xl transition text-lg font-semibold"
          >
            ابدأ الآن
          </Link>

          <Link
            to="/services"
            className="bg-white text-[#0A6D8B] border border-[#0A6D8B] px-10 py-3 rounded-lg 
                       hover:bg-[#E6F4F7] hover:shadow-md transition text-lg font-semibold"
          >
            استكشف الخدمات
          </Link>
        </div>
      </section>

      {/* رسالتنا */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold text-[#0A6D8B] mb-4">رسالتنا</h3>
        <p className="max-w-3xl mx-auto text-[#4A5568] leading-relaxed">
          في Armonia، نؤمن أن كل خطوة نحو التعافي لها قيمتها. لذلك نقدم تجربة رقمية ذكية وآمنة، 
          تمكّن العملاء وأسرهم من متابعة برامج إعادة التأهيل والعلاج الطبيعي من المنزل بسهولة، مع دعم 
          مستمر وتحفيز متواصل.
        </p>
      </section>

      {/* رؤيتنا */}
      <section className="bg-[#E6F4F7] py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold text-[#0A6D8B] mb-4">رؤيتنا</h3>
        <p className="max-w-3xl mx-auto text-[#4A5568] leading-relaxed">
          نسعى لأن نصبح المنصة الرائدة عالميًا في مجال إعادة التأهيل الذكي، حيث يجتمع الذكاء الاصطناعي 
          والإرشاد الأسري لدعم العملاء وأسرهم، وتحويل رحلة التعافي من تحدٍ يومي إلى تجربة محفّزة وملهمة.
        </p>
      </section>

      {/* الدعم */}
      <footer className="py-6 bg-white text-center text-[#4A5568] text-sm border-t">
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

export default Home;
