// app/blog/components/BlogCards.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

interface BlogCardsProps {
  filteredPosts: BlogPost[];
}

const BlogCards: React.FC<BlogCardsProps> = ({ filteredPosts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
      {filteredPosts.map((post, index) => (
        <motion.div
          key={post.id}
          className="bg-white shadow-md rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Wrap the Image with Link */}
          <Link href={`/blog/${post.slug}`} className="block relative h-48 sm:h-56 md:h-64">
            <Image
              src={post.image}
              alt={post.title}
              fill // Replaced layout="fill" with fill
              className="object-cover cursor-pointer" // Replaced objectFit="cover" with object-cover
              priority={false} // Optional: Set priority based on your needs
            />
          </Link>
          <div className="p-4 sm:p-6">
            {/* Wrap the Title with Link */}
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2 cursor-pointer">
                {post.title}
              </h2>
            </Link>
            <p className="text-complementary font-medium text-sm mb-2">{post.date}</p>
            <p className="text-gray-700 mb-4 font-medium line-clamp-3">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-complementary hover:text-secondary font-medium transition-colors duration-200"
            >
              Read More
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogCards;
