"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
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
    if (isMobile) return // Prevent mobile dropdown state reset
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    setActiveSubMenu(null) // Close any open submenu when switching main dropdowns
  }

  // Desktop: Click main category to toggle fly-out submenu, only one submenu open at a time
  const handleCategoryClick = (category: string) => {
    if (!isMobile) {
      setActiveSubMenu(activeSubMenu === category ? null : category) // Toggle behavior - click to open/close
    }
  }

  // Mobile: Toggle Resources dropdown independently from desktop logic
  const toggleMobileDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    // Don't reset expandedCategory - let submenus stay open
  }

  // Mobile: Tap main category to expand/collapse submenu accordion style, only one submenu open at a time
  const toggleMobileCategory = (category: string) => {
    // Always execute the toggle logic for mobile menu items
    setExpandedCategory(expandedCategory === category ? null : category) // Only one submenu open at a time
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
    setActiveSubMenu(null)
    setExpandedCategory(null)
  }

  // Close dropdowns when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only close on click outside for desktop
      if (!isMobile && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdowns()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobile])

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200" style={{backgroundColor: '#FFFFFF'}}>
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
              <Link href="/" className="text-gray-600 hover:text-[#a4ba36] font-medium text-sm xl:text-base transition-colors">Home</Link>
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
                              <Link href="/resources/guidelines" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-150 border-l-3 border-transparent hover:border-blue-500" onClick={() => closeDropdowns()}>
                                <div className="font-medium">Guidelines</div>
                                <div className="text-xs text-gray-500">IP management guidance</div>
                              </Link>
                              <Link href="/resources/practice-notes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-150 border-l-3 border-transparent hover:border-blue-500" onClick={() => closeDropdowns()}>
                                <div className="font-medium">Practice Notes</div>
                                <div className="text-xs text-gray-500">Best practice recommendations</div>
                              </Link>
                              <Link href="/resources/interpretation-notes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-150 border-l-3 border-transparent hover:border-blue-500" onClick={() => closeDropdowns()}>
                                <div className="font-medium">Interpretation Notes</div>
                                <div className="text-xs text-gray-500">IPR Act interpretations</div>
                              </Link>
                              <Link href="/resources/newsletters" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-150 border-l-3 border-transparent hover:border-blue-500" onClick={() => closeDropdowns()}>
                                <div className="font-medium">NIPMO Newsletters</div>
                                <div className="text-xs text-gray-500">Latest updates & news</div>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Legislation and Regulations - No submenu */}
                      <Link href="/resources/legislation" className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors" onClick={() => closeDropdowns()}>
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
                            className="absolute left-full top-0 ml-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl z-60 animate-in slide-in-from-left-1 duration-200"
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
                              <a href="https://www.dhet.gov.za/Policy%20and%20Development%20Support/Creative%20Outputs%20Implementation%20Guidelines_October%202021%20(003).pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 transition-all duration-150 border-l-3 border-transparent hover:border-green-500 group">
                                <div className="font-medium flex items-center">
                                  DHET Innovation Policy
                                  <svg className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <div className="text-xs text-gray-500">Creative outputs & innovations</div>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* KIMS Link */}
              <Link href="/about-kims" className="text-gray-600 hover:text-gray-900 text-sm xl:text-base font-medium transition-colors">KIMS</Link>

              {/* News & Insights Link */}
              <Link href="/news-insights" className="text-gray-600 hover:text-gray-900 text-sm xl:text-base font-medium transition-colors">News & Insights</Link>

              <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm xl:text-base font-medium transition-colors">Contact Us</Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white text-sm xl:text-base">
                Access KIMS Now
                <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              <nav className="space-y-2">
                <Link href="/" className="block py-2 text-[#a4ba36] font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link href="/about" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>About NIPMO</Link>

                {/* Resources Dropdown Mobile */}
                <div>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-2 text-gray-600 hover:text-gray-900 font-medium"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleMobileDropdown('resources')
                    }}
                  >
                    Resources
                    <svg className={`h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {activeDropdown === 'resources' && (
                    <div className="pl-4 space-y-2 mt-2">
                      {/* Compliance and Guidance Documents */}
                      <div>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between py-2 text-sm text-gray-700 font-medium"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            toggleMobileCategory('compliance')
                          }}
                        >
                          Compliance and Guidance Documents
                          <svg className={`h-4 w-4 transition-transform ${expandedCategory === 'compliance' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>

                        <div
                          className={`pl-4 space-y-2 mt-2 overflow-hidden transition-[max-height] duration-300 ${
                            expandedCategory === 'compliance' ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <Link href="/resources/guidelines" className="block py-2 text-sm text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Guidelines</Link>
                          <Link href="/resources/practice-notes" className="block py-2 text-sm text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Practice Notes</Link>
                          <Link href="/resources/interpretation-notes" className="block py-2 text-sm text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Interpretation Notes</Link>
                          <Link href="/resources/newsletters" className="block py-2 text-sm text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>NIPMO Newsletters</Link>
                        </div>
                      </div>

                      <Link href="/resources/legislation" className="block py-2 text-sm text-gray-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Legislation and Regulations</Link>

                      {/* External Resources */}
                      <div>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between py-2 text-sm text-gray-700 font-medium"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            toggleMobileCategory('external')
                          }}
                        >
                          External Resources
                          <svg className={`h-4 w-4 transition-transform ${expandedCategory === 'external' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>

                        <div
                          className={`pl-4 space-y-2 mt-2 overflow-hidden transition-[max-height] duration-300 ${
                            expandedCategory === 'external' ? 'max-h-[600px]' : 'max-h-0'
                          }`}
                        >
                          <a href="https://www.dsti.gov.za/" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-gray-600 hover:text-gray-900">DSTI</a>
                          <a href="https://innovationbridge.info/ibportal/" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-gray-600 hover:text-gray-900">Innovation Bridge Portal</a>
                          <a href="https://www.cipc.co.za/?page_id=1423" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-gray-600 hover:text-gray-900">CIPC</a>
                          <a href="https://nstf.org.za/" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-gray-600 hover:text-gray-900">NSTF</a>
                          <a href="https://www.sarima.co.za/" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-gray-600 hover:text-gray-900">SARIMA</a>
                          <a href="https://thensa.co.za/" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-gray-600 hover:text-gray-900">THENSA</a>
                          <a href="https://www.dhet.gov.za/Policy%20and%20Development%20Support/Creative%20Outputs%20Implementation%20Guidelines_October%202021%20(003).pdf" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-gray-600 hover:text-gray-900">DHET Innovation Policy</a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* KIMS Link Mobile */}
                <Link href="/about-kims" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>KIMS</Link>

                {/* News & Insights Link Mobile */}
                <Link href="/news-insights" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>News & Insights</Link>

                <Link href="/contact" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>

                {/* Mobile CTA Button */}
                <div className="pt-4">
                  <Button onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-[#a4ba36] hover:bg-[#94a632] text-white">
                    Access KIMS Now
                    <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
