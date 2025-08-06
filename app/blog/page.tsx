'use client'

import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    href: '/blog/blogone',
    title: 'Welcome to Our First eNewsletter!',
    summary:
      'Introducing Morton Dental’s new monthly newsletter — full of smile tips, updates and friendly advice for your dental wellbeing.',
    image: '/images/welcome.jpg',
  },
  {
    href: '/blog/blogtwo',
    title: 'Meet Dr Karen & the Friendly Morton Dental Noosa Team',
    summary:
      'Get to know the people behind your care and how we make every dental visit a warm and gentle experience.',
    image: '/images/karen.jpeg',
  },
  {
    href: '/blog/blogthree',
    title: '5 Tips for a Healthier Smile This Winter',
    summary:
      'Cold weather can challenge your dental health — here’s how to stay protected, hydrated and smiling.',
    image: '/images/winter.jpeg',
  },
]

export default function BlogPage() {
  return (
    <section className="bg-white text-gray-800 py-12 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 🔷 Page Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#00B2A9] mb-4">
            Morton Dental Blog
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore helpful tips, updates, and smile-friendly advice from the trusted team at Morton Dental Noosa.
          </p>
        </div>

        {/* 🔷 Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Link href={post.href} key={idx} className="group">
              <div className="bg-white border rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                <div className="relative w-full h-52 bg-white">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h2 className="text-xl font-semibold text-[#00B2A9] group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600">{post.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 🔷 Call to Action */}
        <div className="text-center pt-8">
          <Link href="/appointment">
            <button className="bg-[#FD7E14] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition">
              BOOK AN APPOINTMENT
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
