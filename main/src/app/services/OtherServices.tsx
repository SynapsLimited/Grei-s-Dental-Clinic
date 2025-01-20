// src/pages/ServicesPage.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Service {
  id: number
  title: string
  description: string
  image: string
}

const services: Service[] = [
  { id: 1, title: "Endodontics", description: "Custom website solutions tailored to your needs.", image: "/assets/s1.jpg" },
  { id: 2, title: "Professional Whitening", description: "Innovative mobile applications for iOS and Android.", image: "/assets/s2.jpg" },
  { id: 3, title: "Implantology", description: "Creating intuitive and visually appealing user interfaces.", image: "/assets/s6.jpg" },
  { id: 4, title: "Prophylaxis", description: "Scalable cloud infrastructure and migration services.", image: "/assets/s4.jpg" },
  { id: 5, title: "Hypersensitivity Treatment", description: "Transforming your data into actionable insights.", image: "/assets/s5.jpg" },
  { id: 6, title: "Therapy", description: "Protecting your digital assets from threats.", image: "/assets/s7.jpg" },
  { id: 7, title: "Composite Veneers", description: "Implementing intelligent solutions for your business.", image: "/assets/s10.jpg" },
  { id: 8, title: "Orthodontics", description: "Connecting devices for smarter operations.", image: "/assets/skelet.jpg" },
  { id: 9, title: "Fluoridation", description: "Leveraging blockchain for secure and transparent systems.", image: "/assets/s9.jpg" },
]

export default function ServicesPage() {
  const [visibleServices, setVisibleServices] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleServices((prev) => [...prev, Number(entry.target.id)])
          observer.unobserve(entry.target) // Optional: Stop observing once it's visible
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.service-item').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/assets/Services BG.png')" }}
    >
      <div className="bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm p-6 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id.toString()}
              className={`service-item bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 ${
                visibleServices.includes(service.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={service.image === "/assets/s4.jpg"} // Added priority for LCP image
                  className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-complementary mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/reserve" className="btn btn-primary">
            Get in Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
