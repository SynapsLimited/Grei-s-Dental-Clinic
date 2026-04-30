import { Metadata } from "next";
import en from "@/dictionaries/en.json";
import { servicesData } from "@/lib/services-data";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { slug } = await params;
  
  // Type assertion to access the dynamic key safely
  const serviceKey = slug as keyof typeof en.servicesData;
  const serviceText = en.servicesData[serviceKey];
  
  // Fetch image from the lib data for OpenGraph SEO representation
  const serviceLibData = servicesData[serviceKey as keyof typeof servicesData];

  if (!serviceText) {
    return {
      title: "Service Not Found | Grei's Dental Clinic",
      description: "This dental service could not be found.",
    };
  }

  const ogImage = serviceLibData?.images?.[0]?.src || "/images/home-page-hero-image.jpg";

  return {
    title: `${serviceText.title} in Tirana | Grei's Dental Clinic`,
    description: serviceText.shortDesc,
    openGraph: {
      title: `${serviceText.title} in Tirana | Grei's Dental Clinic`,
      description: serviceText.shortDesc,
      type: "article",
      images: [
        {
          url: ogImage,
          alt: serviceText.title,
        },
      ],
      siteName: "Grei's Dental Clinic",
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceText.title} | Grei's Dental Clinic`,
      description: serviceText.shortDesc,
      images: [ogImage],
    },
  };
}

export default function ServiceDetailLayout({ children }: Props) {
  return <>{children}</>;
}