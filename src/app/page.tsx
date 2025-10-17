import Link from "next/link";
import Logo from "@/components/Logo";
import TrustBar from "@/components/TrustBar";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-right lg:order-2">
              <div className="flex justify-center lg:justify-end mb-8">
                <Logo size="lg" />
              </div>
              <h1 className="text-[2rem] leading-[2.5rem] md:text-[3rem] md:leading-[3.5rem] font-bold text-charcoal mb-6 max-w-[18ch] mx-auto lg:mx-0">
                סהרה קייטרינג
                <br />
                <span className="text-gold">לאירועים</span>
              </h1>
              <p className="text-xl md:text-2xl text-ink mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                חוויה קולינרית ייחודית עם טעמים מסורתיים ומודרניים
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Link href="/menu" className="btn btn-primary">
                  צפה בתפריט
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  צור קשר
                </Link>
              </div>
            </div>

            {/* Logo Display */}
            <div className="lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-gold/10 to-gold/20 rounded-2xl overflow-hidden flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6">
                    <Logo size="lg" />
                  </div>
                  <p className="text-ink/60 text-xl font-medium">
                    קייטרינג לאירועים
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-sand">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="mb-4">מה הלקוחות שלנו אומרים</h2>
            <p className="text-body text-ink max-w-2xl mx-auto">
              המלצות אמיתיות מלקוחות מרוצים שהפכו את האירוע שלהם לבלתי נשכח
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold ml-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">רחל כהן</h4>
                  <p className="text-small text-ink/60">חתונה</p>
                </div>
              </div>
              <blockquote className="text-body text-ink italic">
                "המנות היו מדהימות! כל האורחים התפעלו מהטעמים והאיכות. השירות
                היה מקצועי וכל פרט טופל בצורה מושלמת."
              </blockquote>
            </div>

            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold ml-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">דוד לוי</h4>
                  <p className="text-small text-ink/60">בר מצווה</p>
                </div>
              </div>
              <blockquote className="text-body text-ink italic">
                "התפריט היה מגוון וכל המנות היו טעימות מאוד. הצוות היה אדיב ועזר
                לנו בכל מה שנדרש. בהחלט נחזור!"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm />
    </div>
  );
}
