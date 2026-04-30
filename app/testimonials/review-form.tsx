"use client";
import { addReview } from "@/lib/actions/addReview";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";

const SERVICES = [
  "Composite Bonding", "Professional Whitening", "Prosthetics", 
  "Orthodontics", "Gingivectomy", "Endodontics", 
  "Prophylaxis", "Implantology", "Piercings"
];

export default function ReviewForm() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result = await addReview(formData);
    setLoading(false);
    if (result.success) {
      setSubmitted(true);
      (document.getElementById('review-form') as HTMLFormElement).reset();
    }
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center p-10 bg-brand-blue/10 rounded-[2.5rem] border border-brand-blue/20">
        <h2 className="text-2xl font-bold text-brand-blue mb-2">{t("reviewForm.submittedTitle")}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t("reviewForm.submittedText")}</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-bold text-brand-red underline"
        >
          {t("reviewForm.submitAnother")}
        </button>
      </div>
    );
  }

  return (
    <section className="max-w-xl mx-auto bg-brand-dark p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold mb-2">{t("reviewForm.shareTitle")}</h2>
        <p className="text-gray-400 text-sm">{t("reviewForm.shareText")}</p>
      </div>

      <form action={handleSubmit} id="review-form" className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <input 
            name="name" 
            placeholder={t("reviewForm.namePlaceholder")} 
            required 
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all" 
          />
          
          <select 
            name="service" 
            required 
            defaultValue="" 
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all appearance-none"
          >
            <option value="" disabled>{t("reviewForm.selectService")}</option>
            {SERVICES.map(s => (
              <option key={s} value={s} className="bg-brand-dark text-white">{s}</option>
            ))}
          </select>
        </div>

        <textarea 
          name="text" 
          placeholder={t("reviewForm.textPlaceholder")} 
          rows={4} 
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all" 
        />
        
        <button 
          disabled={loading} 
          className="w-full bg-brand-red py-5 rounded-2xl font-bold text-lg hover:bg-brand-red/90 transition-all active:scale-[0.98] disabled:opacity-50"
        >
          {loading ? t("reviewForm.posting") : t("reviewForm.postReview")}
        </button>
      </form>
    </section>
  );
}