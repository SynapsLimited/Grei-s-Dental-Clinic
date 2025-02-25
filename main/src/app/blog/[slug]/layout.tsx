import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '../data/blogposts';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  // If the post is not found, trigger a 404 error
  if (!post) {
    notFound();
  }

  return {
    title: `${post.title.en} | Grei Dental Clinic`,
    description: post.excerpt.en,
    openGraph: {
      title: post.title.en,
      description: post.excerpt.en,
      images: [{ url: post.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.en,
      description: post.excerpt.en,
      images: [post.image],
    },
  };
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function BlogPostLayout({ children, params }: LayoutProps) {
  // Simulate delay before rendering children
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await params; // Await the params to ensure they are resolved

  return <>{children}</>;
}