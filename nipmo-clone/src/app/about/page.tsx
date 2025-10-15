"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import Header from "@/components/Header"

export default function About() {
    const [expandedFunction, setExpandedFunction] = useState<string | null>("compliance")
          const dropdownRef = useRef<HTMLDivElement>(null)



  const toggleFunction = (functionName: string) => {
    setExpandedFunction(expandedFunction === functionName ? null : functionName)
  }

  // Desktop: Click Resources to show main categories


  // Desktop: Click main category to toggle fly-out submenu, only one submenu open at a time


  // Mobile: Tap main category to expand/collapse submenu accordion style, only one submenu open at a time




  // Close dropdowns when clicking outside


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              NIPMO is a regulator, facilitator, and enabler in South Africa's intellectual property (IP) ecosystem
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
              NIPMO ensures that IP emanating from publicly financed research and development is leveraged for national benefit while promoting compliance, transparency and innovation.
            </p>
            <a href="https://www.kim.nipmo.org.za/authentication/login?returnUrl=%2Fdashboard" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg font-medium transition-all">
                Access KIMS Now
                <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://ext.same-assets.com/4026891959/2874773214.png"
                alt="Research Ecosystem"
                className="rounded-lg w-full h-auto"
                crossOrigin="anonymous"
              />
              <p className="text-sm text-gray-500 mt-2">Image: Created with AI</p>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                The National Intellectual Property Management Office (NIPMO) under the Department of Science, Technology and Innovation (DSTI) in South Africa, was established through the Intellectual Property Rights from Publicly Financed Research and Development IPR Act (No. 51 of 2008).
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                IRP Act enables the identification, protection, utilisation and commercialisation of intellectual property (IP) from publicly funded research and development.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Through strategic guidance, regulatory oversight of specific IP transactions, financial incentives, targeted support for institutional offices of technology transfer, general IP advocacy and awareness initiatives, and legislative enforcement, NIPMO ensures that publicly funded IP contributes meaningfully to national development and advances South Africa's knowledge economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 mb-4 sm:mb-6">
              What drives us
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-gray-200 border-0">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Mission</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  To ensure the effective identification, protection and utilisation of intellectual property emanating from publicly funded research and development, aligned with the IPR Act, while building capacity, raising awareness and enabling partnerships that unlock South Africa's innovation potential for economic and social development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-200 border-0">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Vision</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  A South Africa where intellectual property from publicly funded research and development, supported through effective regulation and strategic collaboration, fuels innovation, inclusive growth and sustainable socio-economic transformation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Functions Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
              Our Eight Core Functions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the comprehensive range of services and responsibilities that drive NIPMO's mission to enhance South Africa's intellectual property ecosystem.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
            {/* Compliance and Policy Oversight */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFunction("compliance")}
                  className={`w-full flex items-center justify-between py-6 px-6 text-left transition-all duration-300 ${
                    expandedFunction === "compliance"
                      ? "bg-gradient-to-r from-[#a4ba36] to-[#8fa830] text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      expandedFunction === "compliance"
                        ? "bg-white bg-opacity-20"
                        : "bg-[#a4ba36] bg-opacity-10"
                    }`}>
                      <svg className={`w-6 h-6 ${
                        expandedFunction === "compliance" ? "text-white" : "text-[#a4ba36]"
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Compliance and Policy Oversight</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    expandedFunction === "compliance"
                      ? "bg-white bg-opacity-20"
                      : "bg-gray-100"
                  }`}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${
                      expandedFunction === "compliance" ? "rotate-180 text-white" : "text-gray-600"
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                {expandedFunction === "compliance" && (
                  <div className="px-6 pb-6 bg-gray-50">
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        NIPMO enforces the IPR Act, ensuring that outputs from publicly financed research and development benefits the nation.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Developing and maintaining guidelines, practice notes and NIPMO interpretation notes to assist in complying with the IPR Act and Regulations</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Reviewing and responding to collaborative research agreements, ensuring fair commercialisation provisions</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Evaluating IP referred to NIPMO to determine the feasibility of statutory protection or alternative approaches</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* IP Awareness and Advocacy */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFunction("awareness")}
                  className={`w-full flex items-center justify-between py-6 px-6 text-left transition-all duration-300 ${
                    expandedFunction === "awareness"
                      ? "bg-gradient-to-r from-[#a4ba36] to-[#8fa830] text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      expandedFunction === "awareness"
                        ? "bg-white bg-opacity-20"
                        : "bg-[#a4ba36] bg-opacity-10"
                    }`}>
                      <svg className={`w-6 h-6 ${
                        expandedFunction === "awareness" ? "text-white" : "text-[#a4ba36]"
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">IP Awareness and Advocacy</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    expandedFunction === "awareness"
                      ? "bg-white bg-opacity-20"
                      : "bg-gray-100"
                  }`}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${
                      expandedFunction === "awareness" ? "rotate-180 text-white" : "text-gray-600"
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                {expandedFunction === "awareness" && (
                  <div className="px-6 pb-6 bg-gray-50">
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        NIPMO engages in advocacy and awareness activities to strengthen the national IP ecosystem and promote a culture of innovation.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Promoting IP awareness through workshops and stakeholder engagement, celebration of the International World IP day (26 April) and hosting IP Wise workshops for students, SMEs, TVET colleges and interested public stakeholders</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Encouraging the adoption of best practices in IP management across institutions</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Institution led regional Technology Transfer Forums</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Advocating for the role of IP in socio-economic development to broader audiences and facilitating the establishment of Technology Innovations Support Centres across South African (in collaboration with partners)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Funding Support */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFunction("funding")}
                  className={`w-full flex items-center justify-between py-6 px-6 text-left transition-all duration-300 ${
                    expandedFunction === "funding"
                      ? "bg-gradient-to-r from-[#a4ba36] to-[#8fa830] text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      expandedFunction === "funding"
                        ? "bg-white bg-opacity-20"
                        : "bg-[#a4ba36] bg-opacity-10"
                    }`}>
                      <svg className={`w-6 h-6 ${
                        expandedFunction === "funding" ? "text-white" : "text-[#a4ba36]"
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Funding Support</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    expandedFunction === "funding"
                      ? "bg-white bg-opacity-20"
                      : "bg-gray-100"
                  }`}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${
                      expandedFunction === "funding" ? "rotate-180 text-white" : "text-gray-600"
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                {expandedFunction === "funding" && (
                  <div className="px-6 pb-6 bg-gray-50">
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        NIPMO provides financial assistance to institutions through 2 established funding mechanisms namely OTT Support Fund and IP Fund.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Office of Technology Transfer (OTT) Support Fund:</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            The OTT Support Fund, established by NIPMO in 2011 aims to empower institutions to establish and maintain OTTs. It provides financial support for salaries, operational costs, capacity development and technology transfer activities as set out in the OTT Support Fund Guideline (Guideline 7).
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">IP Fund:</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            The NIPMO IP Fund, established under Section 13 of the IPR Act, provides financial support to institutions for securing and maintaining statutory IP rights. The fund operates annually, providing up to 50% rebate (subject to the availability of funds) for eligible costs. Institutions are required to submit an application detailing all costs incurred by 30 June each year. These applications are reviewed in accordance with the IP Fund Guideline (Guideline 2) to determine qualifying costs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Capacity Building */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFunction("capacity")}
                  className={`w-full flex items-center justify-between py-6 px-6 text-left transition-all duration-300 ${
                    expandedFunction === "capacity"
                      ? "bg-gradient-to-r from-[#a4ba36] to-[#8fa830] text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      expandedFunction === "capacity"
                        ? "bg-white bg-opacity-20"
                        : "bg-[#a4ba36] bg-opacity-10"
                    }`}>
                      <svg className={`w-6 h-6 ${
                        expandedFunction === "capacity" ? "text-white" : "text-[#a4ba36]"
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Capacity Building and Skills Development</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    expandedFunction === "capacity"
                      ? "bg-white bg-opacity-20"
                      : "bg-gray-100"
                  }`}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${
                      expandedFunction === "capacity" ? "rotate-180 text-white" : "text-gray-600"
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                {expandedFunction === "capacity" && (
                  <div className="px-6 pb-6 bg-gray-50">
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        NIPMO ensures IP management and Technology Transfer skills are developed and enhanced through hosting certificate training courses.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Co-hosting South Africa WIPO Summer School</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Access to WIPO distant learning courses</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Hosting of the Technology and Innovation Support Centres (TISC) workshops</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Facilitating additional training and capacity-building programs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFunction("resources")}
                  className={`w-full flex items-center justify-between py-6 px-6 text-left transition-all duration-300 ${
                    expandedFunction === "resources"
                      ? "bg-gradient-to-r from-[#a4ba36] to-[#8fa830] text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      expandedFunction === "resources"
                        ? "bg-white bg-opacity-20"
                        : "bg-[#a4ba36] bg-opacity-10"
                    }`}>
                      <svg className={`w-6 h-6 ${
                        expandedFunction === "resources" ? "text-white" : "text-[#a4ba36]"
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Resources for Compliance and Best Practices</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    expandedFunction === "resources"
                      ? "bg-white bg-opacity-20"
                      : "bg-gray-100"
                  }`}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${
                      expandedFunction === "resources" ? "rotate-180 text-white" : "text-gray-600"
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                {expandedFunction === "resources" && (
                  <div className="px-6 pb-6 bg-gray-50">
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        NIPMO issues guidelines and other related resources to assist stakeholders with the interpretation and implementation of the IPR Act.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">NIPMO Resources Include:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Guidelines on IP ownership, scope of the IPR Act, IP policy, operations of the OTT Support Fund, IP Fund and more</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Practice Notes on completion of IP1 and IP7 forms, how to lodge a dispute and more</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Interpretation Notes on co-ownership provisions, data management and IPR Act, IP transactions approval, explanation of legislative forms and more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Benefit-sharing */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFunction("benefits")}
                  className={`w-full flex items-center justify-between py-6 px-6 text-left transition-all duration-300 ${
                    expandedFunction === "benefits"
                      ? "bg-gradient-to-r from-[#a4ba36] to-[#8fa830] text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      expandedFunction === "benefits"
                        ? "bg-white bg-opacity-20"
                        : "bg-[#a4ba36] bg-opacity-10"
                    }`}>
                      <svg className={`w-6 h-6 ${
                        expandedFunction === "benefits" ? "text-white" : "text-[#a4ba36]"
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Benefit-sharing and Incentives</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    expandedFunction === "benefits"
                      ? "bg-white bg-opacity-20"
                      : "bg-gray-100"
                  }`}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${
                      expandedFunction === "benefits" ? "rotate-180 text-white" : "text-gray-600"
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                {expandedFunction === "benefits" && (
                  <div className="px-6 pb-6 bg-gray-50">
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        NIPMO ensures that institutions include benefit-sharing provisions, as required by the IPR Act, into their institutional policies, while also recognising and incentivising IP creators and innovators for their contributions to South Africa's innovation ecosystem.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Benefit Sharing:</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-gray-600 text-sm">NIPMO ensures that institutions include fair and transparent benefit-sharing provisions in their IP policies, as required by the IPR Act</p>
                            </div>
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-gray-600 text-sm">Reviewing and approving institutional policies on revenue and non-monetary benefit-sharing to ensure alignment with the Act</p>
                            </div>
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-gray-600 text-sm">Monitoring institutional compliance with approved benefit sharing policies</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Incentives:</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-gray-600 text-sm">NIPMO promotes IP protection and commercialisation by recognising and rewarding IP creators, innovators and institutions</p>
                            </div>
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-gray-600 text-sm">Issuing Certificates of Recognition to IP creators for granted South African patents or Plant Breeders' Rights (PBR)</p>
                            </div>
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-gray-600 text-sm">Collaborating on specific innovation award categories with external partners</p>
                            </div>
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-gray-600 text-sm">Supporting the implementation of the innovation subsidy for higher education institutions in partnership with DHET</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Monitoring */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFunction("monitoring")}
                  className={`w-full flex items-center justify-between py-6 px-6 text-left transition-all duration-300 ${
                    expandedFunction === "monitoring"
                      ? "bg-gradient-to-r from-[#a4ba36] to-[#8fa830] text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      expandedFunction === "monitoring"
                        ? "bg-white bg-opacity-20"
                        : "bg-[#a4ba36] bg-opacity-10"
                    }`}>
                      <svg className={`w-6 h-6 ${
                        expandedFunction === "monitoring" ? "text-white" : "text-[#a4ba36]"
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Monitoring, Evaluation and Reporting</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    expandedFunction === "monitoring"
                      ? "bg-white bg-opacity-20"
                      : "bg-gray-100"
                  }`}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${
                      expandedFunction === "monitoring" ? "rotate-180 text-white" : "text-gray-600"
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                {expandedFunction === "monitoring" && (
                  <div className="px-6 pb-6 bg-gray-50">
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        NIPMO ensures compliance with the IPR Act by monitoring and evaluating institutions' IP management activities.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Maintaining a confidential register of IP disclosures, commercialisation efforts, and transactions</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Reviewing non-commercialised IP and recommending actions, such as licensing adjustments or reassignment to NIPMO</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Assist with conducting the South African National Survey of Intellectual Property and Technology Transfer at Publicly Funded Research Institutions</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Assisting stakeholders and the public with IP-related queries</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Safeguarding */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFunction("safeguarding")}
                  className={`w-full flex items-center justify-between py-6 px-6 text-left transition-all duration-300 ${
                    expandedFunction === "safeguarding"
                      ? "bg-gradient-to-r from-[#a4ba36] to-[#8fa830] text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      expandedFunction === "safeguarding"
                        ? "bg-white bg-opacity-20"
                        : "bg-[#a4ba36] bg-opacity-10"
                    }`}>
                      <svg className={`w-6 h-6 ${
                        expandedFunction === "safeguarding" ? "text-white" : "text-[#a4ba36]"
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Safeguarding National Interests</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    expandedFunction === "safeguarding"
                      ? "bg-white bg-opacity-20"
                      : "bg-gray-100"
                  }`}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${
                      expandedFunction === "safeguarding" ? "rotate-180 text-white" : "text-gray-600"
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                {expandedFunction === "safeguarding" && (
                  <div className="px-6 pb-6 bg-gray-50">
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        NIPMO ensures that IP from publicly funded R&D is managed responsibly to deliver value and socio-economic benefits to South Africa.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Reviewing and, if all requirements are met, approving IP transactions submitted to NIPMO, including royalty-free non-exclusive licenses (local and offshore), for commercial purpose</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Providing guidance on offshore IP transactions, ensuring compliance with the IPR Act and alignment with national priorities</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#a4ba36] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">Monitoring non-commercialised IP and recommending actions to promote utilisation and benefit the Republic</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* IPR ACT Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-[#a4ba36] bg-opacity-20 rounded-full px-4 py-2 mb-6">
                <svg className="w-5 h-5 text-[#a4ba36] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <span className="text-[#a4ba36] text-sm font-medium">Legislative Foundation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
                Intellectual Property Rights from Publicly Financed
                <span className="text-[#a4ba36]"> Research and Development Act</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                The IPR Act (No. 51 of 2008) serves as the cornerstone legislation governing intellectual property management in South Africa's publicly funded research ecosystem.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white bg-opacity-10 rounded-xl p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-[#a4ba36] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-semibold">Act No. 51</span>
                  </div>
                  <p className="text-gray-300 text-sm">Enacted in 2008</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-xl p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-[#a4ba36] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-semibold">Full Text</span>
                  </div>
                  <p className="text-gray-300 text-sm">Complete legislation</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.dsti.gov.za/images/pdfs/IPR%20Act%20of%202008.pdf"
                  download="IPR_Act_2008.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white flex-1 sm:flex-initial w-full">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download IPR Act PDF
                  </Button>
                </a>
                <a
                  href="https://www.dsti.gov.za/images/pdfs/IPR%20Act%20of%202008.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 flex-1 sm:flex-initial w-full">
                    Read Full Act Online
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:order-2">
              <Card className="bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-2xl border-gray-700">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Provisions of the IPR Act</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#a4ba36] bg-opacity-20 rounded-lg flex items-center justify-center mr-3 mt-1">
                        <span className="text-[#a4ba36] font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">IP Ownership Framework</h4>
                        <p className="text-gray-300 text-sm">Establishes clear ownership rights for IP arising from publicly funded research</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#a4ba36] bg-opacity-20 rounded-lg flex items-center justify-center mr-3 mt-1">
                        <span className="text-[#a4ba36] font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Benefit-Sharing Requirements</h4>
                        <p className="text-gray-300 text-sm">Mandates fair distribution of commercialization benefits to IP creators and institutions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#a4ba36] bg-opacity-20 rounded-lg flex items-center justify-center mr-3 mt-1">
                        <span className="text-[#a4ba36] font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">NIPMO's Regulatory Role</h4>
                        <p className="text-gray-300 text-sm">Defines NIPMO's authority in IP management and compliance oversight</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#a4ba36] bg-opacity-20 rounded-lg flex items-center justify-center mr-3 mt-1">
                        <span className="text-[#a4ba36] font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">National Interest Protection</h4>
                        <p className="text-gray-300 text-sm">Ensures IP serves South Africa's developmental and economic interests</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-600">
                    <div className="text-center">
                      <p className="text-sm text-gray-300 mb-3">Need assistance with IPR Act compliance?</p>
                      <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white text-sm">
                        Contact NIPMO Support
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-6 sm:mb-8">
            NIPMO Advisory Board and Dispute Panel
          </h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              The Advisory Board advises NIPMO on the performance of its functions, the exercise of its powers, the execution of its duties, including providing guidance and assistance to NIPMO in the implementation of the IPR Act and these regulations.
            </p>
            <p>
              The Advisory Board is accountable to the Minister of Science, Technology and Innovation for its performance and on an annual basis provides the Minister with a report detailing its advice to both the Minister and NIPMO.
            </p>
            <p>
              The Advisory Board generally consists of no fewer than five (5), but not more than nine (9) members, appointed by the Minister. The Chairperson presides over the meetings and the Head of NIPMO is an ex-officio member of the Advisory Board.
            </p>
            <p>
              The Dispute panel is established by the Minister to hear and determine disputes regarding the administrative decisions of NIPMO. It is accountable to the Minister for its actions and must on an annual basis provide the Minister with a report detailing a summary of its activities and decisions.
            </p>
            <p>
              The Dispute Panel generally consists of at least five (5) but no more than twenty (20) members with experience and expertise in areas relating to at least, intellectual property protection and management, commercialisation, dispute resolution and business.
            </p>
            <p>
              A sitting of the Dispute Panel for any matter is generally made up of at least three (3) members selected by the Chairperson of the Dispute Panel in consultation with the parties to the dispute.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 bg-[#a4ba36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-6 sm:mb-8">
            Subscribe to our newsletter
          </h2>
          <div className="max-w-md mx-auto">
            <a href="mailto:know.more@nipmo.org.za?subject=Newsletter Subscription">
              <Button className="bg-white text-[#a4ba36] hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium transition-all">
                Subscribe Now
              </Button>
            </a>
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
                <li><Link href="/functions">Functions</Link></li>
                <li><Link href="/news">News & Insights</Link></li>
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
