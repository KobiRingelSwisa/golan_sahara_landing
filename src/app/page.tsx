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
          <div className="max-w-4xl mx-auto text-center">
            {/* Text Content */}
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <Logo size="lg" />
              </div>
              <h1 className="text-[2rem] leading-[2.5rem] md:text-[3rem] md:leading-[3.5rem] font-bold text-charcoal mb-8 max-w-[18ch] mx-auto">
                סהרה קייטרינג
                <br />
                <span className="text-gold">לאירועים</span>
              </h1>
              <p className="text-xl md:text-2xl text-ink mb-8 leading-relaxed max-w-lg mx-auto">
                חוויה קולינרית ייחודית עם טעמים מסורתיים ומודרניים
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/menu" className="btn btn-primary">
                  צפה בתפריט
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  צור קשר
                </Link>
              </div>

              {/* Direct Contact Info */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-body text-ink">
                <a
                  href="tel:+972501234567"
                  className="flex items-center hover:text-gold transition-colors duration-200"
                  aria-label="התקשר אלינו"
                >
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +972-50-123-4567
                </a>
                <span className="hidden sm:block text-line">|</span>
                <a
                  href="https://wa.me/972501234567?text=שלום, אשמח לקבל פרטים נוספים על שירותי הקייטרינג שלכם."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-gold transition-colors duration-200"
                  aria-label="שלח הודעה ב-WhatsApp"
                >
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp
                </a>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="card p-10">
              <div className="flex items-center mb-6">
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

            <div className="card p-10">
              <div className="flex items-center mb-6">
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
