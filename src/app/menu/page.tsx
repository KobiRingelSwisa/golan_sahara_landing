import React from "react";
import menuData from "@/data/menu.json";
import MenuGrid from "@/components/MenuGrid";

interface MenuItem {
  name: string;
  name_en: string;
  price: number;
  price_per_portion?: number;
  price_bulk_discount?: number;
}

interface MenuCategory {
  category: string;
  category_en: string;
  pricing_unit: string;
  pricing_unit_en: string;
  pricing_notes?: string;
  pricing_notes_en?: string;
  items: MenuItem[];
}

export default function MenuPage() {
  const menu = menuData.menu as MenuCategory[];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 md:py-20 bg-sand">
        <div className="container-max text-center">
          <h1 className="mb-4">תפריט קייטרינג</h1>
          <p className="text-xl md:text-2xl text-ink mb-8 max-w-3xl mx-auto">
            מגוון רחב של מנות מסורתיות ומודרניות
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white border border-line rounded-2xl shadow-food">
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
            <p className="text-h3 font-semibold text-charcoal">כשר למהדרין</p>
          </div>
        </div>
      </section>

      {/* Sticky Mini Navigation */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-line py-4">
        <div className="container-max">
          <div className="flex justify-center space-x-8 space-x-reverse overflow-x-auto">
            {menu.map((category, index) => (
              <a
                key={index}
                href={`#${category.category.replace(/\s+/g, "-")}`}
                className="text-small font-medium text-ink hover:text-gold transition-colors duration-200 whitespace-nowrap px-4 py-2 rounded-xl hover:bg-gold/5"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <section className="py-12 md:py-20">
        <div className="container-max">
          <MenuGrid menu={menu} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-sand">
        <div className="container-max text-center">
          <h2 className="mb-6">מוכנים להזמין?</h2>
          <p className="text-xl text-ink mb-8 max-w-2xl mx-auto">
            צרו איתנו קשר לקבלת הצעת מחיר מותאמת אישית לאירוע שלכם
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
