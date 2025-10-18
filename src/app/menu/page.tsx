import React from "react";
import Link from "next/link";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-sand/20 via-white to-gold/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-charcoal rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12 sm:mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-charcoal mb-6 sm:mb-8 tracking-tight leading-none">
              תפריט קייטרינג
            </h1>

            <div className="max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-ink font-light leading-relaxed mb-6 sm:mb-8">
                מגוון רחב של מנות מסורתיות ומודרניות
              </p>
              <div className="w-24 sm:w-32 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>

              {/* Kosher Badge */}
              <div className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gold rounded-2xl shadow-2xl">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-success ml-3 sm:ml-4"
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
                <p className="text-lg sm:text-2xl font-bold text-gold">
                  כשר למהדרין
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content - Exactly matching the provided menu */}
      <section className="pt-8 pb-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Menu Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gold text-white rounded-2xl shadow-xl mb-8">
              <svg
                className="w-8 h-8 ml-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-xl font-bold">בס"ד</span>
            </div>
            <p className="text-lg text-ink/60">תפריט קייטרינג - 2 Page</p>
          </div>

          {/* Menu Grid - Two columns like in the image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-16">
              {/* עיקריות Section */}
              <div>
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-3xl sm:text-4xl font-black text-charcoal mb-3 sm:mb-4">
                    עיקריות
                  </h2>
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="w-6 sm:w-8 h-px bg-gold"></div>
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <div className="w-6 sm:w-8 h-px bg-gold"></div>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-charcoal">
                    מחיר
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      כרעיים עוף (4 יחידות)
                    </span>
                    <span className="text-xl font-bold text-gold">₪120</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      מעורב ירושלמי (1 ק"ג)
                    </span>
                    <span className="text-xl font-bold text-gold">₪120</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      שווארמה פרגית (1 ק"ג)
                    </span>
                    <span className="text-xl font-bold text-gold">₪140</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      כבדי עוף ברוטב יין (1 ק"ג)
                    </span>
                    <span className="text-xl font-bold text-gold">₪100</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סטיק פרגית על האש (4 יחידות)
                    </span>
                    <span className="text-xl font-bold text-gold">₪150</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      קציצות בקר ברוטב עגבניות (1 ק"ג)
                    </span>
                    <span className="text-xl font-bold text-gold">₪120</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      פרגית ממולאת באורז ופירות יבשים (4 מנות)
                    </span>
                    <span className="text-xl font-bold text-gold">₪160</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      שניצל עוף ביתי (5 יחידות)
                    </span>
                    <span className="text-xl font-bold text-gold">₪110</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      קבב טלה על האש (10 יחידות)
                    </span>
                    <span className="text-xl font-bold text-gold">₪100</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      בשר ראש בטיבול פיקנטי (1 ק"ג)
                    </span>
                    <span className="text-xl font-bold text-gold">₪200</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      צלי בקר ברוטב פטריות (4 מנות)
                    </span>
                    <span className="text-xl font-bold text-gold">₪150</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      אסדו בלווי ירקות שורש (1 ק"ג)
                    </span>
                    <span className="text-xl font-bold text-gold">₪180</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      בשר בקר בלווי חומוס פיקנטי (1 ק"ג)
                    </span>
                    <span className="text-xl font-bold text-gold">₪150</span>
                  </div>
                </div>
              </div>

              {/* תוספות Section */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-black text-charcoal mb-4">
                    תוספות
                  </h2>
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-8 h-px bg-gold"></div>
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <div className="w-8 h-px bg-gold"></div>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-charcoal">
                    <span>מחיר לק"ג</span>
                    <span>מחיר ל-1 ק"ג</span>
                    <span>מחיר ל-1/2-7 ק"ג</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-ink">
                        אורז לבן בלווי שקדים וצימוקים
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-gold">1 ק"ג: ₪50</span>
                      <span className="font-bold text-gold">
                        1/2-7 ק"ג: ₪30
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-ink">
                        אורז מג'דרה (עדשים ובצל מטוגן)
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-gold">1 ק"ג: ₪60</span>
                      <span className="font-bold text-gold">
                        1/2-7 ק"ג: ₪40
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-ink">
                        ריזוטו סהרה (בצל ופטריות)
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-gold">1 ק"ג: ₪60</span>
                      <span className="font-bold text-gold">
                        1/2-7 ק"ג: ₪40
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-ink">
                        קוסקוס + מרק לקוסקוס
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-gold">1 ק"ג: ₪60</span>
                      <span className="font-bold text-gold">
                        1/2-7 ק"ג: ₪40
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-ink">
                        שעועית ירוקה מוקפצת
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-gold">1 ק"ג: ₪70</span>
                      <span className="font-bold text-gold">
                        1/2-7 ק"ג: ₪45
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-ink">
                        זיתים מרוקאיים
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-gold">1 ק"ג: ₪60</span>
                      <span className="font-bold text-gold">
                        1/2-7 ק"ג: ₪40
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-ink">
                        תפוחי אדמה אפויים בעשבי תיבול
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-gold">1 ק"ג: ₪70</span>
                      <span className="font-bold text-gold">
                        1/2-7 ק"ג: ₪50
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-ink">
                        דואט תפ"א ובטטה אפויים
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-gold">1 ק"ג: ₪70</span>
                      <span className="font-bold text-gold">
                        1/2-7 ק"ג: ₪50
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-ink">
                        ירקות אנטי פסטי
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-gold">1 ק"ג: ₪70</span>
                      <span className="font-bold text-gold">
                        1/2-7 ק"ג: ₪50
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-16">
              {/* סלטים Section */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-black text-charcoal mb-4">
                    סלטים
                  </h2>
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-8 h-px bg-gold"></div>
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <div className="w-8 h-px bg-gold"></div>
                  </div>
                  <p className="text-lg font-bold text-charcoal">מחיר לק"ג</p>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט גזר מרוקאי
                    </span>
                    <span className="text-xl font-bold text-gold">₪40</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט גזר סיני פיקנטי
                    </span>
                    <span className="text-xl font-bold text-gold">₪40</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט מטבוחה
                    </span>
                    <span className="text-xl font-bold text-gold">₪65</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט עגבניות חריף
                    </span>
                    <span className="text-xl font-bold text-gold">₪55</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט סלק
                    </span>
                    <span className="text-xl font-bold text-gold">₪60</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט כרוב לבן
                    </span>
                    <span className="text-xl font-bold text-gold">₪40</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט כרוב אדום
                    </span>
                    <span className="text-xl font-bold text-gold">₪40</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט כרוב אדום במיונז
                    </span>
                    <span className="text-xl font-bold text-gold">₪50</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט פלפלים קלויים
                    </span>
                    <span className="text-xl font-bold text-gold">₪60</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט פלפל חריף קלוי
                    </span>
                    <span className="text-xl font-bold text-gold">₪60</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט חציל בטחינה
                    </span>
                    <span className="text-xl font-bold text-gold">₪60</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט חציל מטוגן
                    </span>
                    <span className="text-xl font-bold text-gold">₪60</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט חציל במיונז
                    </span>
                    <span className="text-xl font-bold text-gold">₪60</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט חמוצים ביתיים
                    </span>
                    <span className="text-xl font-bold text-gold">₪50</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט טחינה
                    </span>
                    <span className="text-xl font-bold text-gold">₪60</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט חומוס ביתי
                    </span>
                    <span className="text-xl font-bold text-gold">₪60</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט טבולה
                    </span>
                    <span className="text-xl font-bold text-gold">₪50</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט כבד קצוץ
                    </span>
                    <span className="text-xl font-bold text-gold">₪60</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      סלט עלים ירוקים
                    </span>
                    <span className="text-xl font-bold text-gold">₪50</span>
                  </div>
                </div>
              </div>

              {/* מנות ראשונות Section */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-black text-charcoal mb-4">
                    מנות ראשונות
                  </h2>
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-8 h-px bg-gold"></div>
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <div className="w-8 h-px bg-gold"></div>
                  </div>
                  <p className="text-lg font-bold text-charcoal">מחיר לק"ג</p>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      רול טלה בלווי רוטב אסייתי (5 יחידות)
                    </span>
                    <span className="text-xl font-bold text-gold">₪100</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      בצק פילו בעטיפת חזה עוף
                    </span>
                    <span className="text-xl font-bold text-gold">₪100</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      מוקפץ בירקות (5 יחידות)
                    </span>
                    <span className="text-xl font-bold text-gold">₪125</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      כנאפה כבש במלווי שקדים קלויים (5 יחידות)
                    </span>
                    <span className="text-xl font-bold text-gold">₪125</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      פסטיה במלוי פרגית וירקות
                    </span>
                    <span className="text-xl font-bold text-gold">₪125</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      מוקפצים (5 יחידות)
                    </span>
                    <span className="text-xl font-bold text-gold">₪125</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-sand/10 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-lg font-medium text-ink">
                      פטריות פורטבלו במילוי בשר בקר
                    </span>
                    <span className="text-xl font-bold text-gold">₪130</span>
                  </div>
                </div>
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
            מוכנים להזמין?
          </h2>

          <p className="text-2xl font-light mb-16 text-gray-300 leading-relaxed max-w-4xl mx-auto">
            צרו איתנו קשר לקבלת הצעת מחיר מותאמת אישית לאירוע שלכם
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
                קבלו הצעת מחיר
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
