import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - מקצועי ומרהיב */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-sand/20 via-white to-gold/10"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-charcoal rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 sm:mb-16">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-charcoal mb-6 sm:mb-8 tracking-tight leading-none">
                סהרה
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gold mb-8 sm:mb-12 tracking-wide">
                קייטרינג גורמה
              </h2>

              <div className="max-w-5xl mx-auto mb-12 sm:mb-16 px-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-ink font-light leading-relaxed mb-8 sm:mb-10">
                  חוויה קולינרית ייחודית לאירועים בלתי נשכחים
                </p>
                <div className="w-32 sm:w-40 h-1 bg-gold mx-auto mb-8 sm:mb-10"></div>
                <p className="text-lg sm:text-xl text-ink/70 font-medium leading-relaxed">
                  כשר למהדרין • איכות גבוהה • שירות מקצועי • ניסיון רב שנים
                </p>

                {/* Additional Features */}
                <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-ink font-medium">
                      שירות 24/7
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gold"
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
                    <span className="text-sm sm:text-base text-ink font-medium">
                      כל הארץ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Link
                href="/contact"
                className="group px-10 sm:px-12 lg:px-16 py-5 sm:py-6 bg-gold text-white text-lg sm:text-xl font-bold rounded-2xl hover:bg-charcoal transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-3xl"
              >
                <span className="flex items-center justify-center gap-3">
                  קבלו הצעת מחיר
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/menu"
                className="px-10 sm:px-12 lg:px-16 py-5 sm:py-6 border-2 border-charcoal text-charcoal text-lg sm:text-xl font-bold rounded-2xl hover:bg-charcoal hover:text-white transition-all duration-300 shadow-xl transform hover:scale-105"
              >
                תפריט גורמה
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-charcoal/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Features Section - מקצועי עם אנימציות */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white relative">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-charcoal mb-4 sm:mb-6 tracking-tight">
              למה סהרה?
            </h2>
            <p className="text-lg sm:text-xl text-ink/70 font-light max-w-3xl mx-auto leading-relaxed px-4">
              אנו מתמחים ביצירת חוויות קולינריות בלתי נשכחות עם תשומת לב לכל פרט
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="group text-center p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-sand/20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold to-amber-600 rounded-2xl mx-auto mb-6 sm:mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
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
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 sm:mb-4">
                כשר למהדרין
              </h3>
              <p className="text-sm sm:text-base text-ink/70 leading-relaxed">
                השגחה קפדנית של רבנות מוכרת על כל המנות
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group text-center p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-sand/20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold to-amber-600 rounded-2xl mx-auto mb-6 sm:mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 sm:mb-4">
                שירות 24/7
              </h3>
              <p className="text-sm sm:text-base text-ink/70 leading-relaxed">
                זמינים עבורכם בכל שעה לייעוץ ותמיכה מלאה
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group text-center p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-sand/20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold to-amber-600 rounded-2xl mx-auto mb-6 sm:mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
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
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 sm:mb-4">
                חומרי גלם משובחים
              </h3>
              <p className="text-sm sm:text-base text-ink/70 leading-relaxed">
                רק חומרי גלם טריים ואיכותיים מהספקים הטובים ביותר
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group text-center p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-sand/20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold to-amber-600 rounded-2xl mx-auto mb-6 sm:mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
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
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 sm:mb-4">
                צוות מקצועי
              </h3>
              <p className="text-sm sm:text-base text-ink/70 leading-relaxed">
                שפים מנוסים וצוות שירות מיומן עם ניסיון עשיר
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - מקצועestimatesצעי עם צללים */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-sand/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-charcoal mb-4 sm:mb-6 tracking-tight">
              המלצות לקוחות
            </h2>
            <p className="text-lg sm:text-xl text-ink/70 font-light px-4">
              מה הלקוחות שלנו אומרים עלינו
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Testimonial 1 */}
            <div className="group relative">
              <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gold rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <p className="text-lg sm:text-xl text-ink leading-relaxed mb-6 sm:mb-8 italic mr-6 sm:mr-8">
                  &ldquo;המנות היו מדהימות! כל האורחים התפעלו מהטעמים והאיכות.
                  השירות היה מקצועי וכל פרט טופל בצורה מושלמת.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold to-amber-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white font-bold text-base sm:text-lg">
                      ר
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-base sm:text-lg">
                      רחל כהן
                    </p>
                    <p className="text-sm sm:text-base text-ink/70">
                      חתונה • 150 אורחים
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative">
              <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gold rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <p className="text-lg sm:text-xl text-ink leading-relaxed mb-6 sm:mb-8 italic mr-6 sm:mr-8">
                  &ldquo;התפריט היה מגוון וכל המנות היו טעימות מאוד. הצוות היה
                  אדיב ועזר לנו בכל מה שנדרש. בהחלט נחזור!&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold to-amber-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white font-bold text-base sm:text-lg">
                      ד
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-base sm:text-lg">
                      דוד לוי
                    </p>
                    <p className="text-sm sm:text-base text-ink/70">
                      בר מצווה • 80 אורחים
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - דרמטי ומקצועי */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-charcoal via-gray-900 to-black text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 tracking-tight">
            מוכנים לחוות את ההבדל?
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl font-light mb-12 sm:hy-16 text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
            צרו קשר עכשיו ונתכנן יחד את החוויה הקולינרית המושלמת לאירוע שלכם
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center px-4">
            <a
              href="tel:+972501234567"
              className="group px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 bg-white text-charcoal text-lg sm:text-xl font-bold rounded-2xl hover:bg-gold hover:text-white transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2 sm:gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
                התקשרו: 050-123-4567
              </span>
            </a>
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 bg-success text-white text-lg sm:text-xl font-bold rounded-2xl hover:bg-success/90 transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2 sm:gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </span>
            </a>
          </div>

          <div className="mt-12">
            <p className="text-lg text-gray-400">
              🕐 זמינים 24/7 • נחזור אליכם תוך שעה בימי חול
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
