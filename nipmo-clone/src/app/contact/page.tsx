'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Header from "@/components/Header"

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [selectedDirectorate, setSelectedDirectorate] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Directorate email mapping
  const directorateEmails: { [key: string]: { email: string; name: string } } = {
    head: {
      email: 'Jetane.Charsley@nipmo.org.za',
      name: 'Office of the Head: NIPMO'
    },
    advisory: {
      email: 'Thabang.Jase@nipmo.org.za',
      name: 'Advisory and Support'
    },
    regulatory: {
      email: 'Ntanganedzeni.Muanalo@nipmo.org.za',
      name: 'Regulatory and Compliance'
    },
    funds: {
      email: 'Paballo.Masite@nipmo.org.za',
      name: 'Funds & Incentives Management'
    }
  }

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

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedDirectorate) {
      alert('Please select a directorate')
      return
    }

    const directorate = directorateEmails[selectedDirectorate]
    const subject = `Contact Request: ${directorate.name}`

    // Open email client with pre-filled recipient and subject
    window.location.href = `mailto:${directorate.email}?subject=${encodeURIComponent(subject)}`
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
      {/* Navigation */}
      <Header />

      {/* Contact Page Content */}
      <main className="pt-20">
        {/* NIPMO Directorates Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">NIPMO Directorates</h1>

          {/* Office of the Head: NIPMO */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left side - Directorate Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">OFFICE OF THE HEAD: NIPMO</h2>
                <p className="text-lg text-gray-600 mb-6">Management Of Oversight</p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>Strategic Oversight & Governance</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>Performance Management & Institutional Support</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>Operational & Financial Oversight</span>
                  </div>
                </div>
              </div>

              {/* Right side - Staff Photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/710134979.jpeg"
                      alt="Jetane Charsley"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Head: NIPMO</h3>
                  <p className="text-gray-600 text-sm">Jetane Charsley</p>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/3624798424.jpeg"
                      alt="Naomi Aphane"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Senior Administrative Assistant</h3>
                  <p className="text-gray-600 text-sm">Naomi Aphane</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory and Support */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left side - Directorate Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">ADVISORY AND SUPPORT</h2>
                <p className="text-lg text-gray-600 mb-6">Enabling IP Management & Commercialization</p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>OTT Support Fund contract management</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>Sector networking & partnership maintained</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>General IP advocacy & awareness</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>Specialized training in IP Management & technology transfer</span>
                  </div>
                </div>
              </div>

              {/* Right side - Staff Photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/2995156489.jpeg"
                      alt="Thabang Jase"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Director: Advisory & Support</h3>
                  <p className="text-gray-600 text-sm">Thabang Jase</p>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/2742398557.jpeg"
                      alt="Elmary Buis"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Deputy Director</h3>
                  <p className="text-gray-600 text-sm">Elmary Buis</p>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/1576665978.jpeg"
                      alt="Lungelwa Kula"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Deputy Director</h3>
                  <p className="text-gray-600 text-sm">Lungelwa Kula</p>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/3743649807.jpeg"
                      alt="Vivienne Gondwe"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Assistant Director</h3>
                  <p className="text-gray-600 text-sm">Vivienne Gondwe</p>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/4132485031.jpeg"
                      alt="Nodumo Maluleke"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">A&S Officer</h3>
                  <p className="text-gray-600 text-sm">Nodumo Maluleke</p>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/3768256289.jpeg"
                      alt="Hlamalani Mashimbwe"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Shared Office Administrator</h3>
                  <p className="text-gray-600 text-sm">Hlamalani Mashimbwe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Regulatory and Compliance */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left side - Directorate Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">REGULATORY AND COMPLIANCE</h2>
                <p className="text-lg text-gray-600 mb-6">Safeguarding IP Governance</p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>Regulatory Framework & Compliance Support</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>Regulatory Oversight & Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>Safeguarding National Interest</span>
                  </div>
                </div>
              </div>

              {/* Right side - Staff Photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/1602462957.jpeg"
                      alt="Ntanganedzeni Muanalo"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Director: Regulatory & Compliance</h3>
                  <p className="text-gray-600 text-sm">Ntanganedzeni Muanalo</p>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/3067865760.jpeg"
                      alt="Naomi Ngoasheng"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Deputy Director: IP Specialist</h3>
                  <p className="text-gray-600 text-sm">Naomi Ngoasheng</p>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/4126253404.jpeg"
                      alt="Tshimangadzo Munyai"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Deputy Director: IP Attorney</h3>
                  <p className="text-gray-600 text-sm">Tshimangadzo Munyai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Funds & Incentives Management */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left side - Directorate Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Funds & Incentives Management</h2>
                <p className="text-lg text-gray-600 mb-6">Investing in innovation success</p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>IP Fund Management</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>OTT Support Fund</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#a4ba36] rounded-full flex-shrink-0"></div>
                    <span>Incentives Management</span>
                  </div>
                </div>
              </div>

              {/* Right side - Staff Photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/500109759.jpeg"
                      alt="Paballo Masite"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Director: Fund and Incentives Management</h3>
                  <p className="text-gray-600 text-sm">Paballo Masite</p>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/3823936269.jpeg"
                      alt="Mantwa Tshabalala"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Deputy Director: Fund Administration</h3>
                  <p className="text-gray-600 text-sm">Mantwa Tshabalala</p>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://ext.same-assets.com/4026891959/2852688377.png"
                      alt="Lindiwe Mashimbye"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Deputy Director: Funds and Incentives Management</h3>
                  <p className="text-gray-600 text-sm">Lindiwe Mashimbye</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <div className="bg-gray-50 py-16 lg:py-24 mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get in Touch with NIPMO
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're here to assist you with your queries. Reach out to us through the details below or complete the contact form.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        Select Directorate *
                      </label>
                      <select
                        id="directorate"
                        value={selectedDirectorate}
                        onChange={(e) => setSelectedDirectorate(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4ba36] focus:border-[#a4ba36]"
                        required
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

                    <Button type="submit" className="w-full bg-[#a4ba36] hover:bg-[#94a632] text-white py-3 text-lg">
                      Submit
                    </Button>
                    {selectedDirectorate && (
                      <p className="text-sm text-gray-600 text-center">
                        This will open your email client to contact: <strong>{directorateEmails[selectedDirectorate].email}</strong>
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-[#a4ba36] rounded-full mr-3"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">General Enquiries:</h3>
                      <p className="text-gray-600">Info@nipmo.org.za</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-[#a4ba36] rounded-full mr-3"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">KIMS Support:</h3>
                      <p className="text-gray-600">kims.support@nipmo.org.za</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-[#a4ba36] rounded-full mr-3"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone Number:</h3>
                      <p className="text-gray-600">+27 (0) 12 843 6300</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Our Location</h3>
                  <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.8547485891896!2d28.277779315465567!3d-25.756191983669284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfce6b2e1e9e9b%3A0x8c4b8d4c4b4b4b4b!2sCSIR%20Campus%2C%20Pretoria%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1642584956789!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="NIPMO Location - CSIR Campus, Pretoria"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-900 font-medium">NIPMO Location</p>
                    <p className="text-sm text-gray-600">Building 22, CSIR Campus<br />Pretoria, South Africa</p>
                    <a
                      href="https://www.google.com/maps/search/CSIR+Campus+Pretoria+South+Africa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm text-[#a4ba36] hover:text-[#94a632] font-medium"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
                <a
                  href="https://www.facebook.com/nipmo.dst/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://ext.same-assets.com/4026891959/4095793824.png"
                    alt="Facebook"
                    className="w-6 h-6"
                    crossOrigin="anonymous"
                  />
                </a>
                <a
                  href="https://x.com/nipmo?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg className="w-6 h-6 fill-current text-gray-600 hover:text-gray-900 transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/national-intellectual-property-management-office-nipmo-/?originalSubdomain=za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
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
                src="https://ext.same-assets.com/4026891959/2075838640.jpeg"
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
  );
}
