'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from "@/components/Header"

// Blog post type definition
interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
  views: string
  slug: string
  videoUrl?: string
  featured?: boolean
}

// Blog data with real NIPMO articles (default posts)
const blogPostsDefault = [
  {
    id: 1,
    title: "25 Years of Impact Through Innovation - UCT 2025",
    excerpt: "For a quarter of a century, the University of Cape Town's Research Contracts & Innovation (RC&I) office has been driving transformation through ideas that change lives. The Innovation at UCT 2025 brochure celebrates 25 years of breakthrough research, from pioneering sustainable fuels and medical technologies to animal health innovations and a growing portfolio of 40+ spin-off companies valued at over R250 million.",
    image: "https://ext.same-assets.com/4026891959/3491800091.png",
    category: "OTT Publications & Articles",
    author: "Nipmo Kims",
    date: "Jan 7, 2025",
    readTime: "1 min read",
    views: "1 view",
    slug: "uct-25-years-innovation"
  },
  {
    id: 2,
    title: "Unlocking South Africa's Research Potential: Insights from the National Science Technology Forum",
    excerpt: "At the recent National Science Technology Forum (NSTF) event, Ms. Jetane Charsley, Head of the National Intellectual Property Management Office (NIPMO), delivered a thought-provoking presentation on the 'Innovation Ecosystem – Areas to Celebrate and to Improve On.'",
    image: "https://ext.same-assets.com/379977813/2900954187.jpeg",
    category: "DSTI/ NIPMO news",
    author: "Ms. Jetane Charsley, Head of NIPMO",
    date: "Dec 9, 2024",
    readTime: "2 min read",
    views: "20 views",
    slug: "unlocking-research-potential-nstf",
    featured: true
  },

  {
    id: 7,
    title: "VUT strengthens global research ties with SUNY Polytechnical Institute",
    excerpt: "VUT and SUNY Polytechnic Institute partnered to advance global research, academic exchange & innovation, supporting VUT's internationalisation goals under Strategy 2033+.",
    image: "https://ext.same-assets.com/4026891959/214358251.webp",
    category: "In the media",
    author: "Nipmo Kims",
    date: "Jan 6, 2025",
    readTime: "1 min read",
    views: "4 views",
    slug: "vut-strengthens-global-research-ties"
  },
  {
    id: 8,
    title: "Groundbreaking milestone as Unisa exceeds 100 patents granted",
    excerpt: "Unisa celebrates a remarkable milestone, with over a hundred patents granted for inventions that stem from its ongoing research and development efforts. Since the launch of the Directorate of Innovation, Technology Transfer and Commercialisation (DITTC) in 2012, the university has worked closely with both staff and students to transform fresh ideas into protected technologies.",
    image: "https://ext.same-assets.com/4026891959/1991198915.png",
    category: "OTT Publications & Articles",
    author: "Nipmo Kims",
    date: "Jan 6, 2025",
    readTime: "2 min read",
    views: "3 views",
    slug: "unisa-exceeds-100-patents"
  },
  {
    id: 9,
    title: "Can Rooibos extract help treat breast cancer?",
    excerpt: "October is Breast Cancer Awareness Month, and there's some good news on the horizon in South Africa. Stellenbosch University's Dr Nicky Verhoog is leading a study to assess the impact of Rooibos extract in breast cancer treatment. Early results suggest Rooibos extract may limit estrogen's role in promoting breast cancer cell growth.",
    image: "https://ext.same-assets.com/4026891959/375730654.jpeg",
    category: "In the media",
    author: "jetanecharsley",
    date: "Oct 6, 2025",
    readTime: "2 min read",
    views: "4 views",
    slug: "rooibos-extract-breast-cancer"
  },
  {
    id: 10,
    title: "NIPMO honoured with award for its contribution to innovation management",
    excerpt: "On 4 September 2025, the National Intellectual Property Management Office (NIPMO) received the Southern African Research and Innovation Management Association (SARIMA) Excellence in Organisational Contribution to Innovation Management Award for its role in strengthening South Africa's innovation ecosystem.",
    image: "https://ext.same-assets.com/4026891959/1453098089.jpeg",
    category: "DSTI/ NIPMO news",
    author: "Nipmo Kims",
    date: "Sep 12, 2025",
    readTime: "2 min read",
    views: "4 views",
    slug: "nipmo-sarima-award",
    featured: true
  },
  {
    id: 11,
    title: "Briefing on the Intellectual Property from Publicly Financed Research and Development Act (IPR Act)",
    excerpt: "The Committee was briefed by the Department of Science, Technology and Innovation and the National Intellectual Property Management Office (NIPMO) on the Intellectual Property from Publicly Financed Research and Development Act (IPR Act).",
    image: "https://ext.same-assets.com/4026891959/185253830.png",
    category: "DSTI/ NIPMO news",
    author: "Nipmo Kims",
    date: "Mar 11, 2025",
    readTime: "16 min read",
    views: "3 views",
    slug: "ipr-act-briefing"
  },
  {
    id: 12,
    title: "Celebrating history of SADiLaR: A testament to heritage and innovation",
    excerpt: "As South Africa closes heritage month, the South African Centre for Digital Language Resources (SADiLaR) proudly turns the spotlight inwards, celebrating its own heritage through its history book titled The Story of SADiLaR.",
    image: "https://ext.same-assets.com/4026891959/2152112421.jpeg",
    category: "In the media",
    author: "jetanecharsley",
    date: "Oct 6, 2025",
    readTime: "2 min read",
    views: "4 views",
    slug: "sadilar-heritage-celebration"
  },
  {
    id: 13,
    title: "Prof. Rangith Baby Kuriakose: CUT Builds Digital Twin of Smart Manufacturing Environment",
    excerpt: "CUT continues to think beyond by advancing research in smart manufacturing. At the heart of this innovation is the full-scale water bottling plant, originally conceived in 2018 and now serving as a foundation for cutting-edge research and postgraduate training.",
    image: "https://ext.same-assets.com/4026891959/295356671.jpeg",
    category: "In the media",
    author: "jetanecharsley",
    date: "Oct 1, 2025",
    readTime: "2 min read",
    views: "5 views",
    slug: "cut-digital-twin-manufacturing"
  },

  {
    id: 15,
    title: "TUT ignites creativity at World IP Day 2025 celebration",
    excerpt: "The Tshwane University of Technology (TUT) sparked innovation and artistic passion during its celebration of World Intellectual Property (IP) Day 2025 on 29 May. Themed IP and Music: Feel the Beat of IP, the event highlighted the powerful role of intellectual property in nurturing creativity, especially within the music industry.",
    image: "https://ext.same-assets.com/4026891959/1365670431.jpeg",
    category: "In the media",
    author: "Nipmo Kims",
    date: "Jun 4, 2025",
    readTime: "2 min read",
    views: "2 views",
    slug: "tut-world-ip-day-2025"
  },
  {
    id: 16,
    title: "Understanding intellectual property can supercharge innovation",
    excerpt: "Producing knowledge is a daily pursuit at universities — knowing how best to protect and draw value from it is crucial. The Wits Innovation Centre (WIC) and Wits Libraries recently provided helpful tips on how to do this.",
    image: "https://ext.same-assets.com/4026891959/4268792712.jpeg",
    category: "In the media",
    author: "Nipmo Kims",
    date: "May 9, 2025",
    readTime: "4 min read",
    views: "2 views",
    slug: "wits-ip-innovation"
  },
  {
    id: 17,
    title: "DUT celebrates World Intellectual Property Day",
    excerpt: "The Durban University of Technology (DUT), in collaboration with key stakeholders, proudly co-hosted the highly anticipated World Intellectual Property (IP) Day 2025 celebration in KwaZulu-Natal, centred on the theme Intellectual Property and Music: Feel the Beat of IP.",
    image: "https://ext.same-assets.com/4026891959/13847285.jpeg",
    category: "In the media",
    author: "Nipmo Kims",
    date: "May 2, 2025",
    readTime: "3 min read",
    views: "3 views",
    slug: "dut-world-ip-day"
  },
  {
    id: 18,
    title: "National Intellectual Property Management Office",
    excerpt: "National Intellectual Property Management Office (NIPMO) is the implementing office of the Intellectual Property Rights from Publicly Financed Research & Development Act (IPR Act) in South Africa.",
    image: "https://ext.same-assets.com/4026891959/525007237.jpeg",
    category: "In the media",
    author: "Nipmo Kims",
    date: "Sep 3, 2025",
    readTime: "1 min read",
    views: "5 views",
    slug: "nipmo-overview-video",
    videoUrl: "https://www.youtube.com/watch?v=Fw5giO5xnwE",
    featured: true
  },
  {
    id: 19,
    title: "Always Something New Out of Africa – Innovation at UCT 2024",
    excerpt: "Discover the groundbreaking research and world-changing ideas coming out of the University of Cape Town (UCT). From pioneering DNA vaccine platforms and sustainable agriculture breakthroughs to cutting-edge cancer therapies and honey authentication technology — this year's Innovation at UCT brochure showcases how African ingenuity is shaping global progress.",
    image: "https://ext.same-assets.com/4026891959/886445888.png",
    category: "OTT Publications & Articles",
    author: "Nipmo Kims",
    date: "Jan 4, 2025",
    readTime: "1 min read",
    views: "8 views",
    slug: "uct-innovation-2024"
  }
]

