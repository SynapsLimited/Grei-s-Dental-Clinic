"use client";

import { useState, useEffect, useRef } from "react";
import { z } from "zod";
import { AnimatedSection } from "@/components/animated-section";
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, Loader2, ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";
import { submitReservation } from "@/lib/actions/reserve"; 
import { useLanguage } from "@/components/language-provider";

const reserveSchema = z.object({
  reason: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
});

type ReserveData = z.infer<typeof reserveSchema>;

const SERVICE_CATEGORIES = [
  { label: "General & Urgent Care", options: ["General Checkup", "Consultation (General)", "Pain / Emergency", "Cleaning & Whitening"] },
  { label: "Specific Services", options: ["Composite Bonding", "Professional Whitening", "Prosthetics", "Orthodontics", "Gingivectomy", "Endodontics", "Prophylaxis", "Implantology", "Piercings"] }
];

const TIME_OPTIONS = [
  "Morning (09:00 - 13:00)",
  "Afternoon (15:00 - 17:00)",
  "Evening (17:00 - 19:00)"
];

export default function ReservePage() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ReserveData>({
    reason: "General Checkup",
    preferredDate: "",
    preferredTime: "Morning (09:00 - 13:00)",
    name: "",
    email: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  
  const [openDropdown, setOpenDropdown] = useState<"reason" | "time" | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const update = <K extends keyof ReserveData>(field: K, value: ReserveData[K]) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
    setOpenDropdown(null); 
  };

  const handleNextStep = () => {
    const errs: Record<string, string> = {};
    if (!data.preferredDate) errs.preferredDate = "Please choose a date";
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(2);
  };

  const handleSubmit = async () => {
    const result = reserveSchema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        errs[issue.path[0] as string] = issue.message;
      });
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const response = await submitReservation(data);
      if (!response.success) throw new Error(response.error || "Something went wrong.");
      setStep(3); 
    } catch (error: any) {
      console.error(error);
      setErrors({ form: error.message || "Failed to submit. Please call us directly." });
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = (field: keyof ReserveData) =>
    `w-full p-4 pl-12 rounded-xl border bg-transparent focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all ${
      errors[field] ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
    }`;

  return (
    <div className="container mx-auto px-6 md:px-12 py-20 max-w-3xl min-h-[80vh] flex flex-col justify-center">
      
      {step !== 3 && (
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">{t("reserve.title")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("reserve.subtitle")}
          </p>
        </AnimatedSection>
      )}

      <AnimatedSection>
        <div ref={dropdownRef} className="bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-800 rounded-[2rem] p-8 md:p-12 shadow-xl relative">
          
          {step !== 3 && (
            <div className="flex items-center justify-between mb-12 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 dark:bg-gray-800 -z-10"></div>
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-blue -z-10 transition-all duration-500" 
                style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
              ></div>
              
              {[1, 2, 3].map(i => (
                <div 
                  key={i} 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 shadow-sm ${
                    step >= i ? 'bg-brand-blue text-white scale-110' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                  }`}
                >
                  {step > i && i !== 3 ? <CheckCircle2 className="w-5 h-5" /> : i}
                </div>
              ))}
            </div>
          )}

          {errors.form && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm text-center font-medium">
              {errors.form}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-2xl font-display font-bold text-center md:text-left">{t("reserve.step1Title")}</h2>
              
              <div className="space-y-2 relative">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">{t("reserve.reasonLabel")}</label>
                <div 
                  onClick={() => setOpenDropdown(openDropdown === "reason" ? null : "reason")}
                  className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-transparent flex items-center justify-between cursor-pointer transition-colors"
                >
                  <span className="text-gray-800 dark:text-gray-100">{data.reason}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openDropdown === "reason" ? "rotate-180" : ""}`} />
                </div>
                
                {openDropdown === "reason" && (
                  <div className="absolute z-50 top-full left-0 w-full mt-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-2xl max-h-72 overflow-y-auto animate-in fade-in slide-in-from-top-2">
                    {SERVICE_CATEGORIES.map((category, idx) => (
                      <div key={idx} className="py-2">
                        <div className="px-4 py-2 text-xs font-bold tracking-wider text-brand-blue uppercase bg-brand-blue/5">
                          {category.label}
                        </div>
                        {category.options.map(option => (
                          <div 
                            key={option}
                            onClick={() => update("reason", option)}
                            className={`px-4 py-3 cursor-pointer transition-colors flex items-center gap-2 ${
                              data.reason === option 
                                ? "bg-brand-blue/10 text-brand-blue font-semibold" 
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                            }`}
                          >
                            {data.reason === option && <CheckCircle2 className="w-4 h-4" />}
                            <span className={data.reason === option ? "" : "pl-6"}>{option}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">{t("reserve.dateLabel")}</label>
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-brand-blue transition-colors pointer-events-none z-10" />
                    <input 
                      type="date" 
                      min={new Date().toISOString().split('T')[0]} 
                      value={data.preferredDate}
                      onChange={(e) => update("preferredDate", e.target.value)}
                      className={`${inputCls("preferredDate")} [color-scheme:light_dark] [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer`} 
                    />
                  </div>
                  {errors.preferredDate && <p className="text-xs text-red-500 mt-1">{errors.preferredDate}</p>}
                </div>

                <div className="space-y-2 relative">
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">{t("reserve.timeLabel")}</label>
                  <div 
                    onClick={() => setOpenDropdown(openDropdown === "time" ? null : "time")}
                    className="relative w-full pl-12 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-transparent flex items-center justify-between cursor-pointer transition-colors group"
                  >
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-brand-blue transition-colors" />
                    <span className="text-gray-800 dark:text-gray-100">{data.preferredTime}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openDropdown === "time" ? "rotate-180" : ""}`} />
                  </div>

                  {openDropdown === "time" && (
                    <div className="absolute z-50 top-full left-0 w-full mt-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2">
                      {TIME_OPTIONS.map(time => (
                        <div 
                          key={time}
                          onClick={() => update("preferredTime", time)}
                          className={`px-4 py-3 cursor-pointer transition-colors flex items-center gap-2 ${
                            data.preferredTime === time 
                              ? "bg-brand-blue/10 text-brand-blue font-semibold" 
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                        >
                          {data.preferredTime === time && <CheckCircle2 className="w-4 h-4" />}
                          <span className={data.preferredTime === time ? "" : "pl-6"}>{time}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button 
                onClick={handleNextStep} 
                className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white p-4 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg active:scale-[0.98] mt-4"
              >
                {t("reserve.continue")} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-2xl font-display font-bold text-center md:text-left">{t("reserve.step2Title")}</h2>
              
              <div className="space-y-6">
                <div className="space-y-1">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
                    <input 
                      type="text" 
                      placeholder={t("reserve.namePlaceholder")}
                      value={data.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputCls("name")} 
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-500 ml-2">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
                    <input 
                      type="tel" 
                      placeholder={t("reserve.phonePlaceholder")}
                      value={data.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputCls("phone")} 
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 ml-2">{errors.phone}</p>}
                </div>

                <div className="space-y-1">
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
                    <input 
                      type="email" 
                      placeholder={t("reserve.emailPlaceholder")}
                      value={data.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputCls("email")} 
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 ml-2">{errors.email}</p>}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => setStep(1)} 
                  disabled={submitting}
                  className="w-1/3 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 p-4 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
                >
                  <ArrowLeft className="w-5 h-5" /> {t("reserve.back")}
                </button>
                
                <button 
                  onClick={handleSubmit} 
                  disabled={submitting}
                  className="w-2/3 flex items-center justify-center gap-2 bg-brand-red text-white p-4 rounded-xl font-bold hover:bg-red-600 transition-colors shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> {t("reserve.processing")}</>
                  ) : (
                    t("reserve.confirm")
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6 animate-in zoom-in-95 duration-500 py-8">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-display font-bold">{t("reserve.successTitle")}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mx-auto">
                {t("reserve.successText1")} <span className="font-bold text-brand-text-light dark:text-white">{data.name}</span>{t("reserve.successText2")} <strong>{data.email}</strong>.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
                {t("reserve.successText3")} {data.preferredTime.toLowerCase()} {t("reserve.successText4")} {data.preferredDate}.
              </p>
              <button 
                onClick={() => {
                  setStep(1);
                  setData({ ...data, reason: "General Checkup", preferredDate: "", preferredTime: "Morning (09:00 - 13:00)" });
                }} 
                className="mt-8 inline-block text-brand-blue font-bold hover:underline"
              >
                {t("reserve.reserveAnother")}
              </button>
            </div>
          )}

        </div>
      </AnimatedSection>
    </div>
  );
}