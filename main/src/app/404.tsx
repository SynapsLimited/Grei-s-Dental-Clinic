// src/app/404.tsx

import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page Not Found</p>
      <Link
        href="/blog"
        className="text-complementary hover:text-secondary font-medium"
      >
        Go Back to Blog
      </Link>
    </div>
  );
};

export default Custom404;
