import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import AnimatedContent from "@/app/blog/[slug]/AnimatedContent";
import ShareButtons from "@/app/blog/[slug]/ShareButtons";
import { blogPosts } from "../data/blogposts";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title.en} | Your Dental Studio`, // Accessing English title
    description: post.excerpt.en, // Accessing English excerpt
    openGraph: {
      title: post.title.en,
      description: post.excerpt.en,
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.en,
      description: post.excerpt.en,
      images: [post.image],
    },
  };
}

// Page Component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

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
            {post.title.en} {/* Accessing English title */}
          </h1>
          <p className="text-complementary font-medium text-sm mb-6">
            {post.date}
          </p>
          <div className="relative h-64 sm:h-80 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title.en} // Accessing English title for alt text
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
            dangerouslySetInnerHTML={{ __html: post.content.en }} // Accessing English content
          />
          <ShareButtons post={post} />
        </AnimatedContent>
      </article>
    </div>
  );
}

// SSG for dynamic routes
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}