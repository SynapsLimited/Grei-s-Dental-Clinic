// src/app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import AnimatedContent from "@/app/blog/[slug]/AnimatedContent";
import ShareButtons from "@/app/blog/[slug]/ShareButtons";
import { blogPosts } from "../data/blogposts";

// Define the shape of the route parameters as a Promise
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: {
    [key: string]: string | string[];
  };
}

// Generate metadata for the blog post page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Your Dental Studio`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// Generate static parameters for dynamic routing
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Main BlogPostPage component marked as async to handle asynchronous params
export default async function BlogPostPage({ params }: PageProps) {
  // Await the resolution of params
  const { slug } = await params;

  // Find the corresponding blog post
  const post = blogPosts.find((p) => p.slug === slug);

  // If the post doesn't exist, render the 404 page
  if (!post) {
    notFound();
  }

  return (
    <div
      className="pt-[80px] min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
      style={{
        backgroundImage: `url('/assets/Services BG.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <article className="max-w-4xl mx-auto px-12 sm:px-15 lg:px-8">
        <AnimatedContent>
          <h1 className="text-4xl sm:text-5xl font-medium mb-10 mt-20 text-complementary dark:text-primary-100">
            {post.title}
          </h1>
          <p className="text-complementary font-medium text-sm mb-6">{post.date}</p>
          <div className="relative h-64 sm:h-80 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
              className="object-cover rounded-lg"
            />
          </div>
          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <ShareButtons post={post} />
        </AnimatedContent>
      </article>
    </div>
  );
}
