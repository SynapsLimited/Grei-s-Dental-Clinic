"use client";

import Link from "next/link";
import { CheckCircle2, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, features, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link 
      href={href} 
      className="group relative block p-8 rounded-3xl bg-white dark:bg-brand-dark border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden isolate"
    >
      {/* Decorative background element with negative z-index to prevent text obscuring */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-blue/0 group-hover:from-brand-blue/5 group-hover:to-transparent transition-colors duration-500 -z-10"></div>
      
      <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors z-10 text-brand-blue">
         <Icon className="w-7 h-7" />
      </div>
      
      <h4 className="text-xl font-display font-bold mb-3 group-hover:text-brand-blue transition-colors z-10 relative">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 z-10 relative">{description}</p>
      
      <ul className="space-y-2 z-10 relative">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}
