"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import { useState, useRef, useEffect } from "react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [showKimsModal, setShowKimsModal] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const subMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Desktop: Click Resources to show main categories
  const toggleDropdown = (dropdown: string) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
      setExpandedCategory(null) // Reset expanded category when switching dropdowns
    } else {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
      setActiveSubMenu(null) // Close any open submenu when switching main dropdowns
    }
  }

  // Desktop: Click main category to toggle fly-out submenu, only one submenu open at a time
  const handleCategoryClick = (category: string) => {
    if (!isMobile) {
      setActiveSubMenu(activeSubMenu === category ? null : category) // Toggle behavior - click to open/close
    }
  }

  // Mobile: Tap main category to expand/collapse submenu accordion style, only one submenu open at a time
  const toggleMobileCategory = (category: string) => {
    if (isMobile) {
      setExpandedCategory(expandedCategory === category ? null : category) // Only one submenu open at a time
    }
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
    setActiveSubMenu(null)
    setExpandedCategory(null)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdowns()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/4026891959/1746930974.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Image Caption */}
          <div className="absolute bottom-4 right-4 text-sm text-white/80 bg-black/30 px-3 py-1 rounded backdrop-blur-sm">
            Image: Created with AI
          </div>
        </div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Empowering Innovation,<br />
              One Click at a Time
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-200">
              Access the Knowledge and Innovation Management System (KIMS) to streamline your IP processes and enhance technology transfer
            </p>
            <Button
              className="bg-[#a4ba36] hover:bg-[#94a632] text-white px-8 py-3 text-lg"
              data-kims-access
            >
              Access KIMS Now
              <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* About NIPMO Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://ext.same-assets.com/4026891959/2183930946.png"
                alt="NIPMO About Image"
                className="rounded-lg w-full h-auto"
                crossOrigin="anonymous"
              />
              <p className="text-sm text-gray-500 mt-2">Image: Created with AI</p>
            </div>
            <div>
              <p className="text-[#a4ba36] font-medium mb-4">About NIPMO</p>
              <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6">
                Championing Innovation and Intellectual Property for a Prosperous South Africa
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The National Intellectual Property Management Office (NIPMO) under the Department of Science, Technology and Innovation (DSTI) in the Republic of South Africa, was established through the Intellectual Property Rights from Publicly Financed Research and Development Act (No. 51 of 2008). NIPMO enables the identification, protection, utilisation and commercialisation of intellectual property (IP) from publicly funded research and development
              </p>
              <Link href="/about">
                <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white px-6">
                  Read More About NIPMO
                  <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Functions of NIPMO Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-medium text-center text-gray-900 mb-16">
            Functions of NIPMO
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Function Cards */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://ext.same-assets.com/4026891959/941250221.png"
                    alt="Compliance Icon"
                    className="w-8 h-8"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#a4ba36] cursor-pointer">Compliance and Policy Oversight</h3>
                <p className="text-sm text-gray-600">
                  Enforces the IPR Act, ensuring that outputs from publicly financed research and development benefits the nation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://ext.same-assets.com/4026891959/382870813.png"
                    alt="IP Awareness Icon"
                    className="w-8 h-8"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#a4ba36] cursor-pointer">IP Awareness and Advocacy</h3>
                <p className="text-sm text-gray-600">
                  Engages in advocacy and awareness activities to strengthen the national IP ecosystem and promote a culture of innovation
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://ext.same-assets.com/4026891959/15214097.png"
                    alt="Funding Icon"
                    className="w-8 h-8"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#a4ba36] cursor-pointer">Funding support</h3>
                <p className="text-sm text-gray-600">
                  Provides financial assistance to institutions through 2 established funding mechanisms namely OTT Support Fund and IP Fund
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://ext.same-assets.com/4026891959/753424497.png"
                    alt="Capacity Building Icon"
                    className="w-8 h-8"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#a4ba36] cursor-pointer">Capacity Building and Skills Development</h3>
                <p className="text-sm text-gray-600">
                  Ensures IP management and Technology Transfer skills are developed and enhanced through hosting certificate training courses
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://ext.same-assets.com/4026891959/19004935.png"
                    alt="Resources Icon"
                    className="w-8 h-8"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#a4ba36] cursor-pointer">Resources for Compliance and Best Practices</h3>
                <p className="text-sm text-gray-600">
                  Issues guidelines and other related resources to assist stakeholders with the interpretation and implementation of the IPR Act.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://ext.same-assets.com/4026891959/3255191954.png"
                    alt="Benefit-sharing Icon"
                    className="w-8 h-8"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#a4ba36] cursor-pointer">Benefit-sharing and Incentives</h3>
                <p className="text-sm text-gray-600">
                  Ensures that institutions include benefit-sharing provisions, as required by the IPR Act, into their institutional policies, while also recognising and incentivising IP creators and innovators for their contributions to South Africa's innovation ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://ext.same-assets.com/4026891959/1399296671.png"
                    alt="Monitoring Icon"
                    className="w-8 h-8"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#a4ba36] cursor-pointer">Monitoring, evaluation and Reporting</h3>
                <p className="text-sm text-gray-600">
                  Ensures compliance with the IPR Act by monitoring and evaluating institutions' IP management activities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://ext.same-assets.com/4026891959/452898235.png"
                    alt="Safeguarding Icon"
                    className="w-8 h-8"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#a4ba36] cursor-pointer">Safeguarding National Interests</h3>
                <p className="text-sm text-gray-600">
                  Ensures that IP from publicly funded R&D is managed responsibly to deliver value and socio-economic benefits to South Africa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900">
              Featured News & Insights
            </h2>
            <Link href="/news-insights" className="text-[#a4ba36] hover:text-[#94a632] flex items-center font-medium">
              See all
              <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 18 - NIPMO Overview Video */}
            <Link href="/news-insights/article/18">
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://ext.same-assets.com/4026891959/525007237.jpeg"
                    alt="National Intellectual Property Management Office"
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">VIDEO</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#a4ba36] font-medium">In the media</span>
                    <span className="text-sm text-gray-500">Sep 3, 2025</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    National Intellectual Property Management Office
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Article 2 - Unlocking Research Potential */}
            <Link href="/news-insights/article/2">
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://ext.same-assets.com/379977813/2900954187.jpeg"
                    alt="Unlocking South Africa's Research Potential"
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">VIDEO</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#a4ba36] font-medium">DSTI/ NIPMO news</span>
                    <span className="text-sm text-gray-500">Dec 9, 2024</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Unlocking South Africa's Research Potential: Insights from the National Science Technology Forum
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Article 10 - NIPMO SARIMA Award */}
            <Link href="/news-insights/article/10">
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://ext.same-assets.com/4026891959/1453098089.jpeg"
                    alt="NIPMO honoured with award"
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#a4ba36] font-medium">DSTI/ NIPMO news</span>
                    <span className="text-sm text-gray-500">Sep 12, 2025</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    NIPMO honoured with award for its contribution to innovation management
                  </h3>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* KIMS Access Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6">
            Discover Seamless IP Management<br />
            – Access the New KIMS Now!
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline your IP submissions, funding requests, and compliance tracking with our new, user-friendly KIMS system. Designed to support innovation and simplify IP management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={() => setShowKimsModal(true)} className="bg-[#a4ba36] hover:bg-[#94a632] text-white px-8 py-3">
              Access KIMS Now
            </Button>
            <Link href="/about-kims">
              <Button variant="outline" className="border-[#a4ba36] text-[#a4ba36] hover:bg-[#a4ba36] hover:text-white px-8 py-3">
                Read More On KIMS
              </Button>
            </Link>
          </div>
          <div className="max-w-4xl mx-auto">
            <img
              src="https://ext.same-assets.com/4026891959/1299496361.png"
              alt="KIMS Dashboard"
              className="w-full h-auto"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#a4ba36]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-medium text-white mb-8">
            Subscribe to our newsletter
          </h2>
          <div className="max-w-md mx-auto">
            <a href="mailto:know.more@nipmo.org.za?subject=Newsletter Subscription">
              <Button className="bg-white text-[#a4ba36] hover:bg-gray-100 px-8">
                Subscribe Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12" style={{backgroundColor: '#FFFFFF'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-4">
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
              <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-[#a4ba36] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#a4ba36] transition-colors">About NIPMO</Link></li>
                <li><Link href="/resources/guidelines" className="hover:text-[#a4ba36] transition-colors">Resources</Link></li>
                <li><Link href="/about-kims" className="hover:text-[#a4ba36] transition-colors">KIMS</Link></li>
                <li><Link href="/news-insights" className="hover:text-[#a4ba36] transition-colors">News & Insights</Link></li>
                <li><Link href="/contact" className="hover:text-[#a4ba36] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/resources/guidelines" className="hover:text-[#a4ba36] transition-colors">Guidelines</Link></li>
                <li><Link href="/resources/practice-notes" className="hover:text-[#a4ba36] transition-colors">Practice Notes</Link></li>
                <li><Link href="/resources/interpretation-notes" className="hover:text-[#a4ba36] transition-colors">Interpretation Notes</Link></li>
                <li><Link href="/resources/newsletters" className="hover:text-[#a4ba36] transition-colors">Newsletters</Link></li>
                <li><Link href="/resources/legislation" className="hover:text-[#a4ba36] transition-colors">Legislation</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>+27 (0) 12 843 6300</p>
                <p>info@nipmo.org.za</p>
                <div>
                  <p>NIPMO, Building 22,</p>
                  <p>CSIR Campus,</p>
                  <p>Pretoria, South Africa</p>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/nipmo.dst/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 hover:opacity-75 transition-opacity">
                  <img
                    src="https://ext.same-assets.com/4026891959/4095793824.png"
                    alt="Facebook"
                    className="w-6 h-6"
                    crossOrigin="anonymous"
                  />
                </a>
                <a href="https://twitter.com/nipmo?lang=en" target="_blank" rel="noopener noreferrer" className="w-6 h-6 hover:opacity-75 transition-opacity">
                  <svg className="w-6 h-6 fill-current text-gray-600 hover:text-gray-900 transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/national-intellectual-property-management-office-nipmo-/?originalSubdomain=za" target="_blank" rel="noopener noreferrer" className="w-6 h-6 hover:opacity-75 transition-opacity">
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
            <div className="lg:col-span-2 text-center">
              <div className="flex flex-col gap-2">
                <img
                  src="https://ext.same-assets.com/4026891959/2075838640.jpeg"
                  alt="NIPMO Logo"
                  className="h-8 w-auto mx-auto object-contain"
                  crossOrigin="anonymous"
                />
                <div className="text-sm text-gray-600">
                  <p>Empowering South Africa through</p>
                  <p>Intellectual Property and Innovation</p>
                </div>
                <Button onClick={() => setShowKimsModal(true)} className="bg-[#a4ba36] hover:bg-[#94a632] text-white w-fit mx-auto">
                  Access KIMS Now
                  <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">© 2024 NIPMO</p>
              {/* <Link href="/admin/login">
                <Button variant="ghost" className="text-xs text-gray-500 hover:text-gray-700">
                  Login
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </footer>

      {/* KIMS Modal */}
      {showKimsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowKimsModal(false)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setShowKimsModal(false)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="p-8 text-center">
                <h2 className="text-3xl font-medium text-gray-900 mb-4">New NIPMO System Launching Soon</h2>

                {/* Dashboard Image */}
                <div className="mb-6">
                  <img
                    src="https://ext.same-assets.com/4026891959/1299496361.png"
                    alt="NIPMO Dashboard"
                    className="w-full h-auto rounded-lg shadow-lg"
                    crossOrigin="anonymous"
                  />
                </div>

                {/* Call to Action */}
                <a
                  href="https://www.kim.nipmo.org.za/authentication/login?returnUrl=%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white px-8 py-3 text-lg font-semibold">
                    Access System Now
                    <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
