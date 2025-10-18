import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - מקצועי */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-sand/20 via-white to-gold/10"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-charcoal rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h1 className="text-7xl md:text-9xl font-black text-charcoal mb-8 tracking-tight leading-none">
              אודות סהרה
            </h1>

            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-2xl md:text-3xl text-ink font-light leading-relaxed mb-8">
                חוויה קולינרית ייחודית המשלבת מסורת וחדשנות
              </p>
              <div className="w-32 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-lg text-ink/70 font-medium">
                כשר למהדרין • ניסיון רב שנים • צוות מקצועי
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-6 tracking-tight">
              הסיפור שלנו
            </h2>
            <p className="text-xl text-ink/70 font-light max-w-3xl mx-auto leading-relaxed">
              אהבה עמוקה למטבח המסורתי והמודרני
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white to-sand/20 p-10 rounded-3xl shadow-xl">
                  <p className="text-xl text-ink leading-relaxed">
                    סהרה קייטרינג נוסדה מתוך אהבה עמוקה למטבח המסורתי והמודרני
                    כאחד. אנו מאמינים שכל אירוע הוא הזדמנות ליצור חוויה קולינרית
                    בלתי נשכחת.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white to-sand/20 p-10 rounded-3xl shadow-xl">
                  <p className="text-xl text-ink leading-relaxed">
                    עם ניסיון רב שנים בתחום הקייטרינג, אנו מתמחים בהכנת מנות
                    איכותיות המשלבת טעמים מסורתיים עם טכניקות בישול מודרניות.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-amber-600/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-12 rounded-3xl shadow-2xl">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-gold to-amber-600 rounded-2xl mx-auto mb-8 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-charcoal mb-4">
                      המשימה שלנו
                    </h3>
                    <p className="text-lg text-ink/70 leading-relaxed">
                      ליצור חוויות קולינריות ייחודיות שמשאירות טעם של עוד, תוך
                      הקפדה על איכות, כשרות ושירות מקצועי ברמה הגבוהה ביותר.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-br from-sand/30 to-white">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-6 tracking-tight">
              הערכים שלנו
            </h2>
            <p className="text-xl text-ink/70 font-light">
              העקרונות שמנחים אותנו בכל יום
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Value 1 */}
            <div className="group text-center p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-amber-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                איכות גבוהה
              </h3>
              <p className="text-ink/70 leading-relaxed">
                בכל מנה ומנה - רק החומרים הטובים ביותר
              </p>
            </div>

            {/* Value 2 */}
            <div className="group text-center p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-amber-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                כשרות למהדרין
              </h3>
              <p className="text-ink/70 leading-relaxed">
                השגחה קפדנית של רבנות מוכרת על כל המנות
              </p>
            </div>

            {/* Value 3 */}
            <div className="group text-center p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-amber-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                שירות מקצועי
              </h3>
              <p className="text-ink/70 leading-relaxed">
                צוות מנוסה המחויב להעניק לכם חוויה מושלמת
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-white">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-6 tracking-tight">
              הצוות שלנו
            </h2>
            <p className="text-xl text-ink/70 font-light">
              מקצועיים מנוסים המחויבים להצלחת האירוע שלכם
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Chef */}
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-white to-sand/20 p-10 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4 text-center">
                  השף הראשי
                </h3>
                <p className="text-ink/70 leading-relaxed text-center">
                  ניסיון של למעלה מ-15 שנים בהכנת קייטרינג לאירועים, מתמחה במטבח
                  המסורתי והמודרני
                </p>
              </div>
            </div>

            {/* Kitchen Team */}
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-white to-sand/20 p-10 rounded-3xl shadow-xl group-hover:shadow-2xl::-translate-y-2 transition-all duration-300">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4 text-center">
                  צוות המטבח
                </h3>
                <p className="text-ink/70 leading-relaxed text-center">
                  צוות מקצועי ומיומן המתמחה בהכנת מנות איכותיות תוך הקפדה על
                  סטנדרטים גבוהים
                </p>
              </div>
            </div>

            {/* Customer Service */}
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
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                  />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-white to-sand/20 p-10 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
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
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4 text-center">
                  שירות לקוחות
                </h3>
                <p className="text-ink/70 leading-relaxed text-center">
                  צוות שירות לקוחות מנוסה המספק תמיכה מלאה בכל שלבי התכנון
                  והביצוע
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-charcoal via-gray-900 to-black text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            מוכנים לחוות את ההבדל?
          </h2>

          <p className="text-2xl font-light mb-16 text-gray-300 leading-relaxed max-w-4xl mx-auto">
            צרו קשר עכשיו ונתכנן יחד את החוויה הקולינרית המושלמת לאירוע שלכם
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              href="/contact"
              className="group px-16 py-6 bg-white text-charcoal text-xl font-bold rounded-2xl hover:bg-gold hover:text-white transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-3">
                <svg
                  className="w-6 h-6"
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
                צור קשר עכשיו
              </span>
            </Link>
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-16 py-6 bg-success text-white text-xl font-bold rounded-2xl hover:bg-success/90 transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
