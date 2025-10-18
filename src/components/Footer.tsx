import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-charcoal via-gray-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {/* Company Info */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-4 mb-8">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <Logo size="lg" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-gold mb-2">סהרה</h3>
                <p className="text-lg text-gray-300 font-medium">
                  קייטרינג לאירועים
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
              קייטרינג כשר למהדרין לאירועים פרטיים ועסקיים.
              <br />
              איכות גבוהה, טעמים מסורתיים ומודרניים.
            </p>

            {/* Kosher Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gold/20 border border-gold/30 rounded-2xl mt-6">
              <svg
                className="w-6 h-6 text-success ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg font-bold text-gold">כשר למהדרין</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gold mb-8">
              קישורים מהירים
            </h4>
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-lg text-gray-300 hover:text-gold transition-colors duration-300 hover:translate-x-2 transform"
              >
                בית
              </Link>
              <Link
                href="/menu"
                className="block text-lg text-gray-300 hover:text-gold transition-colors duration-300 hover:translate-x-2 transform"
              >
                תפריט
              </Link>
              <Link
                href="/about"
                className="block text-lg text-gray-300 hover:text-gold transition-colors duration-300 hover:translate-x-2 transform"
              >
                אודות
              </Link>
              <Link
                href="/contact"
                className="block text-lg text-gray-300 hover:text-gold transition-colors duration-300 hover:translate-x-2 transform"
              >
                צור קשר
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h4 className="text-2xl font-bold text-gold mb-8">פרטי התקשרות</h4>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base sm:text-lg font-bold text-gold">
                    טלפון
                  </p>
                  <a
                    href="tel:+972501234567"
                    className="text-sm sm:text-lg text-gray-300 hover:text-gold transition-colors duration-300 block"
                    aria-label="התקשר אלינו"
                  >
                    +972-50-123-4567
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-success to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base sm:text-lg font-bold text-gold">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/972501234567"
                    className="text-sm sm:text-lg text-gray-300 hover:text-gold transition-colors duration-300 block"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="צור קשר ב-WhatsApp"
                  >
                    שלח הודעה
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base sm:text-lg font-bold text-gold">
                    אימייל
                  </p>
                  <a
                    href="mailto:info@sahara-catering.com"
                    className="text-sm sm:text-lg text-gray-300 hover:text-gold transition-colors duration-300 block"
                  >
                    info@sahara-catering.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-gold/20 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-right">
              <p className="text-lg text-gray-400">
                © {new Date().getFullYear()} סהרה קייטרינג. כל הזכויות שמורות.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-400">
                🕐 זמינים 24/7 • כשר למהדרין • שירות מקצועי
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
