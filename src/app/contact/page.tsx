"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

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
      {/* Header */}
      <header className="border-b border-gray-200" style={{backgroundColor: '#FFFFFF'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logos */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <img
                src="https://ext.same-assets.com/4026891959/1483683087.jpeg"
                alt="Government Logo"
                className="h-8 sm:h-10 lg:h-12 w-auto"
                crossOrigin="anonymous"
              />
              <img
                src="https://ext.same-assets.com/4026891959/2039865706.jpeg"
                alt="NIPMO Logo"
                className="h-8 sm:h-10 lg:h-12 w-auto"
                crossOrigin="anonymous"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm xl:text-base font-medium transition-colors">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm xl:text-base font-medium transition-colors">About NIPMO</Link>

              {/* Resources Dropdown */}
              <div className="relative group" ref={dropdownRef}>
                <button
                  className="text-gray-600 hover:text-gray-900 flex items-center text-sm xl:text-base font-medium transition-colors"
                  onClick={() => toggleDropdown('resources')}
                >
                  Resources
                  <svg className="ml-1 h-3 w-3 xl:h-4 xl:w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Desktop: Main Categories Dropdown - Click Resources shows main categories */}
                {activeDropdown === 'resources' && (
                  <div
                    className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  >
                    <div className="py-2">
                      {/* Compliance and Guidance Documents - Click shows fly-out */}
                      <div className="relative">
                        <div
                          className={`px-4 py-3 text-sm font-medium cursor-pointer flex items-center justify-between transition-all duration-200 ${
                            activeSubMenu === 'compliance' ? 'bg-blue-50 text-blue-900' : 'text-gray-900 hover:bg-gray-50'
                          }`}
                          onClick={() => handleCategoryClick('compliance')}
                        >
                          Compliance and Guidance Documents
                          <svg className={`h-4 w-4 transition-all duration-200 ${
                            activeSubMenu === 'compliance' ? 'text-blue-500 rotate-90' : 'text-gray-400'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>

                        {/* Desktop: Enhanced Fly-out submenu with smooth animations */}
                        {activeSubMenu === 'compliance' && (
                          <div
                            className="absolute left-full top-0 ml-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl z-60 animate-in slide-in-from-left-1 duration-200"
                          >
                            <div className="py-3">
                              <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mb-2">
                                Compliance Documents
                              </div>
                              <Link href="/resources/guidelines" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-150 border-l-3 border-transparent hover:border-blue-500">
                                <div className="font-medium">Guidelines</div>
                                <div className="text-xs text-gray-500">IP management guidance</div>
                              </Link>
                              <Link href="/resources/practice-notes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-150 border-l-3 border-transparent hover:border-blue-500">
                                <div className="font-medium">Practice Notes</div>
                                <div className="text-xs text-gray-500">Best practice recommendations</div>
                              </Link>
                              <Link href="/resources/interpretation-notes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-150 border-l-3 border-transparent hover:border-blue-500">
                                <div className="font-medium">Interpretation Notes</div>
                                <div className="text-xs text-gray-500">IPR Act interpretations</div>
                              </Link>
                              <Link href="/resources/newsletters" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-150 border-l-3 border-transparent hover:border-blue-500">
                                <div className="font-medium">NIPMO Newsletters</div>
                                <div className="text-xs text-gray-500">Latest updates & news</div>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Legislation and Regulations - No submenu */}
                      <Link href="/resources/legislation" className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                        Legislation and Regulations
                      </Link>

                      {/* External Resources - Click shows fly-out */}
                      <div className="relative">
                        <div
                          className={`px-4 py-3 text-sm font-medium cursor-pointer flex items-center justify-between transition-all duration-200 ${
                            activeSubMenu === 'external' ? 'bg-green-50 text-green-900' : 'text-gray-900 hover:bg-gray-50'
                          }`}
                          onClick={() => handleCategoryClick('external')}
                        >
                          External Resources
                          <svg className={`h-4 w-4 transition-all duration-200 ${
                            activeSubMenu === 'external' ? 'text-green-500 rotate-90' : 'text-gray-400'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>

                        {/* Desktop: Enhanced External Resources Fly-out submenu */}
                        {activeSubMenu === 'external' && (
                          <div
                            className="absolute left-full top-0 ml-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-60 animate-in slide-in-from-left-1 duration-200"
                          >
                            <div className="py-3">
                              <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mb-2">
                                Partner Organizations
                              </div>
                              <a href="https://www.dsti.gov.za/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 transition-all duration-150 border-l-3 border-transparent hover:border-green-500 group">
                                <div className="font-medium flex items-center">
                                  Department of Science, Technology and Innovation
                                  <svg className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <div className="text-xs text-gray-500">Government department</div>
                              </a>
                              <a href="https://innovationbridge.info/ibportal/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 transition-all duration-150 border-l-3 border-transparent hover:border-green-500 group">
                                <div className="font-medium flex items-center">
                                  Innovation Bridge Portal
                                  <svg className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <div className="text-xs text-gray-500">Innovation platform</div>
                              </a>
                              <a href="https://www.cipc.co.za/?page_id=1423" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 transition-all duration-150 border-l-3 border-transparent hover:border-green-500 group">
                                <div className="font-medium flex items-center">
                                  CIPC
                                  <svg className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <div className="text-xs text-gray-500">Company registrations</div>
                              </a>
                              <a href="https://nstf.org.za/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 transition-all duration-150 border-l-3 border-transparent hover:border-green-500 group">
                                <div className="font-medium flex items-center">
                                  NSTF
                                  <svg className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <div className="text-xs text-gray-500">Science & technology forum</div>
                              </a>
                              <a href="https://www.sarima.co.za/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 transition-all duration-150 border-l-3 border-transparent hover:border-green-500 group">
                                <div className="font-medium flex items-center">
                                  SARIMA
                                  <svg className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <div className="text-xs text-gray-500">Research management</div>
                              </a>
                              <a href="https://thensa.co.za/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 transition-all duration-150 border-l-3 border-transparent hover:border-green-500 group">
                                <div className="font-medium flex items-center">
                                  THENSA
                                  <svg className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <div className="text-xs text-gray-500">Technology transfer</div>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* KIMS Dropdown */}
              <div className="relative group">
                <button
                  className="text-gray-600 hover:text-gray-900 flex items-center text-sm xl:text-base font-medium transition-colors"
                  onClick={() => toggleDropdown('kims')}
                >
                  KIMS
                  <svg className="ml-1 h-3 w-3 xl:h-4 xl:w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {activeDropdown === 'kims' && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  >
                    <div className="py-2">
                      <Link href="/about-kims" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About KIM System</Link>
                      <Link href="/e-learn" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">NIPMO/KIMS E-Learn</Link>
                      <a href="https://www.kim.nipmo.org.za/authentication/login?returnUrl=%2Fdashboard" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Access KIMS Now</a>
                    </div>
                  </div>
                )}
              </div>

              {/* News & Insights Dropdown */}
              <div className="relative group">
                <button
                  className="text-gray-600 hover:text-gray-900 flex items-center text-sm xl:text-base font-medium transition-colors"
                  onClick={() => toggleDropdown('news')}
                >
                  News & Insights
                  <svg className="ml-1 h-3 w-3 xl:h-4 xl:w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {activeDropdown === 'news' && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  >
                    <div className="py-2">
                      <Link href="/news/in-the-media" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">In The Media</Link>
                      <Link href="/news/dsti-nipmo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DSTI/ NIPMO News</Link>
                      <Link href="/news/ott-publications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Institutional OTT Publications & Articles</Link>
                      <Link href="/news/vacancies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">OTT Vacancies</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/contact" className="text-[#a4ba36] font-medium text-sm xl:text-base transition-colors">Contact Us</Link>
            </nav>

            {/* Tablet Navigation - shows between md and lg */}
            <nav className="hidden md:flex lg:hidden items-center space-x-3">
              <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium">About</Link>
              <Link href="/resources/guidelines" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Resources</Link>
              <Link href="/about-kims" className="text-gray-600 hover:text-gray-900 text-sm font-medium">KIMS</Link>
              <Link href="/news/dsti-nipmo" className="text-gray-600 hover:text-gray-900 text-sm font-medium">News</Link>
              <Link href="/contact" className="text-[#a4ba36] font-medium text-sm">Contact</Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-2 text-xs md:text-sm lg:text-base font-medium transition-all">
                <span className="hidden lg:inline">Access KIMS Now</span>
                <span className="lg:hidden">KIMS</span>
                <svg className="ml-1 lg:ml-2 h-3 w-3 lg:h-4 lg:w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors">Home</Link>
                <Link href="/about" className="text-gray-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors">About NIPMO</Link>

                {/* Mobile: Resources Accordion - Tap Resources opens main categories */}
                <div className="space-y-1">
                  <button
                    onClick={() => toggleDropdown('resources')}
                    className="w-full flex items-center justify-between text-gray-900 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Resources
                    <svg className={`h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {activeDropdown === 'resources' && (
                    <div className="ml-4 space-y-1">
                      {/* Mobile: Compliance and Guidance Documents - Tap to expand/collapse, only one submenu open */}
                      <div>
                        <button
                          onClick={() => toggleMobileCategory('compliance')}
                          className="w-full flex items-center justify-between text-gray-700 py-2 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm"
                        >
                          Compliance and Guidance Documents
                          <svg className={`h-3 w-3 transition-transform ${expandedCategory === 'compliance' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {expandedCategory === 'compliance' && (
                          <div className="ml-4 space-y-1 mt-2">
                            <Link href="/resources/guidelines" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">Guidelines</Link>
                            <Link href="/resources/practice-notes" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">Practice Notes</Link>
                            <Link href="/resources/interpretation-notes" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">Interpretation Notes</Link>
                            <Link href="/resources/newsletters" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">NIPMO Newsletters</Link>
                          </div>
                        )}
                      </div>

                      {/* Mobile: Legislation and Regulations - No submenu */}
                      <Link href="/resources/legislation" className="block text-gray-700 py-2 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">
                        Legislation and Regulations
                      </Link>

                      {/* Mobile: External Resources - Tap to expand/collapse, only one submenu open */}
                      <div>
                        <button
                          onClick={() => toggleMobileCategory('external')}
                          className="w-full flex items-center justify-between text-gray-700 py-2 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm"
                        >
                          External Resources
                          <svg className={`h-3 w-3 transition-transform ${expandedCategory === 'external' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {expandedCategory === 'external' && (
                          <div className="ml-4 space-y-1">
                            <a href="https://www.dsti.gov.za/" target="_blank" rel="noopener noreferrer" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">DSTI</a>
                            <a href="https://innovationbridge.info/ibportal/" target="_blank" rel="noopener noreferrer" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">Innovation Bridge Portal</a>
                            <a href="https://www.cipc.co.za/?page_id=1423" target="_blank" rel="noopener noreferrer" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">CIPC</a>
                            <a href="https://nstf.org.za/" target="_blank" rel="noopener noreferrer" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">NSTF</a>
                            <a href="https://www.sarima.co.za/" target="_blank" rel="noopener noreferrer" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">SARIMA</a>
                            <a href="https://thensa.co.za/" target="_blank" rel="noopener noreferrer" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">THENSA</a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile KIMS Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => toggleDropdown('kims')}
                    className="w-full flex items-center justify-between text-gray-900 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    KIMS
                    <svg className={`h-4 w-4 transition-transform ${activeDropdown === 'kims' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {activeDropdown === 'kims' && (
                    <div className="ml-4 space-y-1">
                      <Link href="/about-kims" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">About KIM System</Link>
                      <Link href="/e-learn" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">NIPMO/KIMS E-Learn</Link>
                    </div>
                  )}
                </div>

                {/* Mobile News & Insights Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => toggleDropdown('news')}
                    className="w-full flex items-center justify-between text-gray-900 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    News & Insights
                    <svg className={`h-4 w-4 transition-transform ${activeDropdown === 'news' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {activeDropdown === 'news' && (
                    <div className="ml-4 space-y-1">
                      <Link href="/news/in-the-media" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">In The Media</Link>
                      <Link href="/news/dsti-nipmo" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">DSTI/ NIPMO News</Link>
                      <Link href="/news/ott-publications" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">OTT Publications & Articles</Link>
                      <Link href="/news/vacancies" className="block text-gray-600 py-1 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm">OTT Vacancies</Link>
                    </div>
                  )}
                </div>

                <Link href="/contact" className="text-[#a4ba36] font-medium py-2 px-3 rounded-md bg-green-50 transition-colors">Contact Us</Link>
                <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white px-4 py-3 mt-4 w-full text-sm font-medium">
                  Access KIMS Now
                  <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* NIPMO Directorates Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 text-center">
            NIPMO Directorates
          </h1>

          {/* Office of the Head: NIPMO */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 mb-8">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">OFFICE OF THE HEAD: NIPMO</h2>
                <p className="text-lg text-gray-600 mb-6">Management Of Oversight</p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/3387231301.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">Strategic Oversight & Governance</span>
                  </div>
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/696479980.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">Performance Management & Institutional Support</span>
                  </div>
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/931400344.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">Operational & Financial Oversight</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/963503759.jpeg"
                        alt="Jetane Charsley"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Jetane Charsley</h3>
                    <p className="text-sm text-gray-600">Head: NIPMO</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/3789253691.jpeg"
                        alt="Naomi Aphane"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Naomi Aphane</h3>
                    <p className="text-sm text-gray-600">Senior Administrative Assistant</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Advisory and Support */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 mb-8">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">ADVISORY AND SUPPORT</h2>
                <p className="text-lg text-gray-600 mb-6">Enabling IP Management & Commercialization</p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/1680915475.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">OTT Support Fund contract management</span>
                  </div>
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/2056265408.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">Sector networking & partnership maintained</span>
                  </div>
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/853789204.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">General IP advocacy & awareness</span>
                  </div>
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/408022225.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">Specialized training in IP Management & technology transfer</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/1494332801.jpeg"
                        alt="Thabang Jase"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Thabang Jase</h3>
                    <p className="text-sm text-gray-600">Director: Advisory & Support</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/3922643854.jpeg"
                        alt="Elmary Buis"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Elmary Buis</h3>
                    <p className="text-sm text-gray-600">Deputy Director</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/4142550196.jpeg"
                        alt="Lungelwa Kula"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Lungelwa Kula</h3>
                    <p className="text-sm text-gray-600">Deputy Director</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/1266283302.jpeg"
                        alt="Vivienne Gondwe"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Vivienne Gondwe</h3>
                    <p className="text-sm text-gray-600">Assistant Director</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/1693390579.jpeg"
                        alt="Nodumo Maluleke"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Nodumo Maluleke</h3>
                    <p className="text-sm text-gray-600">A&S Officer</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/3036736076.jpeg"
                        alt="Hlamalani Mashimbwe"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hlamalani Mashimbwe</h3>
                    <p className="text-sm text-gray-600">Shared Office Administrator</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Regulatory and Compliance */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 mb-8">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">REGULATORY AND COMPLIANCE</h2>
                <p className="text-lg text-gray-600 mb-6">Safeguarding IP Governance</p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/2347265426.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">Regulatory Framework & Compliance Support</span>
                  </div>
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/1246285254.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">Regulatory Oversight & Compliance</span>
                  </div>
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/989435248.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">Safeguarding National Interest</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/3411317127.jpeg"
                        alt="Ntanganedzeni Muanalo"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ntanganedzeni Muanalo</h3>
                    <p className="text-sm text-gray-600">Director: Regulatory & Compliance</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/2567216970.jpeg"
                        alt="Naomi Ngoasheng"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Naomi Ngoasheng</h3>
                    <p className="text-sm text-gray-600">Deputy Director: IP Specialist</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/3340792645.jpeg"
                        alt="Tshimangadzo Munyai"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tshimangadzo Munyai</h3>
                    <p className="text-sm text-gray-600">Deputy Director: IP Attorney</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Funds & Incentives Management */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 mb-8">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Funds & Incentives Management</h2>
                <p className="text-lg text-gray-600 mb-6">Investing in innovation success</p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/3935432253.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">IP Fund Management</span>
                  </div>
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/3085040915.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">OTT Support Fund</span>
                  </div>
                  <div className="flex items-center">
                    <img src="https://ext.same-assets.com/4026891959/2427911003.svg" alt="" className="w-5 h-5 mr-3" crossOrigin="anonymous" />
                    <span className="text-gray-700">Incentives Management</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/1279229734.jpeg"
                        alt="Paballo Masite"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Paballo Masite</h3>
                    <p className="text-sm text-gray-600">Director: Fund and Incentives Management</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/4207598527.jpeg"
                        alt="Mantwa Tshabalala"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Mantwa Tshabalala</h3>
                    <p className="text-sm text-gray-600">Deputy Director: Fund Administration</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://ext.same-assets.com/4026891959/4144674426.png"
                        alt="Lindiwe Mashimbye"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Lindiwe Mashimbye</h3>
                    <p className="text-sm text-gray-600">Deputy Director: Funds and Incentives Management</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get in Touch with NIPMO
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're here to assist you with your queries. Reach out to us through the details below or complete the contact form.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First name
                        </label>
                        <Input id="firstName" placeholder="First name" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last name
                        </label>
                        <Input id="lastName" placeholder="Last name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input id="email" type="email" placeholder="Email" required />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <Input id="phone" type="tel" placeholder="Phone" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="directorate" className="block text-sm font-medium text-gray-700 mb-2">
                        Directorate
                      </label>
                      <select
                        id="directorate"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4ba36] focus:border-[#a4ba36]"
                      >
                        <option value="">Select a directorate</option>
                        <option value="head">Office of the Head: NIPMO</option>
                        <option value="advisory">Advisory and Support</option>
                        <option value="regulatory">Regulatory and Compliance</option>
                        <option value="funds">Funds & Incentives Management</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Message"
                        rows={4}
                        required
                      />
                    </div>

                    <Button className="w-full bg-[#a4ba36] hover:bg-[#94a632] text-white py-3 text-lg">
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <img src="https://ext.same-assets.com/4026891959/582295730.svg" alt="" className="w-6 h-6 mr-3" crossOrigin="anonymous" />
                    <div>
                      <h3 className="font-semibold text-gray-900">General Enquiries:</h3>
                      <p className="text-gray-600">Info@nipmo.org.za</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <img src="https://ext.same-assets.com/4026891959/1142034412.svg" alt="" className="w-6 h-6 mr-3" crossOrigin="anonymous" />
                    <div>
                      <h3 className="font-semibold text-gray-900">KIMS Support:</h3>
                      <p className="text-gray-600">kims.support@nipmo.org.za</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <img src="https://ext.same-assets.com/4026891959/4285149501.svg" alt="" className="w-6 h-6 mr-3" crossOrigin="anonymous" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone Number:</h3>
                      <p className="text-gray-600">+27 (0) 12 843 6300</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-600">NIPMO Location</p>
                      <p className="text-sm text-gray-500">Building 22, CSIR Campus<br />Pretoria, South Africa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12" style={{backgroundColor: '#FFFFFF'}}>
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
                <li><Link href="/news/dsti-nipmo">News & Insights</Link></li>
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
                <img
                  src="https://ext.same-assets.com/4026891959/4095793824.png"
                  alt="Facebook"
                  className="w-6 h-6"
                  crossOrigin="anonymous"
                />
                <img
                  src="https://ext.same-assets.com/4026891959/2343057930.png"
                  alt="Twitter"
                  className="w-6 h-6"
                  crossOrigin="anonymous"
                />
                <img
                  src="https://ext.same-assets.com/4026891959/1180646319.png"
                  alt="LinkedIn"
                  className="w-6 h-6"
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            {/* NIPMO Logo and CTA */}
            <div className="text-center lg:text-left">
              <img
                src="https://ext.same-assets.com/4026891959/2075838640.jpeg"
                alt="NIPMO Logo"
                className="h-12 w-auto mb-4 mx-auto lg:mx-0"
                crossOrigin="anonymous"
              />
              <p className="text-sm text-gray-600 mb-4">
                Empowering South Africa through Intellectual Property and Innovation.
              </p>
              <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white">
                Access KIMS Now
                <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
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
