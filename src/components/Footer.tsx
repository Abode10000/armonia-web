import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 bg-white border-t border-gray-200 text-gray-600 text-sm mt-10">
      📧 الدعم الفني:{" "}
      <a href="mailto:ai.armonia.sa@gmail.com" className="text-[#0A6D8B] hover:underline">
        ai.armonia.sa@gmail.com
      </a>
      <div className="text-xs text-gray-500 mt-1">
        © 2025 Armonia. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
