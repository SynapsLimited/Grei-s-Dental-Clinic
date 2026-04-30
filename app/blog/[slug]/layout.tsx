import { Metadata } from "next";
import en from "@/dictionaries/en.json";
import { blogPosts } from "@/lib/blog-data";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { slug } = await params;
  
  // Type assertion to access the dynamic key safely
  const blogKey = slug as keyof typeof en.blogData;
  const postText = en.blogData[blogKey];
  const postData = blogPosts.find((p) => p.id === slug);

  if (!postText || !postData) {
    return {
      title: "Post Not Found | Grei's Dental Clinic",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: `${postText.title} | Grei's Dental Clinic Blog`,
    description: postText.excerpt,
    authors: [{ name: postData.author }],
    openGraph: {
      title: postText.title,
      description: postText.excerpt,
      type: "article",
      publishedTime: postData.date,
      authors: [postData.author],
      images: [
        {
          url: postData.image,
          alt: postText.title,
        },
      ],
      siteName: "Grei's Dental Clinic",
    },
    twitter: {
      card: "summary_large_image",
      title: postText.title,
      description: postText.excerpt,
      images: [postData.image],
    },
  };
}

export default function BlogPostLayout({ children }: Props) {
  return <>{children}</>;
}