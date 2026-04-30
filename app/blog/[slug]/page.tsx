"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { blogPosts } from "@/lib/blog-data"; 
import { useLanguage } from "@/components/language-provider";

export default function BlogPostPage() {
  const { t } = useLanguage();
  const params = useParams();
  const postSlug = params.slug as string;
  
  const post = blogPosts.find((p) => p.id === postSlug);

  if (!post) {
    notFound();
  }
  
  // Pull text from en.json using the post ID
  const title = t(`blogData.${post.id}.title`);
  const category = t(`blogData.${post.id}.category`);
  const content = t(`blogData.${post.id}.content`);

  return (
    <div className="container mx-auto px-6 md:px-12 py-20 max-w-4xl">
      <AnimatedSection className="mb-12 text-center">
        <Link href="/blog" className="text-brand-blue hover:underline mb-8 inline-block font-medium">
          {t("blog.backToAll")}
        </Link>
        <div className="text-sm text-brand-blue font-medium mb-4">
          {category} • {post.date}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-balance">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center overflow-hidden text-brand-blue font-bold text-xl">
            {post.author.charAt(0)}
          </div>
          <div className="text-left">
            <p className="font-bold">{post.author}</p>
            <p className="text-sm text-gray-500">{post.role}</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="relative aspect-video w-full max-w-2xl mx-auto mb-12 rounded-3xl overflow-hidden bg-gray-100 shadow-md">
          <Image 
            src={post.image} 
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 768px"
          />
        </div>
        
        <div 
          className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-display prose-a:text-brand-blue hover:prose-a:text-brand-blue/80"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </AnimatedSection>

      <AnimatedSection className="mt-20 p-10 bg-brand-blue/5 rounded-3xl text-center border border-brand-blue/10">
        <h3 className="text-3xl font-display font-bold mb-4">{t("blog.ctaTitle")}</h3>
        <p className="mb-8 text-gray-600 dark:text-gray-400 text-lg">
          {t("blog.ctaSubtitle")}
        </p>
        <Link href="/reserve" className="inline-block bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1">
          {t("blog.ctaButton")}
        </Link>
      </AnimatedSection>
    </div>
  );
}