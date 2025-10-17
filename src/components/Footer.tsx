import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-3 space-x-reverse mb-4">
              <Logo size="sm" />
              <div>
                <h3 className="text-xl font-bold text-gold">סהרה</h3>
                <p className="text-sm text-gray-300">קייטרינג לאירועים</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              קייטרינג כשר למהדרין לאירועים פרטיים ועסקיים.
              <br />
              איכות גבוהה, טעמים מסורתיים ומודרניים.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gold mb-4">
              קישורים מהירים
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-gold transition-colors duration-200"
                >
                  בית
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-gray-300 hover:text-gold transition-colors duration-200"
                >
                  תפריט
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-gold transition-colors duration-200"
                >
                  אודות
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-gold transition-colors duration-200"
                >
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gold mb-4">
              פרטי התקשרות
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <span className="text-gold">טלפון:</span>
                <a
                  href="tel:+972501234567"
                  className="hover:text-gold transition-colors duration-200 mr-2"
                  aria-label="התקשר אלינו"
                >
                  +972-50-123-4567
                </a>
              </p>
              <p>
                <span className="text-gold">WhatsApp:</span>
                <a
                  href="https://wa.me/972501234567"
                  className="hover:text-gold transition-colors duration-200 mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="צור קשר ב-WhatsApp"
                >
                  לחץ כאן
                </a>
              </p>
              <p className="text-gold font-semibold">כשר למהדרין</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} סהרה קייטרינג. כל הזכויות שמורות.
            </p>
            <p className="text-sm text-gray-400">
              נבנה באהבה עם Next.js ו-TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
