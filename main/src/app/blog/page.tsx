"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import BlogHero from "./components/BlogHero";
import CategoriesSection from "./components/CategoriesSection";
import BlogCards from "./components/BlogCards";
import { blogPosts } from "./data/blogposts";

// Define categories in each language.
const categoriesByLanguage = {
  en: [
    "All",
    "Oral Health",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Dental Implants",
    "Pediatric Dentistry",
    "Periodontics",
    "Endodontics",
  ],
  it: [
    "Tutti",
    "Salute Orale",
    "Odontoiatria estetica",
    "Ortodonzia",
    "Impianti dentali",
    "Odontoiatria pediatrica",
    "Parodontologia",
    "Endodonzia",
  ],
  al: [
    "Të gjitha",
    "Shëndeti Oral",
    "Dentari Kozmetike",
    "Ortodonsia",
    "Implantet Dentare",
    "Dentaria Pediatrike",
    "Parodontologji",
    "Endodonti",
  ],
};

const BlogPage = () => {
  const { i18n, t } = useTranslation();
  // Get the current language (cast it as one of the keys)
  const currentLang = i18n.language as "en" | "it" | "al";
  // Get the category list for the current language
  const categories = categoriesByLanguage[currentLang];

  // Store the selected category (default to the first category, e.g. "All"/"Tutti"/"Të gjitha")
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  // Reset the selected category whenever the language changes.
  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [currentLang, categories]);

  // Localize all blog posts: pick the text fields for the current language.
  const localizedPosts = blogPosts.map((post) => ({
    ...post,
    title: post.title[currentLang],
    excerpt: post.excerpt[currentLang],
    content: post.content[currentLang],
    category: post.category[currentLang],
  }));

  // Filter posts by comparing the localized category.
  const filteredPosts =
    selectedCategory === categories[0]
      ? localizedPosts
      : localizedPosts.filter(
          (post) => post.category === selectedCategory
        );

  return (
    <>
      <Head>
        <title>{t("blog.meta.title", "Blog - Your Website")}</title>
        <meta
          name="description"
          content={t(
            "blog.meta.description",
            "Stay updated with the latest news, trends, and stories from Your Website. Explore our blog for insights on technology, marketing, and more."
          )}
        />
        <meta
          name="keywords"
          content={t(
            "blog.meta.keywords",
            "blog, news, technology, marketing, trends, stories, your website"
          )}
        />
        <meta
          property="og:title"
          content={t("blog.meta.ogTitle", "Blog - Your Website")}
        />
        <meta
          property="og:description"
          content={t(
            "blog.meta.ogDescription",
            "Stay updated with the latest news, trends, and stories from Your Website. Explore our blog for insights on technology, marketing, and more."
          )}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/blog" />
        <meta
          property="og:image"
          content="https://www.yourwebsite.com/images/blog-og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("blog.meta.twitterTitle", "Blog - Your Website")}
        />
        <meta
          name="twitter:description"
          content={t(
            "blog.meta.twitterDescription",
            "Stay updated with the latest news, trends, and stories from Your Website. Explore our blog for insights on technology, marketing, and more."
          )}
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/images/blog-twitter-image.jpg"
        />
      </Head>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/Services BG.png')" }}
      >
        {/* Hero Section */}
        <BlogHero />

        {/* Blog Section */}
        <div className="p-8 bg-opacity-90">
          <h1 className="text-4xl font-medium text-complementary mb-8 text-center">
            {t("blog.readyForNews", "Ready for the latest news?")}
          </h1>
          <p className="text-center font-medium text-complementary mb-12">
            {t(
              "blog.newsDescription",
              "News from us and the world. Technology and marketing trends are our cup of tea. We are ready to keep you updated, tell our opinion, or even our own stories."
            )}
          </p>

          {/* Categories Section */}
          <CategoriesSection
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Blog Cards Section */}
          <BlogCards filteredPosts={filteredPosts} />
        </div>
      </div>
    </>
  );
};

export default BlogPage;