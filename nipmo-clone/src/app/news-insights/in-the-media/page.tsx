'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Header from "@/components/Header"

const blogPosts = [
  {
    id: 2,
    title: "Unlocking South Africa's Research Potential: Insights from the National Science Technology Forum",
    excerpt: "At the recent National Science Technology Forum (NSTF) event, Ms. Jetane Charsley, Head of the National Intellectual Property Management...",
    image: "https://ext.same-assets.com/4026891959/638473749.jpg",
    category: "In the media",
    author: "NIPMO",
    date: "Dec 9, 2024",
    readTime: "2 min read",
    views: "17 views"
  },
  {
    id: 6,
    title: "Media Coverage: NIPMO's Impact on Innovation Landscape",
    excerpt: "Recent media coverage highlighting NIPMO's role in fostering innovation and supporting research commercialization...",
    image: "https://ext.same-assets.com/4026891959/2554776892.webp",
    category: "In the media",
    author: "Media Relations",
    date: "Nov 8, 2024",
    readTime: "3 min read",
    views: "45 views"
  }
]

const categories = [
  "All Posts",
  "DSTI/ NIPMO news",
  "OTT Publications & Articles",
  "In the media"
]

export default function InTheMedia() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            In the Media
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Media coverage, press releases, and external features highlighting NIPMO's work,
            initiatives, and impact on South Africa's innovation ecosystem.
          </p>
          <Link href="/news-insights">
            <Button variant="outline" className="border-[#a4ba36] text-[#a4ba36] hover:bg-[#a4ba36] hover:text-white px-8 py-3">
              ← Back to All Posts
            </Button>
          </Link>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search media coverage..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a4ba36] focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Link
                key={category}
                href={
                  category === "All Posts" ? "/news-insights" :
                  category === "DSTI/ NIPMO news" ? "/news-insights/dsti-nipmo" :
                  category === "OTT Publications & Articles" ? "/news-insights/ott-publications" :
                  "/news-insights/in-the-media"
                }
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  category === "In the media"
                    ? 'bg-[#a4ba36] text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              In the Media
            </h2>
            <p className="text-gray-600 mt-2">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:gap-12">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-[#a4ba36] bg-green-50 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.views}</span>
                      </div>
                      <Link href={`/news-insights/article/${post.id}`}>
                        <Button variant="outline" className="border-[#a4ba36] text-[#a4ba36] hover:bg-[#a4ba36] hover:text-white">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
