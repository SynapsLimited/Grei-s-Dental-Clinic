// app/blog/page.tsx

"use client";

import React, { useState } from "react";
import BlogHero from "./components/BlogHero";
import CategoriesSection from "./components/CategoriesSection";
import BlogCards from "./components/BlogCards";
import { blogPosts } from "./data/blogposts";

const categories = [
  "All",
  "Oral Health",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Dental Implants",
  "Pediatric Dentistry",
  "Periodontics",
  "Endodontics",
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/Services BG.png')",
      }}
    >
      {/* Hero Section */}
      <BlogHero />

      {/* Blog Section */}
      <div className="p-8 bg-opacity-90">
        <h1 className="text-4xl font-medium text-complementary mb-8 text-center">
          Ready for the latest news?
        </h1>
        <p className="text-center font-medium text-complementary mb-12">
          News from us and the world. Technology and marketing trends are our
          cup of tea. We are ready to keep you updated, tell our opinion, or
          even our own stories.
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
  );
};

export default BlogPage;
