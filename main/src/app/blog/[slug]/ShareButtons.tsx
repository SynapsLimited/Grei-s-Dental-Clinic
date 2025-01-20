// app/blog/components/ShareButtons.tsx

'use client'

import { motion } from 'framer-motion';
import { BlogPost } from '../data/blogposts';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface ShareButtonsProps {
  post: BlogPost;
}

export default function ShareButtons({ post }: ShareButtonsProps) {
  const shareUrl = `https://yourdomain.com/blog/${post.slug}`;

  return (
    <div className="flex space-x-4 mt-8">
      <motion.a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-blue-600 hover:text-blue-700"
      >
        <Facebook size={24} />
      </motion.a>
      <motion.a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-sky-500 hover:text-sky-600"
      >
        <Twitter size={24} />
      </motion.a>
      <motion.a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-blue-700 hover:text-blue-800"
      >
        <Linkedin size={24} />
      </motion.a>
    </div>
  );
}
