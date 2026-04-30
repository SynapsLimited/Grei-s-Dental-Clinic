"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { blogPosts } from "@/lib/blog-data"; 
import { useLanguage } from "@/components/language-provider";

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 md:px-12 py-20">
      <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">{t("blog.title")}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t("blog.subtitle")}
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => {
          // Pull text from en.json dynamically
          const title = t(`blogData.${post.id}.title`);
          const category = t(`blogData.${post.id}.category`);
          const excerpt = t(`blogData.${post.id}.excerpt`);

          return (
            <AnimatedSection key={post.id} delay={index * 0.1} direction="up">
              <Link href={`/blog/${post.id}`} className="group block h-full flex flex-col">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video bg-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Image 
                    src={post.image} 
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="text-sm text-brand-blue font-medium mb-2">
                  {category} • {post.date}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-blue transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mt-auto">
                  {excerpt}
                </p>
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}