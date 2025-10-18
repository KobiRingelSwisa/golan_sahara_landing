import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

export default function ContactPage() {
  const serviceAreas = [
    "תל אביב והמרכז",
    "ירושלים והסביבה",
    "חיפה והצפון",
    "באר שבע והדרום",
    "השרון",
    "השפלה",
    "גוש דן",
    "מרכז הארץ",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-sand/20 via-white to-gold/10"></div>
        <div className="absolute inset-0 opacity-ционная">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-charcoal rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h1 className="text-7xl md:text-9xl font-black text-charcoal mb-8 tracking-tight leading-none">
              צור קשר
            </h1>

            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-2xl md:text-3xl text-ink font-light leading-relaxed mb-8">
                נשמח לעזור לכם לתכנן את האירוע המושלם
              </p>
              <div className="w-32 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-lg text-ink/70 font-medium">
                שירות מקצועי • תמיכה מלאה • זמינים 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-white to-sand/20 p-12 rounded-3xl shadow-xl max-w-4xl mx-auto">
              <p className="text-2xl text-ink leading-relaxed">
                צרו איתנו קשר עוד היום ונתחיל לתכנן יחד את האירוע המושלם שלכם.
                נעניק לכם שירות מקצועי ואישי, מהשלב הראשון ועד לסיום המוצלח של
                האירוע.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-gradient-to-br from-sand/30 to-white">
        <div className="max-w-4xl mx-auto px-8">
          <QuoteForm />
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-32 bg-white">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-6 tracking-tight">
              אזורי שירות
            </h2>
            <p className="text-xl text-ink/70 font-light">
              אנו מספקים שירותי קייטרינג בכל רחבי הארץ
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-sand/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-amber-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 bg-gradient-to-br from-sand/30 to-white">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-6 tracking-tight">
              פרטי יצירת קשר
            </h2>
            <p className="text-xl text-ink/70 font-light">
              צרו איתנו קשר בכל דרך הנוחה לכם
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Phone */}
            <div className="group relative">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
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
              <div className="bg-white p-10 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-amber-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
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
                <h3 className="text-2xl font-bold text-charcoal mb-4">טלפון</h3>
                <a
                  href="tel:+972501234567"
                  className="text-2xl font-bold text-gold hover:text-gold/80 transition-colors duration-200 block mb-4"
                >
                  +972-50-123-4567
                </a>
                <p className="text-ink/70">זמינים 24/7</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="group relative">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-success to-green-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/972501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-success hover:text-success/80 transition-colors duration-200 block mb-4"
                >
                  שלח הודעה
                </a>
                <p className="text-ink/70">תגובה מהירה</p>
              </div>
            </div>

            {/* Email */}
            <div className="group relative">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
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
              <div className="bg-white p-10 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-amber-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
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
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  אימייל
                </h3>
                <a
                  href="mailto:info@sahara-catering.com"
                  className="text-lg font-bold text-gold hover:text-gold/80 transition-colors duration-200 block mb-4"
                >
                  info@sahara-catering.com
                </a>
                <p className="text-ink/70">תגובה תוך 24 שעות</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-3xl shadow-2xl">
              <h3 className="text-4xl font-black text-charcoal mb-12 text-center">
                שעות פעילות
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="bg-gradient-to-br from-white to-sand/20 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-charcoal mb-4">
                    ראשון - חמישי
                  </h4>
                  <p className="text-xl text-ink font-semibold">
                    09:00 - 18:00
                  </p>
                </div>
                <div className="bg-gradient-to-br from-white to-sand/20 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-charcoal mb-4">
                    שישי
                  </h4>
                  <p className="text-xl text-ink font-semibold">
                    09:00 - 14:00
                  </p>
                </div>
                <div className="bg-gradient-to-br from-white to-sand/20 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-charcoal mb-4">שבת</h4>
                  <p className="text-xl text-ink font-semibold">סגור</p>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t-2 border-gold/20 text-center">
                <p className="text-xl text-gold font-bold">
                  🕐 זמינים 24/7 לאירועים דחופים
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
