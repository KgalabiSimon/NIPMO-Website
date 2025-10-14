"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState, useMemo } from "react"
import Header from "@/components/Header"

// Interpretation Notes data structure
interface InterpretationNote {
  id: number;
  date: string;
  number: string;
  title: string;
  downloadUrl?: string;
}

// Interpretation Notes data based on the original NIPMO site
const interpretationNotes: InterpretationNote[] = [
  {
    id: 1,
    date: "05 Nov 2014",
    number: "1",
    title: "NIPMO Compliance In Terms Of The Prescribed Forms",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_1fe1454372404ad193e900badc57fcc5.pdf"
  },
  {
    id: 2,
    date: "31 Mar 2022",
    number: "2",
    title: "Intellectual Property Transaction Approvals",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_d18dc71f33c54e2a9cf46f1798e1c81e.pdf"
  },
  {
    id: 3,
    date: "31 Jul 2015",
    number: "5",
    title: "Specific Ownership Scenarios",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_0eec5750ac1f452e8cd7b0bcdb7ca437.pdf"
  },
  {
    id: 4,
    date: "31 Mar 2016",
    number: "6",
    title: "State Rights To Intellectual Property Developed From Publicly Financed Research And Development",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_74bab08f9a9d4a8785167ebaf0375a82.pdf"
  },
  {
    id: 5,
    date: "31 Aug 2018",
    number: "7",
    title: "Are Data Intellectual Property In Terms Of The Intellectual Property Rights From Publicly Financed Research and Development Act?",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_ed9773306f114148b018ca2cca17fced.pdf"
  },
  {
    id: 6,
    date: "16 Mar 2018",
    number: "8",
    title: "Government Department Funded IP And The Interface With The IPR Act",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_c9e6ea639d4b4371adb42e984d736e83.pdf"
  },
  {
    id: 7,
    date: "22 Mar 2018",
    number: "9",
    title: "Intellectual Property Ownership With Respect To Technology Innovation Agency (TIA) Funding Programmes",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_9f6c7386de624412bf5487b46ab65dd0.pdf"
  },
  {
    id: 8,
    date: "09 Oct 2018",
    number: "10",
    title: "When Do The Intellectual Property Rights From Publicly Financed Research And Development Act Apply?",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_397a21234198458897de22feff7885a1.pdf"
  },
  {
    id: 9,
    date: "14 Dec 2018",
    number: "11",
    title: "State-Owned Enterprises And The Interface With The IPR ACT",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_ab99cb9ca6e94bcab0a696c23adb20db.pdf"
  },
  {
    id: 10,
    date: "07 Nov 2019",
    number: "12",
    title: "Procedure For The Review Of Non-Commercialised Intellectual Property At Institutions",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_52b67afc73934a53b553298a0156c228.pdf"
  },
  {
    id: 11,
    date: "06 Aug 2019",
    number: "13",
    title: "Everything You Need To Know About Full Cost",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_694fa1c9248649ec91c64b93c858175b.pdf"
  },
  {
    id: 12,
    date: "18 Jul 2022",
    number: "14",
    title: "Clarifying Open Science, Open Innovation, And Open Source...",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_ab9267b3c3304f4fa23bfe7b4fca4911.pdf"
  },
  {
    id: 13,
    date: "31 Mar 2025",
    number: "15",
    title: "Benefit-Sharing As Per The IPR ACT",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_33b4bc3573424037b0f3e4b0565adcd7.pdf"
  },
  {
    id: 14,
    date: "31 Mar 2025",
    number: "16",
    title: "Clinical Trials And Intellectual Property",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_961874a289d74f0597a4ad7e5b30c9b2.pdf"
  }
]

export default function InterpretationNotes() {
      const [searchQuery, setSearchQuery] = useState("")

  

  

  // Filter interpretation notes based on search query
  const filteredNotes = useMemo(() => {
    if (!searchQuery.trim()) return interpretationNotes

    return interpretationNotes.filter(note =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.date.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Interpretation Notes Content - Clean White Design */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header and Search */}
            <div className="mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Interpretation Notes
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Search and browse through our comprehensive collection of IPR Act interpretations.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <Input
                  type="text"
                  placeholder="Search interpretation notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a4ba36] focus:border-[#a4ba36] w-full"
                />
              </div>

              {/* Results Count */}
              <p className="mt-4 text-sm text-gray-500">
                {filteredNotes.length} of {interpretationNotes.length} interpretation notes found
              </p>
            </div>

            {/* Interpretation Notes Grid */}
            {filteredNotes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredNotes.map((note) => (
                  <Card key={note.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 h-full flex flex-col overflow-hidden">
                    {/* Top Half - Image covering full width and height */}
                    <div className="relative h-48 w-full">
                      <img
                        src="https://ext.same-assets.com/4026891959/2222132578.png"
                        alt="NIPMO Interpretation Notes"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>

                    {/* Bottom Half - Content */}
                    <CardContent className="p-4 flex flex-col flex-1">
                      <p className="text-xs text-gray-500 mb-1">{note.date}</p>
                      <p className="text-sm font-medium text-[#a4ba36] mb-2">Interpretation Note {note.number}</p>
                      <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-4 flex-1">
                        {note.title}
                      </h3>

                      {/* Download Button */}
                      {note.downloadUrl ? (
                        <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white px-4 py-2 text-sm w-full mt-auto" asChild>
                          <a href={note.downloadUrl} target="_blank" rel="noopener noreferrer">
                            Download
                            <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </Button>
                      ) : (
                        <Button className="bg-gray-400 text-white px-4 py-2 text-sm w-full mt-auto cursor-not-allowed" disabled>
                          Coming Soon
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No interpretation notes found</h3>
                <p className="text-gray-500">Try adjusting your search query to find what you're looking for.</p>
              </div>
            )}
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
