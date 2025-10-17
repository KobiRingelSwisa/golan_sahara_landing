import React from "react";
import Logo from "@/components/Logo";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 md:py-20 bg-sand">
        <div className="container-max text-center">
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>
          <h1 className="mb-4">אודות סהרה</h1>
          <p className="text-xl md:text-2xl text-ink max-w-3xl mx-auto">
            חוויה קולינרית ייחודית המשלבת מסורת וחדשנות
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-12">
              <div>
                <h2 className="mb-6">הסיפור שלנו</h2>
                <div className="space-y-6 text-body text-ink leading-relaxed">
                  <p>
                    סהרה קייטרינג נוסדה מתוך אהבה עמוקה למטבח המסורתי והמודרני
                    כאחד. אנו מאמינים שכל אירוע הוא הזדמנות ליצור חוויה קולינרית
                    בלתי נשכחת.
                  </p>
                  <p>
                    עם ניסיון רב שנים בתחום הקייטרינג, אנו מתמחים בהכנת מנות
                    איכותיות המשלבת טעמים מסורתיים עם טכניקות בישול מודרניות.
                  </p>
                  <p>
                    כל מנה מוכנה באהבה ובתשומת לב לפרטים הקטנים ביותר, תוך הקפדה
                    על איכות חומרי הגלם והכשרות למהדרין.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-6">הערכים שלנו</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-gold font-bold ml-3 text-xl">•</span>
                    <span className="text-body text-ink">
                      איכות גבוהה בכל מנה ומנה
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold font-bold ml-3 text-xl">•</span>
                    <span className="text-body text-ink">
                      כשרות למהדרין תחת השגחה קפדנית
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold font-bold ml-3 text-xl">•</span>
                    <span className="text-body text-ink">
                      שירות מקצועי ואדיב לכל לקוח
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold font-bold ml-3 text-xl">•</span>
                    <span className="text-body text-ink">
                      חומרי גלם טריים ואיכותיים
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold font-bold ml-3 text-xl">•</span>
                    <span className="text-body text-ink">
                      גמישות בהתאמה לצרכים המיוחדים
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual Content */}
            <div className="space-y-8">
              {/* Portrait Placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-gold/10 to-gold/20 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-12 h-12 text-gold"
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
                    <p className="text-ink/60">תמונה של השף</p>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-1 gap-4">
                <div className="chip">
                  <svg
                    className="w-5 h-5 text-success ml-2"
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
                  כשר למהדרין
                </div>
                <div className="chip">
                  <svg
                    className="w-5 h-5 text-gold ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  התאמה לאלרגיות
                </div>
                <div className="chip">
                  <svg
                    className="w-5 h-5 text-gold ml-2"
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
                  שירות אישי
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-sand">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="mb-4">הצוות שלנו</h2>
            <p className="text-xl text-ink max-w-2xl mx-auto">
              צוות מקצועי ומנוסה המחויב להעניק לכם את החוויה הקולינרית הטובה
              ביותר
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
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
              <h3 className="text-h3 font-medium text-charcoal mb-4">
                השף הראשי
              </h3>
              <p className="text-body text-ink">
                ניסיון של למעלה מ-15 שנים בהכנת קייטרינג לאירועים, מתמחה במטבח
                המסורתי והמודרני
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-h3 font-medium text-charcoal mb-4">
                צוות המטבח
              </h3>
              <p className="text-body text-ink">
                צוות מקצועי ומיומן המתמחה בהכנת מנות איכותיות תוך הקפדה על
                סטנדרטים גבוהים
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-h3 font-medium text-charcoal mb-4">
                שירות לקוחות
              </h3>
              <p className="text-body text-ink">
                צוות שירות לקוחות מנוסה המספק תמיכה מלאה בכל שלבי התכנון והביצוע
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container-max text-center">
          <h2 className="mb-6">מוכנים לחוות את ההבדל?</h2>
          <p className="text-xl text-ink mb-8 max-w-2xl mx-auto">
            צרו איתנו קשר עוד היום ונתחיל לתכנן את האירוע המושלם שלכם
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              שלח הודעה ב-WhatsApp
            </a>
            <a href="tel:+972501234567" className="btn btn-outline">
              התקשר עכשיו
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
