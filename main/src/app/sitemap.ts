import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://grei-s-dental-clinic-g3la.vercel.app';

  // Static routes
  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/reserve`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/about-us`, lastModified: new Date() },
  ];

  // Dynamic routes (blog posts)
  const blogPosts = [
    { slug: "understanding-root-canals", lastModified: new Date("2024-09-04") },
    { slug: "top-5-cosmetic-dentistry-procedures", lastModified: new Date("2025-09-05") },
    { slug: "importance-of-regular-dental-checkups", lastModified: new Date("2024-09-04") },
    { slug: "dental-implants-vs-dentures", lastModified: new Date("2024-09-16") },
    { slug: "orthodontics-for-adults", lastModified: new Date("2025-01-04") },
    { slug: "pediatric-dentistry", lastModified: new Date("2025-01-02") },
    { slug: "managing-gum-disease", lastModified: new Date("2024-12-31") },
    { slug: "nutrition-and-oral-health", lastModified: new Date("2024-12-29") },
    { slug: "teeth-whitening-safe-practices", lastModified: new Date("2024-12-27") },
    { slug: "preventing-tooth-decay", lastModified: new Date("2024-12-25") },
  ];

  const dynamicRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}