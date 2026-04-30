import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/services-data';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.greidentalclinic.al";

  // 1. Static Routes
  const staticRoutes = [
    '', 
    '/about', 
    '/services', 
    '/testimonials', 
    '/blog',
    '/contact', 
    '/faq', 
    '/insurance', 
    '/myths-vs-facts',
    '/reserve', 
    '/privacy', 
    '/terms'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Service Routes
  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // High priority for conversion pages
  }));

  // 3. Dynamic Blog Routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    // Fallback to current date if the post.date format isn't directly parsable by Date()
    lastModified: new Date(post.date) instanceof Date && !isNaN(new Date(post.date).valueOf()) 
        ? new Date(post.date) 
        : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}