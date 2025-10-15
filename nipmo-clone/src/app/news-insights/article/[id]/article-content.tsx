'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { VideoPlayer } from '@/components/ui/video-player'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  videoUrl?: string
  category: string
  author: string
  date: string
  readTime: string
  views: string
}

interface ArticleContentProps {
  post: BlogPost
  related: BlogPost[]
}

export default function ArticleContent({ post, related }: ArticleContentProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }
  const closeDropdowns = () => setActiveDropdown(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b border-gray-200" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
                <img src="https://ext.same-assets.com/4026891959/1483683087.jpeg" alt="Government Logo" className="h-8 sm:h-10 lg:h-12 w-auto" crossOrigin="anonymous" />
                <img src="https://ext.same-assets.com/4026891959/2039865706.jpeg" alt="NIPMO Logo" className="h-8 sm:h-10 lg:h-12 w-auto" crossOrigin="anonymous" />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm xl:text-base font-medium transition-colors">Home</Link>
              <Link href="/news-insights" className="text-[#a4ba36] font-medium text-sm xl:text-base">News & Insights</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm xl:text-base font-medium transition-colors">Contact</Link>
            </nav>

            <div className="hidden md:block">
              <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-2 text-xs md:text-sm lg:text-base font-medium transition-all">
                <span className="hidden lg:inline">Access KIMS Now</span>
                <span className="lg:hidden">KIMS</span>
                <svg className="ml-1 lg:ml-2 h-3 w-3 lg:h-4 lg:w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </Button>
            </div>

            <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors">Home</Link>
                <Link href="/news-insights" className="text-[#a4ba36] font-medium py-2 px-3 rounded-md bg-green-50">News & Insights</Link>
                <Link href="/contact" className="text-gray-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors">Contact</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/news-insights" className="text-gray-500 hover:text-gray-700">News & Insights</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article */}
      <main className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-[#a4ba36] bg-green-50 rounded-full">{post.category}</span>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-500 text-sm">• {post.readTime}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
              <div className="relative w-full mb-8 rounded-lg overflow-hidden bg-gray-100">
                <img src={post.image} alt={post.title} className="w-full h-auto" crossOrigin="anonymous" />
              </div>
              <p className="text-lg text-gray-600 mb-8">by {post.author}</p>
            </header>

            <article className="prose prose-lg max-w-none">
              <div className="article-content" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Video Player */}
              {post.videoUrl && (
                <div className="my-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Watch the Full Presentation</h3>
                  <VideoPlayer
                    videoUrl={post.videoUrl}
                    title={`${post.title} - Video Presentation`}
                    className="mb-4"
                  />
                  <p className="text-sm text-gray-600 italic">
                    Watch the full presentation to gain deeper insights into South Africa's innovation landscape and the way forward.
                  </p>
                </div>
              )}
            </article>

            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Link href="/news-insights">
                  <Button variant="outline" className="border-[#a4ba36] text-[#a4ba36] hover:bg-[#a4ba36] hover:text-white">← Back to News & Insights</Button>
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </main>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map((r) => (
                  <Card key={r.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 h-full flex flex-col overflow-hidden">
                    <div className="relative h-48 w-full">
                      <img src={r.image} alt={r.title} className="w-full h-full object-cover" crossOrigin="anonymous" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-[#a4ba36] bg-white/90 rounded-full">{r.category}</span>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                        <span>{r.date}</span>
                        <span>•</span>
                        <span>{r.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 flex-1">{r.title}</h3>
                      <Link href={`/news-insights/article/${r.id}`}>
                        <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white text-sm px-4 py-2">Read More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-200 mt-0 pt-0 text-center">
            <p className="text-sm text-gray-600">© 2024 NIPMO</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .article-content h2 { font-size: 1.5rem; font-weight: 700; color: #1f2937; margin-top: 2rem; margin-bottom: 1rem; line-height: 1.3; }
        .article-content p { color: #4b5563; line-height: 1.7; margin-bottom: 1.25rem; }
        .article-content ul { margin: 1.25rem 0; padding-left: 1.5rem; }
        .article-content li { color: #4b5563; line-height: 1.6; margin-bottom: 0.5rem; list-style-type: disc; }
      `}</style>
    </div>
  )
}
