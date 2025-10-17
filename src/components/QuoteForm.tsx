"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guests: string;
  message: string;
}

const QuoteForm: React.FC = () => {
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

  return (
    <section className="py-12 md:py-20 bg-sand">
      <div className="container-max">
        <div className="max-w-2xl mx-auto">
          <div className="card p-8">
            <div className="text-center mb-8">
              <h2 className="mb-4">קבלו הצעת מחיר מותאמת אישית</h2>
              <p className="text-body text-ink">
                מלאו את הפרטים הבאים ונחזור אליכם בהקדם עם הצעת מחיר מפורטת
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="sr-only">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="שם מלא *"
                    className="w-full px-4 py-3 rounded-xl border border-line text-body focus:ring-2 focus:ring-gold/60 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="sr-only">
                    מספר טלפון
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="מספר טלפון *"
                    className="w-full px-4 py-3 rounded-xl border border-line text-body focus:ring-2 focus:ring-gold/60 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  כתובת אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="כתובת אימייל"
                  className="w-full px-4 py-3 rounded-xl border border-line text-body focus:ring-2 focus:ring-gold/60 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Event Type */}
                <div>
                  <label htmlFor="eventType" className="sr-only">
                    סוג אירוע
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-line text-body focus:ring-2 focus:ring-gold/60 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">סוג אירוע *</option>
                    <option value="חתונה">חתונה</option>
                    <option value="בר מצווה/בת מצווה">בר מצווה/בת מצווה</option>
                    <option value="יום הולדת">יום הולדת</option>
                    <option value="אירוע עסקי">אירוע עסקי</option>
                    <option value="אירוע משפחתי">אירוע משפחתי</option>
                    <option value="אירוע אחר">אירוע אחר</option>
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="eventDate" className="sr-only">
                    תאריך האירוע
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-line text-body focus:ring-2 focus:ring-gold/60 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label htmlFor="guests" className="sr-only">
                  מספר אורחים
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  value={formData.guests}
                  onChange={handleInputChange}
                  placeholder="מספר אורחים משוער"
                  className="w-full px-4 py-3 rounded-xl border border-line text-body focus:ring-2 focus:ring-gold/60 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">
                  פרטים נוספים
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="ספרו לנו עוד על האירוע שלכם, העדפות מיוחדות, דרישות דתיות וכו'"
                  className="w-full px-4 py-3 rounded-xl border border-line text-body focus:ring-2 focus:ring-gold/60 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary"
              >
                {isSubmitting ? "שולח..." : "שלח הודעה ב-WhatsApp"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-small text-ink/60">
                נחזור אליכם תוך שעה בימי חול
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
