"use client";

import React, { useState } from "react";
import Logo from "@/components/Logo";
import QuoteForm from "@/components/QuoteForm";

interface FormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guests: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateWhatsAppMessage = (data: FormData) => {
    return `שלום! אני מעוניין לקבל מידע על השירותים שלכם.

פרטי האירוע:
שם: ${data.name}
טלפון: ${data.phone}
אימייל: ${data.email}
סוג אירוע: ${data.eventType}
תאריך האירוע: ${data.eventDate}
מספר אורחים: ${data.guests}

פרטים נוספים:
${data.message}

אשמח לקבל הצעת מחיר מפורטת.

תודה!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "+972501234567";
    const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    const message = generateWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        eventDate: "",
        guests: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

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
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 md:py-20 bg-sand">
        <div className="container-max text-center">
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>
          <h1 className="mb-4">צור קשר</h1>
          <p className="text-xl md:text-2xl text-ink max-w-3xl mx-auto">
            נשמח לעזור לכם לתכנן את האירוע המושלם
          </p>
        </div>
      </section>

      {/* Lead Paragraph */}
      <section className="py-12">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-ink leading-relaxed">
              צרו איתנו קשר עוד היום ונתחיל לתכנן יחד את האירוע המושלם שלכם.
              נעניק לכם שירות מקצועי ואישי, מהשלב הראשון ועד לסיום המוצלח של
              האירוע.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <QuoteForm />

      {/* Service Areas */}
      <section className="py-12 md:py-20 bg-sand">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="mb-4">אזורי שירות</h2>
            <p className="text-xl text-ink max-w-2xl mx-auto">
              אנו מספקים שירותי קייטרינג בכל רחבי הארץ
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, index) => (
              <div key={index} className="chip">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
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
              <h3 className="text-h3 font-medium text-charcoal mb-4">טלפון</h3>
              <a
                href="tel:+972501234567"
                className="text-xl font-semibold text-gold hover:text-gold/80 transition-colors duration-200"
              >
                +972-50-123-4567
              </a>
            </div>

            {/* WhatsApp */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>
              <h3 className="text-h3 font-medium text-charcoal mb-4">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-success hover:text-success/80 transition-colors duration-200"
              >
                שלח הודעה
              </a>
            </div>

            {/* Email */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
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
              <h3 className="text-h3 font-medium text-charcoal mb-4">אימייל</h3>
              <a
                href="mailto:info@sahara-catering.com"
                className="text-xl font-semibold text-gold hover:text-gold/80 transition-colors duration-200"
              >
                info@sahara-catering.com
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-16">
            <div className="card p-8 max-w-2xl mx-auto">
              <h3 className="text-h2 font-semibold text-charcoal mb-6 text-center">
                שעות פעילות
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">
                    ראשון - חמישי
                  </h4>
                  <p className="text-ink">09:00 - 18:00</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">שישי</h4>
                  <p className="text-ink">09:00 - 14:00</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">שבת</h4>
                  <p className="text-ink">סגור</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-line text-center">
                <p className="text-small text-ink/60">
                  זמינים 24/7 לאירועים דחופים
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
