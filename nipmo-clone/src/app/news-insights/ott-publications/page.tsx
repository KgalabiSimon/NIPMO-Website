'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from "@/components/Header"

// Sample blog data filtered for OTT Publications & Articles
const blogPosts = [
  {
    id: 1,
    title: "25 Years of Impact Through Innovation - UCT 2025",
    excerpt: "For a quarter of a century, the University of Cape Town's Research Contracts & Innovation (RC&I) office has been driving transformation through ideas that change lives. The Innovation at UCT 2025 brochure celebrates 25 years of breakthrough research, from pioneering sustainable fuels and medical technologies to animal health innovations and a growing portfolio of 40+ spin-off companies valued at over R250 million.",
    image: "https://ext.same-assets.com/4026891959/3491800091.png",
    category: "OTT Publications & Articles",
    author: "Nipmo Kims",
    date: "Jan 7, 2025",
    readTime: "1 min read",
    views: "1 view"
  },
  {
    id: 4,
    title: "Innovation Ecosystem Development in South African Universities",
    excerpt: "Exploring the latest trends in university-based innovation and technology transfer initiatives across the country...",
    image: "https://ext.same-assets.com/4026891959/219286877.jpeg",
    category: "OTT Publications & Articles",
    author: "University Research Office",
    date: "Nov 28, 2024",
    readTime: "4 min read",
    views: "23 views"
  },
  {
    id: 7,
    title: "Best Practices in Technology Transfer Office Management",
    excerpt: "A comprehensive guide to establishing and managing effective technology transfer offices in academic institutions...",
    image: "https://ext.same-assets.com/4026891959/1178258565.jpeg",
    category: "OTT Publications & Articles",
    author: "OTT Research Team",
    date: "Oct 22, 2024",
    readTime: "6 min read",
    views: "18 views"
  },
  {
    id: 8,
    title: "Commercializing Research: From Lab to Market",
    excerpt: "Strategies and case studies on successful commercialization of university research and intellectual property...",
    image: "https://ext.same-assets.com/4026891959/1180646319.png",
    category: "OTT Publications & Articles",
    author: "Innovation Hub",
    date: "Oct 10, 2024",
    readTime: "5 min read",
    views: "34 views"
  }
]

const categories = [
  "All Posts",
  "DSTI/ NIPMO news",
  "OTT Publications & Articles",
  "In the media"
]

export default function OTTPublications() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header - Simplified for category page */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            OTT Publications & Articles
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Research publications, articles, and insights from Office of Technology Transfer (OTT)
            professionals and institutional innovation practitioners across South Africa.
          </p>
          <Link href="/news-insights">
            <Button variant="outline" className="border-[#a4ba36] text-[#a4ba36] hover:bg-[#a4ba36] hover:text-white px-8 py-3">
              ← Back to All Posts
            </Button>
          </Link>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search OTT publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a4ba36] focus:border-transparent outline-none"
              />
              <svg className="absolute right-3 top-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Tabs */}
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
                  category === "OTT Publications & Articles"
                    ? 'bg-[#a4ba36] text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Results Header */}
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              OTT Publications & Articles
            </h2>
            <p className="text-gray-600 mt-2">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
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
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
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
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467.901-6.062 2.373L5.5 17.5V18h13v-.5l-.438-.127A7.962 7.962 0 0112 15z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
                <p className="text-gray-500">Try adjusting your search terms.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-[#a4ba36]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest NIPMO news and insights delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <a href="mailto:know.more@nipmo.org.za?subject=Newsletter Subscription">
              <Button className="bg-white text-[#a4ba36] hover:bg-gray-100 px-8 py-3 font-medium">
                Subscribe Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <img
                src="https://ext.same-assets.com/4026891959/417943153.jpeg"
                alt="Government Logo"
                className="h-16 w-auto mb-4"
                crossOrigin="anonymous"
              />
              <p className="text-sm text-gray-600">
                Boosting socio-economic development in South Africa through research and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about">About NIPMO</Link></li>
                <li><Link href="/resources/guidelines">Functions</Link></li>
                <li><Link href="/news-insights">News & Insights</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>+27 (0) 12 843 6300</p>
                <p>info@nipmo.org.za</p>
                <p>NIPMO, Building 22, CSIR Campus, Pretoria, South Africa</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/nipmo.dst/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://ext.same-assets.com/4026891959/4095793824.png"
                    alt="Facebook"
                    className="w-6 h-6"
                    crossOrigin="anonymous"
                  />
                </a>
                <a href="https://twitter.com/nipmo?lang=en" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 fill-current text-gray-600 hover:text-gray-900 transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/national-intellectual-property-management-office-nipmo-/?originalSubdomain=za" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://ext.same-assets.com/4026891959/1180646319.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                    crossOrigin="anonymous"
                  />
                </a>
              </div>
            </div>

            {/* NIPMO Logo and CTA */}
            <div className="text-center lg:text-left">
              <img
                src="https://ext.same-assets.com/4026891959/2039865706.jpeg"
                alt="NIPMO Logo"
                className="h-12 w-auto mb-4 mx-auto lg:mx-0"
                crossOrigin="anonymous"
              />
              <p className="text-sm text-gray-600 mb-4">
                Empowering South Africa through Intellectual Property and Innovation.
              </p>
              <a href="https://www.kim.nipmo.org.za/authentication/login?returnUrl=%2Fdashboard" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white">
                  Access KIMS Now
                  <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">© 2024 NIPMO</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
