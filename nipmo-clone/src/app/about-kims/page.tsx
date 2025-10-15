'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from "@/components/Header"

export default function KIMSPage() {
            const dropdownRef = useRef<HTMLDivElement>(null)
  
  

  // Desktop: Click Resources to show main categories
  

  // Desktop: Click main category to toggle fly-out submenu, only one submenu open at a time
  

  // Mobile: Tap main category to expand/collapse submenu accordion style, only one submenu open at a time
  

  

  // Close dropdowns when clicking outside
  

  const features = [
    {
      title: "Submit and Track IP Documents",
      description: "KIMS allows institutions to submit IP-related forms (IP1 to IP9) and all necessary supporting documents, ensuring full compliance with regulatory requirements."
    },
    {
      title: "Funding Application Management",
      description: "Through KIMS, institutions can submit and monitor IP fund rebate requests and Office of Technology Transfer (OTT) support proposals, streamlining funding access for IP activities."
    },
    {
      title: "Real-Time Status Updates",
      description: "KIMS provides real-time tracking of all submissions, instant notifications of updates, and keeps users informed throughout the review and approval processes."
    },
    {
      title: "Direct Communication",
      description: "KIMS includes integrated messaging that allows users to communicate with NIPMO representatives and other stakeholders, reducing the need for external email and ensuring organized interactions."
    },
    {
      title: "Document Access and Management",
      description: "With KIMS, users can view and manage all submitted documents in one secure location, making it easy to track IP progress and maintain essential records."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 text-center" style={{backgroundColor: '#FFFFFF'}}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover Seamless IP Management.
            <br />
            Access the KIMS Now!
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline your IP submissions, funding requests, and compliance tracking with the KIM system
            Designed to support innovation and simplify IP management.
          </p>

          <Button
            className="bg-[#a4ba36] hover:bg-[#94a632] text-white text-lg px-8 py-3"
            asChild
          >
            <a href="https://www.kim.nipmo.org.za/authentication/login?returnUrl=%2Fdashboard" target="_blank" rel="noopener noreferrer">
              Access KIMS Now
              <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </Button>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Key features of KIMS</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start lg:gap-0">
            {/* Features List */}
            <div className="space-y-8 lg:pr-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[#a4ba36] rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* KIMS Dashboard Image - Extended to right edge */}
            <div className="relative lg:pl-8 lg:-mr-4 xl:-mr-8 2xl:-mr-16">
              <div className="relative overflow-hidden">
                <img
                  src="https://ext.same-assets.com/4026891959/1899618549.png"
                  alt="KIMS Dashboard Interface"
                  className="w-full h-auto lg:w-[120%] xl:w-[130%] 2xl:w-[140%] lg:max-w-none"
                  crossOrigin="anonymous"
                />
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
                <svg className="w-6 h-6 fill-current text-gray-600 hover:text-gray-900 transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
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
              <Button
                className="bg-[#a4ba36] hover:bg-[#94a632] text-white"
                asChild
              >
                <a href="https://www.kim.nipmo.org.za/authentication/login?returnUrl=%2Fdashboard" target="_blank" rel="noopener noreferrer">
                  Access KIMS Now
                  <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
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
