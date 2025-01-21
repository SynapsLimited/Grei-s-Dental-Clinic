import { notFound } from "next/navigation"
import { Metadata } from "next"
import Image from "next/image"
// Removed `BlogPost` from import because it's not used
import { blogPosts } from "../data/blogposts"
import AnimatedContent from "./AnimatedContent"
import ShareButtons from "./ShareButtons"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}

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
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