const categories = [
  "All Posts",
  "DSTI/ NIPMO news",
  "OTT Publications & Articles",
  "In the media"
]

export default function NewsInsights() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All Posts")
  const [searchQuery, setSearchQuery] = useState("")
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(blogPostsDefault)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Load posts from localStorage on mount
  useEffect(() => {
    const storedPosts = localStorage.getItem('nipmo_blog_posts')
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts) as BlogPost[]
      // Merge with default posts, prioritizing stored posts
      const allPosts = [...parsedPosts, ...blogPostsDefault.filter(
        defaultPost => !parsedPosts.some((p: BlogPost) => p.id === defaultPost.id)
      )]
      setBlogPosts(allPosts)
    }
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    setActiveSubMenu(null)
  }

  const handleCategoryClick = (category: string) => {
    setActiveSubMenu(activeSubMenu === category ? null : category)
  }

  const toggleMobileCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setActiveSubMenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />

      {/* Search and Filter Section */}
      <section className="pt-16 pb-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Type here to search"
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
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#a4ba36] text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Header */}
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {selectedCategory}
            </h2>
            <p className="text-gray-600 mt-2">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid - NEW GRID LAYOUT */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 h-full flex flex-col overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-64 w-full bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-contain"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-[#a4ba36] bg-white/90 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 flex-1">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{post.views}</span>
                      </div>
                      <Link href={`/news-insights/article/${post.id}`}>
                        <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white text-sm px-4 py-2">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
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
                <p className="text-gray-500">Try adjusting your search terms or browse different categories.</p>
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
