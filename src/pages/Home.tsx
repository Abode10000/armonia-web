import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/armonia-logo.png";
import { Lightbulb, Users } from "lucide-react";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="bg-[#F7FAFC] min-h-screen text-gray-800 flex flex-col justify-between" dir="rtl">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
          <Link
            to="/login"
            className="text-gray-800 font-medium hover:text-[#0A6D8B] transition"
          >
            تسجيل الدخول
          </Link>

          <Link
            to="/signup"
            className="bg-[#0A6D8B] text-white px-4 py-1.5 rounded-md hover:opacity-90 transition font-medium"
          >
            إنشاء حساب
          </Link>

          <button className="flex items-center gap-1 text-gray-700 hover:text-[#0A6D8B] transition">
            🌐 English
          </button>
        </div>

        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <img src={logo} alt="Armonia Logo" className="w-10 h-10 object-contain" />
          <div>
            <h1 className="text-xl font-bold text-[#0A6D8B]">Armonia</h1>
            <p className="text-xs text-[#4A5568]">منصة رقمية لخدمات التأهيل</p>
          </div>
        </Link>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-b from-[#E6F4F7] to-[#F7FAFC]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A6D8B] mb-4">
          رحلتك نحو التعافي تبدأ هنا
        </h2>
        <p className="max-w-2xl mx-auto text-[#4A5568] text-lg mb-10 leading-relaxed">
          منصة ذكية لإعادة التأهيل والعلاج الطبيعي من المنزل. نقدم دعمًا مستمرًا وتحفيزًا متواصلًا
          لمساعدتك على استعادة نشاطك وثقتك بنفسك.
        </p>

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
        <div className="flex justify-center mb-3">
          <Users className="text-[#0A6D8B]" size={40} />
        </div>
        <h3 className="text-3xl font-semibold text-[#0A6D8B] mb-4">رسالتنا</h3>
        <p className="max-w-3xl mx-auto text-[#4A5568] leading-relaxed">
          في Armonia، نؤمن أن كل خطوة نحو التعافي لها قيمتها. لذلك نقدم تجربة رقمية ذكية وآمنة،
          تمكّن العملاء وأسرهم من متابعة برامج إعادة التأهيل والعلاج الطبيعي من المنزل بسهولة،
          مع دعم مستمر وتحفيز متواصل.
        </p>
      </section>

      {/* رؤيتنا */}
      <section className="bg-[#E6F4F7] py-16 px-6 text-center">
        <div className="flex justify-center mb-3">
          <Lightbulb className="text-[#0A6D8B]" size={40} />
        </div>
        <h3 className="text-3xl font-semibold text-[#0A6D8B] mb-4">رؤيتنا</h3>
        <p className="max-w-3xl mx-auto text-[#4A5568] leading-relaxed">
          نسعى لأن نصبح المنصة الرائدة عالميًا في مجال إعادة التأهيل الذكي، حيث يجتمع الذكاء
          الاصطناعي والإرشاد الأسري لدعم العملاء وأسرهم، وتحويل رحلة التعافي من تحدٍ يومي إلى تجربة
          محفّزة وملهمة.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
